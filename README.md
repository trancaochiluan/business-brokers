# Archway Business Brokers website

Website tiếng Việt mặc định tại `/` và bản tiếng Anh tại `/en/`.

## Stack

- Astro 7 với Tailwind CSS 4.
- Bun `1.4.0` là runtime và package manager.
- Cloudflare Workers thông qua `@astrojs/cloudflare`.
- Astro sitemap tạo sitemap cho hai homepage và hai trang bán doanh nghiệp.
- Resend xử lý email từ form bán và mua doanh nghiệp.
- Zod kiểm tra payload trước khi gửi email.
- Các trang nội dung được prerender thành HTML tĩnh.
- Endpoint `/api/register/` chạy theo request trên Cloudflare Worker.

## Chạy local

```bash
bun install
bun run dev
```

Kiểm tra type và template bằng:

```bash
bun run check
```

Build production bằng:

```bash
bun run build
```

## Form bán và mua doanh nghiệp

Các form tại `/sell-your-business/`, `/en/sell-your-business/`, `/buyer-register/` và `/en/buyer-register/` gửi dữ liệu tới `POST /api/register/`.

Endpoint kiểm tra content type, origin, kích thước request, honeypot và payload Zod trước khi gửi email qua Resend.

Email nội bộ dùng địa chỉ người gửi form trong `Reply-To`.

Nội dung form được escape trước khi đưa vào HTML email.

`RESEND_API_KEY` là Worker secret, còn `FORM_FROM_EMAIL` và `FORM_TO_EMAIL` có giá trị mặc định trong `.env.example`.

Sao chép `.env.example` thành `.env` khi chạy local.

## Deploy Cloudflare

Kết nối repository GitHub với Cloudflare Workers Builds trên branch triển khai.

Đặt build command là:

```bash
bun run build
```

Trong Cloudflare Build Variables, đặt:

```text
BUN_VERSION=1.4.0
```

Đặt deploy command là:

```bash
bunx wrangler deploy --config dist/server/wrangler.json --domains archway.vn
```

Website dùng domain gốc `archway.vn` và không dùng subdomain.

Trong Cloudflare Worker Settings, đặt `RESEND_API_KEY` ở mục Variables and Secrets với loại Secret.

Xác minh domain `archway.vn` trong Resend trước khi gửi email production.

## Kiểm tra trước khi push

```bash
bun run check
bun run build
```
