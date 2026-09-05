const REQUEST_TIMEOUT = 15_000;

export const requestForm = async (form) => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    return await fetch(form.action || '/api/register/', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timeoutId);
  }
};

export const submitForm = async (form) => {
  const response = await requestForm(form);
  const payload = await response.json().catch(() => null);
  const validationFields = response.status === 400 && payload?.error === 'validation_failed' && Array.isArray(payload.fields)
    ? payload.fields.filter((field) => typeof field === 'string')
    : [];

  return {
    ok: response.ok && payload?.ok === true,
    validationFields,
  };
};

export const getValidationMessage = (form, fields) => {
  if (fields.includes('email')) return form.dataset.invalidEmailMessage || form.dataset.validationErrorMessage || '';
  return form.dataset.validationErrorMessage || '';
};

export const focusValidationField = (form, fields) => {
  for (const field of fields) {
    if (field === 'form') continue;
    const control = form.elements.namedItem(field);
    if (control instanceof HTMLElement) {
      control.focus();
      return;
    }
  }
};
