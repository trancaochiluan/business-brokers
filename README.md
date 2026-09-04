# Archway Business Brokers website

Website tiếng Việt mặc định tại `/` và bản tiếng Anh tại `/en/`.

## Stack

- Astro 7 với Tailwind CSS 4.
- Bun `1.4.0` là runtime và package manager.
- Cloudflare Workers thông qua `@astrojs/cloudflare`.
- Astro sitemap tạo sitemap cho các trang công khai, ngoại trừ trang 404.
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

Các form tại `/sell-your-business/`, `/en/sell-your-business/`, `/buyer-register/`, `/en/buyer-register/`, `/contact/` và `/en/contact/` gửi dữ liệu tới `POST /api/register/`.

Endpoint kiểm tra content type, origin, giới hạn tần suất, kích thước request, honeypot, giá trị lựa chọn và payload Zod trước khi gửi email qua Resend.

Email nội bộ dùng địa chỉ người gửi form trong `Reply-To`.

Nội dung form được escape trước khi đưa vào HTML email.

`RESEND_API_KEY` là Worker secret, còn `FORM_FROM_EMAIL` và `FORM_TO_EMAIL` có giá trị mặc định trong `.env.example`.

## Tài sản hình ảnh đã được chuẩn bị

Thư mục `public/assets/image-library/` chứa 46 ảnh được lấy từ `image_source/common_use/` và đã được xử lý sẵn thành các phiên bản AVIF cùng WebP ở chiều rộng 640px, 1280px và 1920px. File `public/assets/image-library/manifest.json` lưu kích thước, dung lượng và đường dẫn của từng phiên bản.

Ảnh founder tại `/home/luan/archway/image_source/founder.png` đã được tách khỏi nền trắng, ghép lên ảnh thành phố `archway_city_view_8` và xuất thành các phiên bản 320px cùng 640px trong `public/assets/founder/`. Homepage sử dụng phần tử `picture` để ưu tiên AVIF, sau đó dùng WebP và chọn kích thước phù hợp với màn hình.

Các ảnh này là tài sản tĩnh đã được xử lý trước khi commit. Project không chạy pipeline xử lý ảnh trong lúc build. Khi thay ảnh nguồn, cần xử lý bên ngoài rồi cập nhật các file trong `public/assets/` và manifest tương ứng.

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
