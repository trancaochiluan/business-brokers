import { RESEND_API_KEY, FORM_FROM_EMAIL, FORM_TO_EMAIL } from 'astro:env/server';
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { z } from 'zod';

export const prerender = false;

const MAX_REQUEST_BYTES = 32 * 1024;
const securityHeaders = {
  'content-security-policy': "default-src 'none'; frame-ancestors 'none'; form-action 'self'",
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
};

const requiredText = (max: number) => z.string().trim().min(1).max(max);
const optionalText = (max: number) =>
  z.preprocess(
    (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
    z.string().trim().max(max).optional(),
  );
const email = z.string().trim().pipe(z.email().max(254));
const phone = z.string().trim().min(7).max(32).regex(/\d{7,}/);

const sellerSchema = z
  .object({
    form_type: z.literal('seller'),
    locale: z.enum(['vi', 'en']),
    timeline: requiredText(80),
    industry: requiredText(160),
    employees: requiredText(80),
    revenue: requiredText(80),
    profit: requiredText(80),
    province: requiredText(120),
    website: requiredText(255),
    name: requiredText(120),
    email,
    phone,
    'privacy-consent': z.literal('on'),
    fax_number: z.string().max(120).optional(),
  })
  .strip()
  .superRefine((data, context) => {
    if (data.fax_number?.trim()) {
      context.addIssue({ code: 'custom', path: ['fax_number'], message: 'Invalid submission' });
    }
  });

const buyerSchema = z
  .object({
    form_type: z.literal('buyer'),
    locale: z.enum(['vi', 'en']),
    full_name: requiredText(120),
    company_name: optionalText(200),
    phone,
    email,
    province: requiredText(120),
    ward: requiredText(120),
    capital: requiredText(120),
    cashflow: requiredText(120),
    locations: z.array(requiredText(120)).min(1).max(10),
    industries: z.array(requiredText(160)).min(1).max(20),
    criteria: requiredText(3_000),
    'privacy-consent': z.literal('on'),
    newsletter: z.string().max(20).optional(),
    fax_number: z.string().max(120).optional(),
  })
  .strip()
  .superRefine((data, context) => {
    if (data.fax_number?.trim()) {
      context.addIssue({ code: 'custom', path: ['fax_number'], message: 'Invalid submission' });
    }
    if (data.newsletter && data.newsletter !== 'on') {
      context.addIssue({ code: 'custom', path: ['newsletter'], message: 'Invalid submission' });
    }
  });

const contactSchema = z
  .object({
    form_type: z.literal('contact'),
    locale: z.enum(['vi', 'en']),
    name: requiredText(120),
    email,
    message: requiredText(3_000),
    'privacy-consent': z.literal('on'),
    fax_number: z.string().max(120).optional(),
  })
  .strip()
  .superRefine((data, context) => {
    if (data.fax_number?.trim()) {
      context.addIssue({ code: 'custom', path: ['fax_number'], message: 'Invalid submission' });
    }
  });

const submissionSchema = z.discriminatedUnion('form_type', [sellerSchema, buyerSchema, contactSchema]);
type Submission = z.infer<typeof submissionSchema>;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const jsonResponse = (body: Record<string, unknown>, status: number, requestId: string) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...securityHeaders,
      'cache-control': 'no-store',
      'content-type': 'application/json; charset=utf-8',
      'x-request-id': requestId,
    },
  });

const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => htmlEntities[character]);

const formatValue = (value: string) => escapeHtml(value).replace(/\r?\n/g, '<br />');

const getString = (form: FormData, name: string) => {
  const value = form.get(name);
  return typeof value === 'string' ? value : undefined;
};

const getValues = (form: FormData, prefix: string) =>
  Array.from(form.entries()).flatMap(([name, value]) => {
    if (!name.startsWith(prefix) || typeof value !== 'string') return [];
    return [value];
  });

