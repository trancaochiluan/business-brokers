# Project này ghi lại các quyết định bảo trì cần được giữ nguyên.

## Giao diện giữ trọng tâm vào biểu mẫu.

- Nền chính dùng đen, trắng và xám; màu đỏ chỉ dùng cho nút, trạng thái, tiến trình và điểm nhấn.
- Card, khung biểu mẫu và ô nhập liệu không dùng đường viền trang trí; đường viền chỉ xuất hiện ở điều khiển cần phản hồi.
- Seller ưu tiên điền form trực tiếp, giữ `h1` với lớp `sr-only`, không hiển thị breadcrumb, tiêu đề, đoạn giới thiệu hoặc thông báo miễn phí.
- Buyer chỉ hiển thị cam kết trong section riêng.
- Seller và buyer dùng chung `src/components/SiteFooter.astro`.
- Homepage dùng `src/components/HomePage.astro` cho cả hai ngôn ngữ và giữ section founder với ba đoạn nội dung.
- Trang `how-it-works` giữ vùng nội dung rộng `max-w-[68rem]` và card bước rộng tối đa `36rem`.
- Các route `/about/` và `/industries-we-serve/`, cùng bản tiếng Anh, chưa được tạo và phải giữ nguyên liên kết để bổ sung sau.

## Tài sản tĩnh được xử lý trước khi build.

- `public/assets/image-library/` chứa 46 ảnh cùng các bản AVIF và WebP ở chiều rộng 640px, 1280px và 1920px; `manifest.json` lưu metadata. Không xoá hoặc di chuyển thư mục này vì đây là thư viện dành cho các trang tương lai.
- `public/assets/founder/` chứa các bản 320px và 640px đã xử lý của ảnh founder. Khi thay ảnh nguồn, xử lý bên ngoài rồi cập nhật asset và manifest, vì project không chạy pipeline ảnh trong lúc build.
- Giao diện dùng một webfont Montserrat với weight 400 và 500 tại `public/fonts/`; không thêm lại Google Fonts.
- Hero video giữ nguyên markup, poster, source path, autoplay, loop, mute, kích thước 1280x720 và thời lượng khoảng 10 giây. Chỉ được re-encode `hero-video.mp4` H.264 hoặc `hero-video.webm` VP8 để giảm dung lượng, không sửa hành vi trong `HomePage.astro` hoặc `hero-video.js`.

## Biểu mẫu dùng chung quy tắc chuyển bước và gửi dữ liệu.

- `src/scripts/request-form.js` chứa request dùng chung cho buyer, seller và contact.
- Chuyển bước hiển thị spinner trong 320 ms và khóa nút quay lại trong thời gian chờ.
- Request gửi form có timeout 15 giây.
- `POST /api/register/` không dùng Turnstile; endpoint kiểm tra origin, content type, kích thước request, honeypot, lựa chọn hợp lệ và payload bằng Zod.
- Rate limit hiện tại là tối đa 5 request trong 10 phút cho mỗi IP theo cơ chế in-memory best effort, không thay thế WAF hoặc rate limit phân tán.
- Nội dung đưa vào HTML email phải tiếp tục được escape.

## SEO và nội dung song ngữ phải nhất quán.

- Homepage, seller, buyer, contact và quy trình bán doanh nghiệp phải giữ tương đương ý nghĩa giữa tiếng Việt và tiếng Anh.
- `SiteLayout` quản lý title, description, viewport, canonical, hreflang, Open Graph, Twitter metadata và JSON-LD; homepage giữ metadata ngắn gọn để hạn chế bị cắt trên kết quả tìm kiếm.
- Trang nội dung dùng breadcrumb hiển thị và structured data; seller ưu tiên thao tác form nên không hiển thị breadcrumb.
- Seller giữ `h1` ẩn; các trang nội dung khác giữ `h1` hiển thị.
- Sitemap chỉ gồm trang công khai, loại 404 và privacy policy. Privacy policy giữ `noindex`.
- `public/llms.txt` mô tả dịch vụ, tiêu chí, biểu mẫu và các URL song ngữ chính.

## CSP và build phải giữ tính tương thích.

- `astro.config.mjs` dùng `assetsInlineLimit: 0` để script Astro được xuất thành file ngoài và hoạt động với `script-src 'self'`.
- `public/_headers` chỉ cho phép font từ cùng origin; không thêm `unsafe-inline` cho script.

## Bản build phải vượt qua các kiểm tra sau.

- `bun run check` phải hoàn thành với 0 lỗi, 0 cảnh báo và 0 hint.
- `bun run build` phải hoàn thành và tạo sitemap cuối cùng.
- `git diff --check` phải không phát hiện whitespace lỗi.
- Kiểm tra link nội bộ sau build, ngoại trừ bốn route about và industries đang chờ tạo.
