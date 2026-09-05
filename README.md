# Archway Business Brokers là website môi giới mua bán doanh nghiệp.

Website dùng tiếng Việt tại `/` và tiếng Anh tại `/en/`.

## Project này dùng các công nghệ sau.

- Astro 7 với Tailwind CSS 4.
- Bun 1.4.0 làm runtime và package manager.
- Cloudflare Workers thông qua `@astrojs/cloudflare`.
- Resend gửi email từ các biểu mẫu.
- Zod kiểm tra payload.
- Các trang được prerender thành HTML tĩnh; endpoint `POST /api/register/` chạy trên Cloudflare Worker.

## Project này chạy local bằng các lệnh sau.

```bash
bun install
cp .env.example .env
bun run dev
```

Các lệnh kiểm tra và build gồm:

```bash
bun run check
bun run build
bun run preview
```

Build tạo sitemap cuối cùng tại `dist/client/sitemap.xml`.

## Các biểu mẫu gửi dữ liệu về cùng một endpoint.

Các route `/sell-your-business/`, `/en/sell-your-business/`, `/buyer-register/`, `/en/buyer-register/`, `/contact/` và `/en/contact/` gửi dữ liệu tới `POST /api/register/`.

Endpoint kiểm tra origin, content type, kích thước request, rate limit, honeypot, lựa chọn hợp lệ và payload Zod trước khi gửi email. Nội dung email được escape HTML và địa chỉ người gửi được đưa vào `Reply-To`.

`RESEND_API_KEY` là Worker secret. `FORM_FROM_EMAIL` và `FORM_TO_EMAIL` có giá trị mặc định trong `.env.example`.

## Tài sản tĩnh được giữ trong repository.

`public/assets/image-library/` là thư viện ảnh dành cho các trang tương lai và không được xoá. Các ảnh đã xử lý, manifest, ảnh founder và hero video đều là tài sản tĩnh được chuẩn bị trước build.

Giao diện self-host Montserrat tại `public/fonts/` với weight 400 và 500. Hero video giữ nguyên hành vi, source path và kích thước; chỉ được re-encode file MP4 hoặc WebM khi cần giảm dung lượng.

## Project này deploy lên Cloudflare bằng các lệnh sau.

Build command:

```bash
bun run build
```

Deploy command:

```bash
bunx wrangler deploy --config dist/server/wrangler.json --domains archway.vn
```

Cloudflare Build Variables cần có:

```text
BUN_VERSION=1.4.0
```

Đặt `RESEND_API_KEY` trong Worker Settings với loại Secret và xác minh domain gửi email trong Resend.

## Project này phải vượt qua các kiểm tra sau trước khi commit.

```bash
bun run check
bun run build
git diff --check
```