const toSubmissionInput = (form: FormData): Record<string, unknown> | null => {
  const formType = getString(form, 'form_type');
  const common = {
    form_type: formType,
    locale: getString(form, 'locale'),
    'privacy-consent': getString(form, 'privacy-consent'),
    fax_number: getString(form, 'fax_number'),
  };

  if (formType === 'seller') {
    return {
      ...common,
      timeline: getString(form, 'timeline'),
      industry: getString(form, 'industry'),
      employees: getString(form, 'employees'),
      revenue: getString(form, 'revenue'),
      profit: getString(form, 'profit'),
      province: getString(form, 'province'),
      website: getString(form, 'website'),
      name: getString(form, 'name'),
      email: getString(form, 'email'),
      phone: getString(form, 'phone'),
    };
  }

  if (formType === 'buyer') {
    return {
      ...common,
      full_name: getString(form, 'full_name'),
      company_name: getString(form, 'company_name'),
      phone: getString(form, 'phone'),
      email: getString(form, 'email'),
      province: getString(form, 'province'),
      ward: getString(form, 'ward'),
      capital: getString(form, 'capital'),
      cashflow: getString(form, 'cashflow'),
      locations: getValues(form, 'loc-'),
      industries: getValues(form, 'industry-'),
      criteria: getString(form, 'criteria'),
      newsletter: getString(form, 'newsletter'),
    };
  }

  if (formType === 'contact') {
    return {
      ...common,
      name: getString(form, 'name'),
      email: getString(form, 'email'),
      message: getString(form, 'message'),
    };
  }

  return null;
};

const getEmailLabels = (locale: Submission['locale'], formType: Submission['form_type']) => {
  if (locale === 'vi' && formType === 'seller') {
    return {
      title: 'Yêu cầu bán doanh nghiệp',
      details: 'Thông tin doanh nghiệp',
      timeline: 'Thời điểm dự kiến bán',
      industry: 'Ngành',
      employees: 'Số nhân viên',
      revenue: 'Doanh thu 12 tháng gần nhất',
      profit: 'Lợi nhuận ròng 12 tháng gần nhất',
      province: 'Tỉnh hoặc thành phố',
      website: 'Website hoặc fanpage',
      name: 'Họ và tên',
      email: 'Email',
      phone: 'Số điện thoại',
      reply: 'Trả lời người gửi',
      received: 'Tiếp nhận lúc',
      requestId: 'Mã yêu cầu',
    };
  }

  if (formType === 'contact') {
    return locale === 'vi'
      ? {
          title: 'Tin nhắn liên hệ',
          details: 'Thông tin liên hệ',
          name: 'Họ và tên',
          email: 'Email',
          message: 'Tin nhắn',
          reply: 'Trả lời người gửi',
          received: 'Tiếp nhận lúc',
          requestId: 'Mã yêu cầu',
        }
      : {
          title: 'Contact message',
          details: 'Contact details',
          name: 'Full name',
          email: 'Email',
          message: 'Message',
          reply: 'Reply to sender',
          received: 'Received at',
          requestId: 'Request ID',
        };
  }

  if (locale === 'vi') {
    return {
      title: 'Đăng ký danh sách người mua',
      details: 'Thông tin người mua',
      fullName: 'Họ và tên',
      company: 'Công ty',
      phone: 'Số điện thoại',
      email: 'Email',
      province: 'Tỉnh hoặc thành phố',
      ward: 'Phường hoặc xã',
      capital: 'Vốn có thể đầu tư',
      cashflow: 'Dòng tiền tối thiểu kỳ vọng',
      locations: 'Khu vực quan tâm',
      industries: 'Ngành quan tâm',
      criteria: 'Tiêu chí mua khác',
      newsletter: 'Nhận cập nhật định kỳ',
      yes: 'Có',
      reply: 'Trả lời người gửi',
      received: 'Tiếp nhận lúc',
      requestId: 'Mã yêu cầu',
    };
  }

  if (formType === 'seller') {
    return {
      title: 'Business sale enquiry',
      details: 'Business information',
      timeline: 'Expected sale timing',
      industry: 'Industry',
      employees: 'Number of employees',
      revenue: 'Revenue in the last 12 months',
      profit: 'Net profit in the last 12 months',
      province: 'City or province',
      website: 'Website or social page',
      name: 'Full name',
      email: 'Email',
      phone: 'Mobile number',
      reply: 'Reply to sender',
      received: 'Received at',
      requestId: 'Request ID',
    };
  }

  return {
    title: 'Priority buyer registration',
    details: 'Buyer information',
    fullName: 'Full name',
    company: 'Company',
    phone: 'Mobile number',
    email: 'Email',
    province: 'City or province',
    ward: 'Ward or commune',
    capital: 'Available investment capital',
    cashflow: 'Minimum expected cash flow',
    locations: 'Areas of interest',
    industries: 'Industries of interest',
    criteria: 'Additional buying criteria',
    newsletter: 'Periodic updates',
    yes: 'Yes',
    reply: 'Reply to sender',
    received: 'Received at',
    requestId: 'Request ID',
  };
};

