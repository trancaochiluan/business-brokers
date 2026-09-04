# Tài liệu này ghi lại các quyết định bảo trì của website.

Tài liệu này giải thích các thay đổi giao diện, nội dung, biểu mẫu và SEO để những lần chỉnh sửa sau giữ đúng mục tiêu hiện tại.

## Giao diện giữ sự tập trung cho biểu mẫu

- Hệ thống màu sử dụng đen, trắng và xám cho nền chính, còn màu đỏ chỉ dùng cho nút, trạng thái, tiến trình và điểm nhấn.
- Các card, khung biểu mẫu, ô nhập liệu và bảng thông tin không dùng đường viền trang trí.
- Đường viền chỉ còn ở các điều khiển cần phản hồi trực quan, chẳng hạn vòng chọn radio, mũi tên menu và biểu tượng loading.
- Các header nội dung dùng khoảng đệm nhỏ hơn, đồng thời giữ khoảng cách trên và dưới cân đối.
- Trang `sell-your-business` bỏ breadcrumb hiển thị, tiêu đề hiển thị, đoạn giới thiệu và thông báo miễn phí để người dùng có thể bắt đầu điền biểu mẫu ngay.
- Trang `sell-your-business` vẫn giữ một `h1` với lớp `sr-only` để bảo đảm cấu trúc tài liệu mà không tạo nhiễu thị giác.
- Card biểu mẫu seller giữ khoảng cách trên `10px` thông qua lớp `mt-2.5`.
- Footer của seller và buyer dùng cùng component `src/components/SiteFooter.astro` với nền đen như các trang nội dung khác.
- Trang buyer chỉ hiển thị cam kết ở section riêng phía dưới và không lặp lại cam kết bên dưới phần bước tiếp theo.
- Trang `how-it-works` dùng vùng quy trình rộng hơn với `max-w-[68rem]` và card bước rộng tối đa `36rem` để nội dung dễ đọc hơn.
- Những route `/about/` và `/industries-we-serve/` chưa được tạo vì chủ dự án sẽ bổ sung sau.

## Tài sản hình ảnh đã được xử lý trước

- Thư mục `public/assets/image-library/` chứa 46 ảnh từ `image_source/common_use/` với các phiên bản AVIF và WebP ở chiều rộng 640px, 1280px và 1920px.
- File `public/assets/image-library/manifest.json` lưu kích thước, dung lượng và đường dẫn của từng phiên bản.
- Ảnh founder từ `image_source/founder.png` đã được tách nền trắng, ghép với `archway_city_view_8` và lưu thành các phiên bản AVIF cùng WebP 320px và 640px trong `public/assets/founder/`.
- Section thuyết phục trên homepage dùng ảnh founder bằng phần tử `picture`, với `alt` song ngữ và `srcset` phù hợp với kích thước hiển thị.
- Các ảnh là tài sản tĩnh đã được xử lý trước khi commit. Project không duy trì script xử lý ảnh trong repository và không chạy pipeline ảnh trong lúc build. Khi thay ảnh nguồn, cần xử lý bên ngoài rồi cập nhật các file trong `public/assets/` cùng manifest tương ứng.

## Hiệu ứng chuyển bước của biểu mẫu

- Các nút `Next` hoặc `Continue` hiển thị spinner trong `320ms` trước khi chuyển bước để người dùng nhận biết thao tác đang được xử lý.
- Script chuyển bước khóa nút quay lại trong thời gian chờ để tránh thay đổi trạng thái giữa hai bước.
- Script vẫn dùng timeout `15 giây` cho request gửi biểu mẫu vì timeout này bảo vệ thao tác gửi email, còn delay `320ms` chỉ tạo phản hồi thị giác cho chuyển bước.
- Logic chuyển bước nằm trong `src/scripts/buyer-form.js` và `src/scripts/seller-form.js`, còn script cũ trong `public/` không còn được dùng.

## Bảo vệ endpoint biểu mẫu

- Endpoint `POST /api/register/` không dùng Turnstile.
- Endpoint kiểm tra origin, content type, kích thước request, honeypot, giá trị lựa chọn và payload bằng Zod trước khi gửi email.
- Endpoint giới hạn tối đa `5` request trong `10` phút cho mỗi địa chỉ IP theo cơ chế in-memory best effort.
- Cơ chế rate limit in-memory không thay thế WAF hoặc rate limit phân tán nếu lưu lượng production tăng đáng kể.
- Nội dung đưa vào email phải tiếp tục được escape HTML trước khi render.

## Nội dung song ngữ và SEO

- Nội dung tiếng Việt và tiếng Anh phải tương đương về ý nghĩa, đặc biệt ở homepage, seller, buyer, contact và quy trình bán doanh nghiệp.
- Homepage dùng component chung `src/components/HomePage.astro` để tránh hai bản markup bị lệch nội dung.
- Homepage có thêm một section nền trắng phía dưới hero để giải thích lý do chọn Archway bằng giọng văn thân thiện, tôn trọng và tập trung vào giá trị doanh nghiệp.
- Section thuyết phục trên homepage có ảnh founder hình tròn bên trái, với `alt` song ngữ và nền thành phố đã được xử lý trước.
- Nội dung section này giữ đúng ba đoạn: đoạn đầu giới thiệu và đồng cảm, đoạn hai giải thích năng lực cùng giá trị mang lại, còn đoạn ba giải thích cách đồng hành trong hành trình M&A và lý do nên chuẩn bị sớm.
- Các trang nội dung dùng breadcrumb hiển thị cùng structured data trong `SiteLayout`, ngoại trừ seller vì seller ưu tiên thao tác điền form trực tiếp.
- Seller giữ `h1` ẩn hỗ trợ cấu trúc SEO, còn các trang nội dung khác giữ h1 hiển thị.
- Sitemap giữ các trang công khai chính, đồng thời loại trang `404` và chính sách quyền riêng tư theo chủ đích `noIndex` hiện tại.
- File `public/llms.txt` mô tả dịch vụ, tiêu chí, biểu mẫu và các URL song ngữ chính.

## Cách kiểm tra trước khi bàn giao

- Lệnh `bun run check` phải hoàn thành mà không có lỗi hoặc cảnh báo.
- Lệnh `bun run build` phải hoàn thành, đồng thời phải tạo sitemap cuối cùng.
- Kiểm tra `git diff --check` để bảo đảm không có whitespace lỗi.
- Kiểm tra link nội bộ sau build, ngoại trừ bốn route about và industries đang chờ chủ dự án tạo.