const renderEmail = (submission: Submission, requestId: string) => {
  const labels = getEmailLabels(submission.locale, submission.form_type);
  const fields: Array<[string | undefined, string | undefined]> =
    submission.form_type === 'seller'
      ? [
          [labels.timeline, submission.timeline],
          [labels.industry, submission.industry],
          [labels.employees, submission.employees],
          [labels.revenue, submission.revenue],
          [labels.profit, submission.profit],
          [labels.province, submission.province],
          [labels.website, submission.website],
          [labels.name, submission.name],
          [labels.email, submission.email],
          [labels.phone, submission.phone],
        ]
      : submission.form_type === 'buyer'
        ? [
            [labels.fullName, submission.full_name],
            [labels.company, submission.company_name],
            [labels.phone, submission.phone],
            [labels.email, submission.email],
            [labels.province, submission.province],
            [labels.ward, submission.ward],
            [labels.capital, submission.capital],
            [labels.cashflow, submission.cashflow],
            [labels.locations, submission.locations.join(', ')],
            [labels.industries, submission.industries.join(', ')],
            [labels.criteria, submission.criteria],
            [labels.newsletter, submission.newsletter === 'on' ? labels.yes : undefined],
          ]
        : [
            [labels.name, submission.name],
            [labels.email, submission.email],
            [labels.message, submission.message],
          ];
  const rows = fields
    .filter(([label, value]) => label !== undefined && value !== undefined && value !== '')
    .map(
      ([label, value]) =>
        `<tr><td width="36%" valign="top" style="padding:14px 16px 14px 0;border-bottom:1px solid #e6cdd2;color:#6f4b52;font-size:13px;line-height:1.4;">${formatValue(label ?? '')}</td><td valign="top" style="padding:14px 0;border-bottom:1px solid #e6cdd2;color:#2a0b12;font-size:15px;line-height:1.5;">${formatValue(value ?? '')}</td></tr>`,
    )
    .join('');
  const receivedAt = new Date().toISOString().replace('T', ' ').replace('Z', ' UTC');
  const replyEmail = submission.email;
  const replyHref = `mailto:${encodeURIComponent(replyEmail).replace('%40', '@')}`;

  return `<!doctype html>
<html lang="${submission.locale}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#f0dfe2;color:#2a0b12;font-family:Arial,Helvetica,sans-serif;line-height:1.5;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0dfe2;">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;background:#ffffff;border:1px solid #d8aeb6;">
      <tr><td style="padding:28px 32px;background:#2a0b12;color:#ffffff;">
        <p style="margin:0;color:#ffffff;font-size:12px;font-weight:500;line-height:1.4;">ARCHWAY BUSINESS BROKERS</p>
        <h1 style="margin:8px 0 0;color:#ffffff;font-size:24px;font-weight:500;line-height:1.25;">${formatValue(labels.title)}</h1>
      </td></tr>
      <tr><td style="padding:28px 32px;">
        <h2 style="margin:0 0 8px;color:#c52233;font-size:22px;font-weight:500;line-height:1.3;">${formatValue(labels.details)}</h2>
        <p style="margin:0;color:#2a0b12;font-size:16px;line-height:1.5;">${formatValue(submission.form_type === 'buyer' ? submission.full_name : submission.name)} &lt;${formatValue(replyEmail)}&gt;</p>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0 30px;">
          <tr><td style="background:#c52233;"><a href="${replyHref}" style="display:inline-block;padding:11px 16px;color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;">${formatValue(labels.reply)}</a></td></tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">${rows}</table>
      </td></tr>
      <tr><td style="padding:18px 32px;background:#f0dfe2;border-top:1px solid #d8aeb6;color:#6f4b52;font-size:12px;line-height:1.6;">
        ${formatValue(labels.received)}: ${formatValue(receivedAt)}<br>
        ${formatValue(labels.requestId)}: ${formatValue(requestId)}
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
};

const isAllowedOrigin = (request: Request) => {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
};

export const POST: APIRoute = async ({ request }) => {
  const requestId = crypto.randomUUID();
  const contentType = request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase();

  if (contentType !== 'multipart/form-data' && contentType !== 'application/x-www-form-urlencoded') {
    return jsonResponse({ ok: false }, 415, requestId);
  }
  if (!isAllowedOrigin(request)) return jsonResponse({ ok: false }, 403, requestId);

  const declaredLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ ok: false }, 413, requestId);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ ok: false }, 400, requestId);
  }

  let estimatedFormSize = 0;
  for (const [key, value] of formData.entries()) {
    if (typeof value !== 'string') return jsonResponse({ ok: false }, 413, requestId);
    estimatedFormSize += key.length + value.length;
  }
  if (estimatedFormSize > MAX_REQUEST_BYTES) return jsonResponse({ ok: false }, 413, requestId);

  const input = toSubmissionInput(formData);
  if (!input) return jsonResponse({ ok: false }, 400, requestId);
  const parsed = submissionSchema.safeParse(input);
  if (!parsed.success) return jsonResponse({ ok: false }, 400, requestId);
  if (!resend) {
    console.error(JSON.stringify({ event: 'form_configuration_missing', requestId, form: parsed.data.form_type }));
    return jsonResponse({ ok: false }, 503, requestId);
  }

  const submission = parsed.data;
  const subjectType =
    submission.form_type === 'seller'
      ? submission.locale === 'vi'
        ? 'Yêu cầu bán doanh nghiệp'
        : 'Business sale enquiry'
      : submission.form_type === 'buyer'
        ? submission.locale === 'vi'
          ? 'Đăng ký danh sách người mua'
          : 'Priority buyer registration'
        : submission.locale === 'vi'
          ? 'Tin nhắn liên hệ'
          : 'Contact message';
  const subjectName = (submission.form_type === 'buyer' ? submission.full_name : submission.name)
    .replace(/[\r\n]+/g, ' ')
    .slice(0, 80);

  try {
    const { error } = await resend.emails.send({
      from: FORM_FROM_EMAIL,
      to: [FORM_TO_EMAIL],
      replyTo: submission.email,
      subject: `[Archway Business Brokers] ${subjectType} | ${subjectName}`,
      html: renderEmail(submission, requestId),
    });

    if (error) {
      console.error(JSON.stringify({ event: 'form_email_failed', requestId, form: submission.form_type }));
      return jsonResponse({ ok: false }, 502, requestId);
    }
  } catch {
    console.error(JSON.stringify({ event: 'form_email_failed', requestId, form: submission.form_type }));
    return jsonResponse({ ok: false }, 502, requestId);
  }

  console.info(JSON.stringify({ event: 'form_submitted', requestId, form: submission.form_type }));
  return jsonResponse({ ok: true }, 202, requestId);
};

export const ALL: APIRoute = async ({ request }) => {
  const requestId = crypto.randomUUID();
  if (!isAllowedOrigin(request)) return jsonResponse({ ok: false }, 403, requestId);

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        ...securityHeaders,
        allow: 'POST, OPTIONS',
        'access-control-allow-methods': 'POST, OPTIONS',
        'access-control-allow-origin': new URL(request.url).origin,
        'cache-control': 'no-store',
        'x-request-id': requestId,
      },
    });
  }

  const response = jsonResponse({ ok: false }, 405, requestId);
  response.headers.set('allow', 'POST, OPTIONS');
  return response;
};
