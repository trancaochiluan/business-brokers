import type { IndustryImage } from './industry-pages';

interface ServiceItem {
  title: string;
  text: string;
  image: IndustryImage;
  imagePosition?: 'left' | 'right';
  linkLabel?: string;
}

interface OutcomeItem {
  title: string;
  text: string;
}

interface BenchmarkItem {
  value: string;
}

type BenchmarkItems = [BenchmarkItem, BenchmarkItem, BenchmarkItem, BenchmarkItem];

interface LocalizedServicePage {
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  heading: string;
  intro: string;
  leadHeading: string;
  leadParagraphs: string[];
  leadLink: string;
  servicesHeading: string;
  servicesIntro: string;
  services: ServiceItem[];
  benchmarkHeading: string;
  benchmarkIntro: string;
  benchmarkItems: BenchmarkItems;
  benchmarkNote: string;
  benchmarkExampleHeading: string;
  benchmarkExampleParagraphs: string[];
  outcomesHeading: string;
  outcomesIntro: string;
  outcomes: OutcomeItem[];
  ctaHeading: string;
  ctaText: string;
  ctaLink: string;
  homeLabel: string;
  industriesLabel: string;
  footerAddress: string;
  footerPhone: string;
}

export interface IndustryServicePage {
  slug: string;
  heroImage: IndustryImage;
  leadImage: IndustryImage;
  ctaImage: IndustryImage;
  vi: LocalizedServicePage;
  en: LocalizedServicePage;
}

const valuationImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_business_people_reviewing_financial_documents_10-640.avif 640w, /assets/image-library/archway_business_people_reviewing_financial_documents_10-1280.avif 1280w, /assets/image-library/archway_business_people_reviewing_financial_documents_10-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_business_people_reviewing_financial_documents_10-640.webp 640w, /assets/image-library/archway_business_people_reviewing_financial_documents_10-1280.webp 1280w, /assets/image-library/archway_business_people_reviewing_financial_documents_10-1920.webp 1920w",
  src: "/assets/image-library/archway_business_people_reviewing_financial_documents_10-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Chủ doanh nghiệp xem xét tài liệu tài chính cùng cố vấn",
  altEn: "Business owner reviewing financial documents with an adviser",
};

const positioningImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_owner_working_5-640.avif 640w, /assets/image-library/archway_owner_working_5-1280.avif 1280w, /assets/image-library/archway_owner_working_5-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_owner_working_5-640.webp 640w, /assets/image-library/archway_owner_working_5-1280.webp 1280w, /assets/image-library/archway_owner_working_5-1920.webp 1920w",
  src: "/assets/image-library/archway_owner_working_5-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Kỹ thuật viên làm việc với hệ thống trong cơ sở vận hành",
  altEn: "Technician working with systems at an operating facility",
};

const transactionImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_sign_contract-640.avif 640w, /assets/image-library/archway_sign_contract-1280.avif 1280w, /assets/image-library/archway_sign_contract-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_sign_contract-640.webp 640w, /assets/image-library/archway_sign_contract-1280.webp 1280w, /assets/image-library/archway_sign_contract-1920.webp 1920w",
  src: "/assets/image-library/archway_sign_contract-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Các bên xem xét và ký tài liệu giao dịch",
  altEn: "Parties reviewing and signing transaction documents",
};

const ctaImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_city_view_12-640.avif 640w, /assets/image-library/archway_city_view_12-1280.avif 1280w, /assets/image-library/archway_city_view_12-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_city_view_12-640.webp 640w, /assets/image-library/archway_city_view_12-1280.webp 1280w, /assets/image-library/archway_city_view_12-1920.webp 1920w",
  src: "/assets/image-library/archway_city_view_12-1280.webp",
  width: 1280,
  height: 719,
  altVi: "Toàn cảnh Thành phố Hồ Chí Minh",
  altEn: "View across Ho Chi Minh City",
};

const hvacHeroImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_owner_working_2-640.avif 640w, /assets/image-library/archway_owner_working_2-1280.avif 1280w, /assets/image-library/archway_owner_working_2-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_owner_working_2-640.webp 640w, /assets/image-library/archway_owner_working_2-1280.webp 1280w, /assets/image-library/archway_owner_working_2-1920.webp 1920w",
  src: "/assets/image-library/archway_owner_working_2-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Đội ngũ kỹ thuật trao đổi tại một cơ sở công nghiệp",
  altEn: "Technical team reviewing equipment at an industrial facility",
};

const hvacLeadImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_hvac_ductwork-640.avif 640w, /assets/image-library/archway_hvac_ductwork-1280.avif 1280w, /assets/image-library/archway_hvac_ductwork-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_hvac_ductwork-640.webp 640w, /assets/image-library/archway_hvac_ductwork-1280.webp 1280w, /assets/image-library/archway_hvac_ductwork-1920.webp 1920w",
  src: "/assets/image-library/archway_hvac_ductwork-1280.webp",
  width: 1280,
  height: 854,
  altVi: "Hệ thống ống gió HVAC và cửa cấp khí trong một công trình thương mại",
  altEn: "HVAC ductwork and air diffusers in a commercial building",
};

const electricalHeroImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_solar_panel-640.avif 640w, /assets/image-library/archway_solar_panel-1280.avif 1280w, /assets/image-library/archway_solar_panel-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_solar_panel-640.webp 640w, /assets/image-library/archway_solar_panel-1280.webp 1280w, /assets/image-library/archway_solar_panel-1920.webp 1920w",
  src: "/assets/image-library/archway_solar_panel-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Công nhân lắp đặt hệ thống điện mặt trời",
  altEn: "Workers installing an electrical system",
};

const electricalLeadImage: IndustryImage = {
  avifSrcset: "/assets/image-library/electrical_contractors-640.avif 640w, /assets/image-library/electrical_contractors-1280.avif 1280w, /assets/image-library/electrical_contractors-1920.avif 1920w",
  webpSrcset: "/assets/image-library/electrical_contractors-640.webp 640w, /assets/image-library/electrical_contractors-1280.webp 1280w, /assets/image-library/electrical_contractors-1920.webp 1920w",
  src: "/assets/image-library/electrical_contractors-1280.webp",
  width: 1280,
  height: 854,
  altVi: "Kỹ thuật viên làm việc với hệ thống điện trong công trình công nghiệp",
  altEn: "Technicians working on electrical systems in an industrial facility",
};

const logisticsHeroImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_storage-640.avif 640w, /assets/image-library/archway_storage-1280.avif 1280w, /assets/image-library/archway_storage-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_storage-640.webp 640w, /assets/image-library/archway_storage-1280.webp 1280w, /assets/image-library/archway_storage-1920.webp 1920w",
  src: "/assets/image-library/archway_storage-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Kho hàng với hệ thống kệ lưu trữ",
  altEn: "Warehouse with storage racking",
};

const logisticsLeadImage: IndustryImage = {
  avifSrcset: "/assets/image-library/3pl_logistics-640.avif 640w, /assets/image-library/3pl_logistics-1280.avif 1280w, /assets/image-library/3pl_logistics-1920.avif 1920w",
  webpSrcset: "/assets/image-library/3pl_logistics-640.webp 640w, /assets/image-library/3pl_logistics-1280.webp 1280w, /assets/image-library/3pl_logistics-1920.webp 1920w",
  src: "/assets/image-library/3pl_logistics-1280.webp",
  width: 1280,
  height: 562,
  altVi: "Xe nâng di chuyển hàng hóa trong kho logistics",
  altEn: "Forklift moving goods inside a logistics warehouse",
};

const industrialHeroImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_factory-640.avif 640w, /assets/image-library/archway_factory-1280.avif 1280w, /assets/image-library/archway_factory-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_factory-640.webp 640w, /assets/image-library/archway_factory-1280.webp 1280w, /assets/image-library/archway_factory-1920.webp 1920w",
  src: "/assets/image-library/archway_factory-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Nhân viên vận hành máy móc trong nhà xưởng",
  altEn: "Worker operating machinery in a factory",
};

const industrialLeadImage: IndustryImage = {
  avifSrcset: "/assets/image-library/industrial_machinery-640.avif 640w, /assets/image-library/industrial_machinery-1280.avif 1280w, /assets/image-library/industrial_machinery-1920.avif 1920w",
  webpSrcset: "/assets/image-library/industrial_machinery-640.webp 640w, /assets/image-library/industrial_machinery-1280.webp 1280w, /assets/image-library/industrial_machinery-1920.webp 1920w",
  src: "/assets/image-library/industrial_machinery-1280.webp",
  width: 1280,
  height: 850,
  altVi: "Nhà máy với máy móc và thiết bị sản xuất công nghiệp",
  altEn: "Industrial machinery in a manufacturing facility",
};

const itHeroImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_working-640.avif 640w, /assets/image-library/archway_working-1280.avif 1280w, /assets/image-library/archway_working-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_working-640.webp 640w, /assets/image-library/archway_working-1280.webp 1280w, /assets/image-library/archway_working-1920.webp 1920w",
  src: "/assets/image-library/archway_working-1280.webp",
  width: 1280,
  height: 853,
  altVi: "Nhân viên làm việc với máy tính tại doanh nghiệp",
  altEn: "Employee working at a computer in a business",
};

const itLeadImage: IndustryImage = {
  avifSrcset: "/assets/image-library/it_services-640.avif 640w, /assets/image-library/it_services-1280.avif 1280w, /assets/image-library/it_services-1920.avif 1920w",
  webpSrcset: "/assets/image-library/it_services-640.webp 640w, /assets/image-library/it_services-1280.webp 1280w, /assets/image-library/it_services-1920.webp 1920w",
  src: "/assets/image-library/it_services-1280.webp",
  width: 1280,
  height: 732,
  altVi: "Phòng máy chủ với các dãy tủ thiết bị công nghệ thông tin",
  altEn: "Server room with rows of information technology equipment racks",
};

const medicalHeroImage: IndustryImage = {
  avifSrcset: "/assets/image-library/archway_factory_working-640.avif 640w, /assets/image-library/archway_factory_working-1280.avif 1280w, /assets/image-library/archway_factory_working-1920.avif 1920w",
  webpSrcset: "/assets/image-library/archway_factory_working-640.webp 640w, /assets/image-library/archway_factory_working-1280.webp 1280w, /assets/image-library/archway_factory_working-1920.webp 1920w",
  src: "/assets/image-library/archway_factory_working-1280.webp",
  width: 1280,
  height: 850,
  altVi: "Công nhân vận hành thiết bị sản xuất",
  altEn: "Worker operating production equipment",
};

const medicalLeadImage: IndustryImage = {
  avifSrcset: "/assets/image-library/medical_equipment-640.avif 640w, /assets/image-library/medical_equipment-1280.avif 1280w, /assets/image-library/medical_equipment-1920.avif 1920w",
  webpSrcset: "/assets/image-library/medical_equipment-640.webp 640w, /assets/image-library/medical_equipment-1280.webp 1280w, /assets/image-library/medical_equipment-1920.webp 1920w",
  src: "/assets/image-library/medical_equipment-1280.webp",
  width: 1280,
  height: 854,
  altVi: "Kỹ thuật viên kiểm tra thiết bị y tế trong phòng bệnh",
  altEn: "Technician servicing medical equipment in a hospital room",
};

export const hvacServicePage: IndustryServicePage = {
  slug: "hvac",
  heroImage: hvacHeroImage,
  leadImage: hvacLeadImage,
  ctaImage,
  vi: {
    metaTitle: "Bán doanh nghiệp HVAC tại Việt Nam | Archway",
    metaDescription: "Archway hỗ trợ bán doanh nghiệp HVAC tại Việt Nam từ định giá, chuẩn bị hồ sơ và tiếp cận người mua đến đàm phán, chuyển giao.",
    serviceType: "Môi giới và tư vấn đại diện bên bán cho doanh nghiệp HVAC tại Việt Nam",
    heading: "Bán doanh nghiệp HVAC tại Việt Nam",
    intro: "Archway cung cấp dịch vụ môi giới và tư vấn đại diện bên bán cho chủ doanh nghiệp HVAC tại Việt Nam. Chúng tôi đồng hành từ định giá và chuẩn bị hồ sơ đến tiếp cận người mua, đàm phán và chuyển giao, với mục tiêu giúp chủ doanh nghiệp bảo vệ giá trị, giữ an toàn thông tin và bán doanh nghiệp an tâm hơn.",
    leadHeading: "Dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp HVAC",
    leadParagraphs: [
      "Archway đại diện cho chủ doanh nghiệp HVAC trong suốt quá trình chuẩn bị và bán doanh nghiệp. Phạm vi dịch vụ bao gồm (1) đánh giá giá trị thương mại và kỳ vọng thị trường, (2) xây dựng hồ sơ bán, (3) tiếp cận và sàng lọc người mua trong điều kiện bảo mật, (4) đánh giá đề nghị và phương án tài chính, (5) hỗ trợ thẩm tra, đàm phán và ký kết, và (6) phối hợp chuyển giao doanh nghiệp.",
      "Archway giúp chủ doanh nghiệp có một đầu mối đại diện trong các trao đổi với người mua, theo dõi tiến độ và phối hợp với các bên tư vấn liên quan. Chúng tôi kiểm soát mức độ cung cấp thông tin, làm rõ năng lực tài chính của người mua trước khi chia sẻ dữ liệu sâu hơn và hỗ trợ chủ doanh nghiệp chuẩn bị cho từng giai đoạn của giao dịch. Theo thỏa thuận môi giới, phí dịch vụ được thống nhất trước và chỉ phát sinh khi chủ doanh nghiệp nhận được tiền chuyển nhượng theo điều kiện đã thỏa thuận.",
    ],
    leadLink: "Gửi thông tin để bắt đầu trao đổi riêng",
    benchmarkExampleHeading: "Ví dụ tính nhanh cho doanh nghiệp HVAC",
    benchmarkExampleParagraphs: [
      "Ví dụ minh họa: nếu SDE đã chuẩn hóa là 2 tỷ đồng và hệ số SDE trung bình là 2,58x, giá trị tham khảo theo SDE là 5,16 tỷ đồng trước khi điều chỉnh nợ, tiền mặt, vốn lưu động và điều khoản thanh toán.",
      "Nếu doanh thu là 20 tỷ đồng và hệ số doanh thu trung bình là 0,82x, phép tham chiếu theo doanh thu là 16,4 tỷ đồng. Archway dùng kết quả này để đối chiếu với SDE, không dùng thay thế cho phân tích lợi nhuận.",
    ],
    servicesHeading: "Bán doanh nghiệp HVAC an tâm hơn với sự đồng hành của Archway",
    servicesIntro: "Archway đồng hành cùng chủ doanh nghiệp từ bước xác định giá trị đến khi hoàn tất chuyển giao, đồng thời giữ cho các trao đổi thương mại có một đầu mối rõ ràng.",
    benchmarkHeading: "Các số liệu định giá tham khảo cho ngành HVAC",
    benchmarkIntro: "Các hệ số dưới đây là mốc tham khảo cho doanh nghiệp dịch vụ. Đơn vị hệ số là lần.",
    benchmarkItems: [
      { value: "1,75x–3,13x" },
      { value: "2,58x" },
      { value: "0,48x–1,04x" },
      { value: "0,82x" },
    ],
    benchmarkNote: "Các hệ số này là mức tham khảo thị trường. Khoảng hệ số cụ thể còn phụ thuộc vào dữ liệu tài chính, quy mô doanh nghiệp và cấu trúc giao dịch.",
    services: [
      {
        title: "Định giá và xác định kỳ vọng thị trường",
        text: "Archway rà soát kết quả kinh doanh, cơ cấu doanh thu, lợi nhuận, tài sản vận hành và mục tiêu chuyển nhượng của chủ doanh nghiệp để hình thành đánh giá thương mại sơ bộ. Kết quả này giúp chủ doanh nghiệp hiểu khoảng giá trị, loại đề nghị có thể kỳ vọng và những điểm cần chuẩn bị trước khi đưa doanh nghiệp ra thị trường.",
        image: valuationImage,
        imagePosition: "left",
        linkLabel: "Gửi thông tin để bắt đầu",
      },
      {
        title: "Chuẩn bị hồ sơ, tiếp cận và sàng lọc người mua",
        text: "Archway xây dựng hồ sơ bán và đưa cơ hội ra thị trường qua (1) các kênh giới thiệu và truyền thông phù hợp, (2) hoạt động tiếp cận trực tiếp, và (3) tìm kiếm người mua chiến lược hoặc doanh nghiệp liền kề. Trước khi chia sẻ thông tin sâu hơn, Archway làm rõ năng lực tài chính của người mua và kiểm soát mức độ tiết lộ để bảo vệ nhân sự, khách hàng, nhà cung cấp và hoạt động kinh doanh.",
        image: positioningImage,
        imagePosition: "right",
      },
      {
        title: "Đàm phán, thẩm tra và chuyển giao",
        text: "Archway hỗ trợ chủ doanh nghiệp so sánh các đề nghị theo giá, điều khoản và mức độ phù hợp của người mua. Sau khi chủ doanh nghiệp lựa chọn người mua, Archway theo dõi quá trình thẩm tra, phối hợp trao đổi tài liệu và hỗ trợ các bên liên quan trong giai đoạn soạn thảo, ký kết và chuyển giao. Archway không trực tiếp giữ hoặc giải ngân tiền giao dịch.",
        image: transactionImage,
        imagePosition: "left",
      },
    ],
    outcomesHeading: "Archway giúp chủ doanh nghiệp HVAC hướng tới giá và điều khoản tốt hơn",
    outcomesIntro: "Chủ doanh nghiệp tiếp tục tập trung vào hoạt động kinh doanh, còn Archway đại diện bên bán để tổ chức thông tin, làm việc với người mua và theo dõi giao dịch.",
    outcomes: [
      { title: "Hướng tới giá và điều khoản tốt hơn", text: "Archway giúp định vị giá trị doanh nghiệp, tìm người mua phù hợp và đàm phán để chủ doanh nghiệp hướng tới mức giá cùng điều khoản tốt hơn." },
      { title: "Bảo mật thông tin", text: "Archway bảo mật danh tính doanh nghiệp, hồ sơ bán và thông tin về khách hàng, dự án và đội ngũ trong suốt quá trình giao dịch." },
      { title: "Giữ giao dịch đi đúng tiến độ", text: "Archway theo dõi yêu cầu của người mua và phối hợp tài liệu, luật sư, ngân hàng cùng các bên tư vấn liên quan." },
      { title: "Giảm việc phải tự điều phối", text: "Chủ doanh nghiệp có một đầu mối làm việc với người mua và các bên liên quan, thay vì tự mình xử lý từng yêu cầu." },
    ],
    ctaHeading: "Định giá doanh nghiệp HVAC miễn phí",
    ctaText: "Gửi một số thông tin cơ bản qua biểu mẫu để Archway bắt đầu đánh giá thương mại sơ bộ và trao đổi riêng về mục tiêu chuyển nhượng của doanh nghiệp.",
    ctaLink: "Định giá miễn phí",
    homeLabel: "Trang chủ",
    industriesLabel: "Các ngành chúng tôi phục vụ",
    footerAddress: "Tầng 17, Tòa nhà Vincom Center, 72 đường Lê Thánh Tôn, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    footerPhone: "Điện thoại: 0346-346-550",
  },
  en: {
    metaTitle: "Sell Your HVAC Business in Vietnam | Archway",
    metaDescription: "Archway supports HVAC owners selling in Vietnam through valuation, sale preparation, buyer outreach, negotiation and handover.",
    serviceType: "HVAC business brokerage and sell-side advisory in Vietnam",
    heading: "Sell Your HVAC Business in Vietnam",
    intro: "Archway provides business brokerage and sell-side advisory for HVAC owners in Vietnam. We support owners from valuation and sale preparation through buyer outreach, negotiation and handover, with the objective of protecting value, controlling information and giving the owner greater confidence throughout the sale.",
    leadHeading: "HVAC business brokerage and sell-side advisory in Vietnam",
    leadParagraphs: [
      "Archway represents HVAC owners throughout the preparation and sale of the business. Our scope includes (1) assessing commercial value and market expectations, (2) preparing sale materials, (3) approaching and screening buyers confidentially, (4) assessing offers and financing plans, (5) supporting due diligence, negotiation and signing, and (6) coordinating the handover.",
      "Archway gives the owner one representative for buyer discussions, transaction tracking and coordination with relevant advisers. We control the level of disclosure, clarify the buyer’s financial capacity before deeper information is shared and help the owner prepare for each stage of the transaction. Under the brokerage agreement, the fee is agreed in advance and is payable only when the owner receives the sale proceeds under the agreed conditions.",
    ],
    leadLink: "Share information to begin a confidential discussion",
    benchmarkExampleHeading: "A simple HVAC valuation example",
    benchmarkExampleParagraphs: [
      "For illustration, if normalized SDE is VND 2 billion and the average SDE multiple is 2.58x, the SDE-based reference value is VND 5.16 billion before adjustments for debt, cash, working capital and payment terms.",
      "If revenue is VND 20 billion and the average revenue multiple is 0.82x, the revenue-based reference is VND 16.4 billion. Archway uses this as a cross-check against SDE, not as a substitute for earnings analysis.",
    ],
    servicesHeading: "Sell your HVAC business with greater confidence and support from Archway",
    servicesIntro: "Archway supports the owner from establishing value through completion of the handover, while keeping commercial discussions organized through one clear point of contact.",
    benchmarkHeading: "Indicative valuation data for the HVAC sector",
    benchmarkIntro: "The figures below provide reference multiples for service businesses. Multiples are expressed in times earnings or revenue.",
    benchmarkItems: [
      { value: "1.75x–3.13x" },
      { value: "2.58x" },
      { value: "0.48x–1.04x" },
      { value: "0.82x" },
    ],
    benchmarkNote: "These multiples are market reference points. The applicable range depends on financial data, business scale and transaction structure.",
    services: [
      { title: "Valuation and market expectations", text: "Archway reviews performance, revenue mix, earnings, operating assets and the owner’s transfer objectives to form an initial commercial assessment. This helps the owner understand the likely value range, the type of offer the market may support and the matters that should be prepared before the business is taken to market.", image: valuationImage, imagePosition: "left", linkLabel: "Share information to get started" },
      { title: "Sale materials, buyer outreach and screening", text: "Archway prepares the sale materials and brings the opportunity to market through (1) suitable referral and communications channels, (2) direct outreach, and (3) targeted approaches to strategic or adjacent buyers. Before deeper information is shared, Archway clarifies the buyer’s financial capacity and controls disclosure to protect employees, customers, suppliers and the wider business.", image: positioningImage, imagePosition: "right" },
      { title: "Negotiation, due diligence and handover", text: "Archway helps the owner compare offers by price, terms and buyer fit. After the owner selects a buyer, Archway tracks due diligence, coordinates document exchanges and supports the relevant parties through drafting, signing and handover. Archway does not directly hold or disburse transaction funds.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway helps HVAC owners work toward better price and terms",
    outcomesIntro: "The owner stays focused on the business while Archway represents the seller, organizes information, works with buyers and tracks the sale.",
    outcomes: [
      { title: "Work toward better price and terms", text: "Archway helps position the business, find suitable buyers and negotiate so the owner can work toward better price and terms." },
      { title: "Keep information confidential", text: "Archway keeps the company identity, sale materials and information about customers, projects and the team confidential throughout the transaction." },
      { title: "Keep the sale moving", text: "Archway tracks buyer requests and coordinates materials, lawyers, banks and other relevant advisers." },
      { title: "Reduce the owner’s workload", text: "The owner has one representative working with buyers and other parties instead of handling every request alone." },
    ],
    ctaHeading: "Free HVAC business valuation",
    ctaText: "Share some basic information through the form so Archway can begin an initial commercial assessment and discuss the owner’s transfer objectives confidentially.",
    ctaLink: "Get a Free Business Valuation",
    homeLabel: "Home",
    industriesLabel: "Industries We Serve",
    footerAddress: "17th Floor, Vincom Center Building, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
    footerPhone: "Phone: (+84) 346-346-550",
  },
};

export const electricalContractorsServicePage: IndustryServicePage = {
  slug: "electrical-contractors",
  heroImage: electricalHeroImage,
  leadImage: electricalLeadImage,
  ctaImage,
  vi: {
    metaTitle: "Bán doanh nghiệp nhà thầu điện tại Việt Nam | Archway",
    metaDescription: "Archway hỗ trợ bán doanh nghiệp nhà thầu điện tại Việt Nam từ định giá, hồ sơ dự án và tiếp cận người mua đến đàm phán, chuyển giao.",
    serviceType: "Môi giới và tư vấn đại diện bên bán cho doanh nghiệp nhà thầu điện tại Việt Nam",
    heading: "Bán doanh nghiệp nhà thầu điện tại Việt Nam",
    intro: "Archway hỗ trợ chủ doanh nghiệp nhà thầu điện chuẩn bị và thực hiện quá trình bán doanh nghiệp có tổ chức, bảo mật và phản ánh đúng chất lượng backlog, năng lực dự án, đội ngũ cùng dòng tiền.",
    leadHeading: "Dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp nhà thầu điện",
    leadParagraphs: [
      "Archway đại diện cho chủ doanh nghiệp nhà thầu điện trong suốt quá trình chuẩn bị và bán doanh nghiệp. Phạm vi dịch vụ bao gồm (1) đánh giá giá trị thương mại dựa trên lợi nhuận và chất lượng backlog, (2) chuẩn bị hồ sơ tài chính và dự án, (3) tiếp cận và sàng lọc người mua trong điều kiện bảo mật, (4) đánh giá đề nghị cùng khả năng tài chính, (5) hỗ trợ thẩm tra, đàm phán và ký kết, và (6) phối hợp kế hoạch chuyển giao.",
      "Một đầu mối đại diện giúp chủ doanh nghiệp kiểm soát việc cung cấp thông tin về khách hàng, công trường, biên lợi nhuận, an toàn và nghĩa vụ còn lại của dự án. Archway hỗ trợ phối hợp với người mua và các bên tư vấn liên quan, trong khi chủ doanh nghiệp vẫn quyết định mức giá, người mua và các điều khoản cuối cùng. Theo thỏa thuận môi giới, phí dịch vụ được thống nhất trước và chỉ phát sinh theo điều kiện đã thỏa thuận.",
    ],
    leadLink: "Gửi thông tin để bắt đầu trao đổi riêng",
    benchmarkExampleHeading: "Ví dụ tính nhanh cho doanh nghiệp nhà thầu điện",
    benchmarkExampleParagraphs: [
      "Ví dụ minh họa: nếu SDE đã chuẩn hóa là 1,5 tỷ đồng và hệ số SDE trung bình là 2,58x, giá trị tham khảo theo SDE là 3,87 tỷ đồng trước khi điều chỉnh nợ, tiền mặt, vốn lưu động và điều khoản thanh toán.",
      "Nếu doanh thu là 12 tỷ đồng và hệ số doanh thu trung bình là 0,82x, phép tham chiếu theo doanh thu là 9,84 tỷ đồng. Kết quả cần được đối chiếu với lợi nhuận và nghĩa vụ của các dự án đang thực hiện.",
    ],
    servicesHeading: "Bán doanh nghiệp nhà thầu điện an tâm hơn với sự đồng hành của Archway",
    servicesIntro: "Một thương vụ nhà thầu điện cần thể hiện đồng thời khả năng thực hiện dự án, chất lượng lợi nhuận và mức độ doanh nghiệp có thể tiếp tục vận hành sau khi chuyển giao.",
    benchmarkHeading: "Các số liệu định giá tham khảo cho ngành nhà thầu điện",
    benchmarkIntro: "Các hệ số dưới đây là mốc tham khảo cho doanh nghiệp dịch vụ. Đơn vị hệ số là lần.",
    benchmarkItems: [
      { value: "1,75x–3,13x" },
      { value: "2,58x" },
      { value: "0,48x–1,04x" },
      { value: "0,82x" },
    ],
    benchmarkNote: "Các hệ số này là mức tham khảo thị trường. Khoảng hệ số cụ thể còn phụ thuộc vào dữ liệu tài chính, quy mô doanh nghiệp và cấu trúc giao dịch.",
    services: [
      { title: "Định giá dựa trên backlog và lợi nhuận dự án", text: "Archway xem xét lợi nhuận đã chuẩn hóa cùng biên lợi nhuận theo loại công việc, giá trị backlog, chi phí hoàn thành, công nợ, khoản giữ lại và nhu cầu vốn lưu động. Cách tiếp cận này giúp chủ doanh nghiệp hiểu phần giá trị có thể chuyển giao thay vì chỉ nhìn vào tổng giá trị hợp đồng đã ký.", image: valuationImage, imagePosition: "left", linkLabel: "Gửi thông tin để bắt đầu" },
      { title: "Chuẩn bị hồ sơ và tiếp cận người mua phù hợp", text: "Archway tổ chức hồ sơ quanh năng lực kỹ thuật, lịch sử dự án, khách hàng lặp lại, hồ sơ an toàn và đội ngũ quản lý dự án. Người mua được tiếp cận có chọn lọc qua (1) giới thiệu phù hợp, (2) hoạt động tiếp cận trực tiếp, và (3) các doanh nghiệp MEP hoặc dịch vụ công trình liền kề, trong khi thông tin nhận diện được kiểm soát.", image: positioningImage, imagePosition: "right" },
      { title: "Đàm phán, thẩm tra và chuyển giao dự án", text: "Archway hỗ trợ so sánh giá, điều khoản thanh toán, nghĩa vụ bảo hành, khoản giữ lại, vốn lưu động và trách nhiệm hoàn tất dự án. Sau khi chọn người mua, Archway theo dõi yêu cầu thẩm tra, phối hợp trao đổi tài liệu và hỗ trợ các bên chuẩn bị cho ký kết cùng chuyển giao.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway giúp chủ doanh nghiệp nhà thầu điện hướng tới giá và điều khoản tốt hơn",
    outcomesIntro: "Chủ doanh nghiệp tiếp tục điều hành hoạt động và công trường, còn Archway đại diện bên bán để tổ chức thông tin, làm việc với người mua và theo dõi giao dịch.",
    outcomes: [
      { title: "Hướng tới giá và điều khoản tốt hơn", text: "Archway giúp định vị giá trị doanh nghiệp, tìm người mua phù hợp và đàm phán để chủ doanh nghiệp hướng tới mức giá cùng điều khoản tốt hơn." },
      { title: "Bảo mật thông tin", text: "Archway bảo mật thông tin về công trường, giá thầu, khách hàng, nhà thầu phụ và biên lợi nhuận trong suốt quá trình giao dịch." },
      { title: "Giữ giao dịch đi đúng tiến độ", text: "Archway theo dõi yêu cầu của người mua và phối hợp tài liệu, luật sư, kế toán, ngân hàng cùng tư vấn dự án khi cần." },
      { title: "Giảm việc phải tự điều phối", text: "Chủ doanh nghiệp có một đầu mối làm việc với người mua và các bên liên quan, trong khi vẫn tập trung hoàn thành dự án." },
    ],
    ctaHeading: "Định giá doanh nghiệp nhà thầu điện miễn phí",
    ctaText: "Gửi một số thông tin cơ bản qua biểu mẫu để Archway bắt đầu đánh giá thương mại sơ bộ và trao đổi riêng về mục tiêu chuyển nhượng.",
    ctaLink: "Định giá miễn phí",
    homeLabel: "Trang chủ",
    industriesLabel: "Các ngành chúng tôi phục vụ",
    footerAddress: "Tầng 17, Tòa nhà Vincom Center, 72 đường Lê Thánh Tôn, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    footerPhone: "Điện thoại: 0346-346-550",
  },
  en: {
    metaTitle: "Sell Your Electrical Contracting Business in Vietnam | Archway",
    metaDescription: "Archway supports the sale of electrical contracting businesses in Vietnam through valuation, project preparation, buyer outreach, negotiation and handover.",
    serviceType: "Electrical contracting business brokerage and sell-side advisory in Vietnam",
    heading: "Sell Your Electrical Contracting Business in Vietnam",
    intro: "Archway helps electrical contractors prepare and execute an organized, confidential sale that reflects backlog quality, project capability, team depth and cash flow.",
    leadHeading: "Electrical contracting business brokerage and sell-side advisory in Vietnam",
    leadParagraphs: [
      "Archway represents electrical contracting owners throughout the preparation and sale of the business. Our scope includes (1) assessing commercial value through earnings and backlog quality, (2) preparing financial and project materials, (3) approaching and screening buyers confidentially, (4) assessing offers and financial capacity, (5) supporting due diligence, negotiation and signing, and (6) coordinating the handover plan.",
      "One representative helps the owner control information about customers, sites, margins, safety and remaining project obligations. Archway coordinates with buyers and relevant advisers while the owner retains the decision over price, buyer and final terms. Under the brokerage agreement, the fee is agreed in advance and becomes payable under the agreed conditions.",
    ],
    leadLink: "Share information to begin a confidential discussion",
    benchmarkExampleHeading: "A simple electrical contracting valuation example",
    benchmarkExampleParagraphs: [
      "For illustration, if normalized SDE is VND 1.5 billion and the average SDE multiple is 2.58x, the SDE-based reference value is VND 3.87 billion before adjustments for debt, cash, working capital and payment terms.",
      "If revenue is VND 12 billion and the average revenue multiple is 0.82x, the revenue-based reference is VND 9.84 billion. The result should be tested against earnings and remaining project obligations.",
    ],
    servicesHeading: "Sell your electrical contracting business with greater confidence and support from Archway",
    servicesIntro: "An electrical contracting sale needs to show project capability, earnings quality and the extent to which the business can continue operating after the transfer.",
    benchmarkHeading: "Indicative valuation data for the electrical contracting sector",
    benchmarkIntro: "The figures below provide reference multiples for service businesses. Multiples are expressed in times earnings or revenue.",
    benchmarkItems: [
      { value: "1.75x–3.13x" },
      { value: "2.58x" },
      { value: "0.48x–1.04x" },
      { value: "0.82x" },
    ],
    benchmarkNote: "These multiples are market reference points. The applicable range depends on financial data, business scale and transaction structure.",
    services: [
      { title: "Valuation based on backlog and project earnings", text: "Archway considers normalized earnings together with margins by work type, backlog value, cost to complete, receivables, retention amounts and working-capital needs. This helps the owner understand transferable value rather than focus only on signed contract value.", image: valuationImage, imagePosition: "left", linkLabel: "Share information to get started" },
      { title: "Sale materials and targeted buyer outreach", text: "Archway organizes the materials around technical capability, project history, repeat customers, safety records and the project-management team. Buyers are approached selectively through (1) suitable referrals, (2) direct outreach, and (3) adjacent MEP or building-services companies, while identifying information remains controlled.", image: positioningImage, imagePosition: "right" },
      { title: "Negotiation, diligence and project handover", text: "Archway supports comparisons of price, payment terms, warranty obligations, retention, working capital and responsibility for completing projects. After a buyer is selected, Archway tracks diligence, coordinates document exchange and supports the parties through signing and handover.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway helps electrical contractors work toward better price and terms",
    outcomesIntro: "The owner continues managing operations and projects while Archway represents the seller, organizes information, works with buyers and tracks the sale.",
    outcomes: [
      { title: "Work toward better price and terms", text: "Archway helps position the business, find suitable buyers and negotiate so the owner can work toward better price and terms." },
      { title: "Keep information confidential", text: "Archway keeps site, tender, customer, subcontractor and margin information confidential throughout the transaction." },
      { title: "Keep the sale moving", text: "Archway tracks buyer requests and coordinates materials, lawyers, accountants, banks and project advisers where needed." },
      { title: "Reduce the owner’s workload", text: "The owner has one representative working with buyers and other parties while continuing to deliver projects." },
    ],
    ctaHeading: "Free electrical contracting business valuation",
    ctaText: "Share some basic information through the form so Archway can begin an initial commercial assessment and discuss your transfer objectives confidentially.",
    ctaLink: "Get a Free Business Valuation",
    homeLabel: "Home",
    industriesLabel: "Industries We Serve",
    footerAddress: "17th Floor, Vincom Center Building, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
    footerPhone: "Phone: (+84) 346-346-550",
  },
};

export const logisticsServicePage: IndustryServicePage = {
  slug: "3pl-freight-forwarding",
  heroImage: logisticsHeroImage,
  leadImage: logisticsLeadImage,
  ctaImage,
  vi: {
    metaTitle: "Bán doanh nghiệp 3PL và logistics tại Việt Nam | Archway",
    metaDescription: "Archway cung cấp dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp 3PL, logistics và giao nhận vận tải tại Việt Nam, từ định giá đến chuyển giao.",
    serviceType: "Môi giới và tư vấn đại diện bên bán cho doanh nghiệp 3PL và logistics tại Việt Nam",
    heading: "Bán doanh nghiệp 3PL và logistics tại Việt Nam",
    intro: "Archway hỗ trợ chủ doanh nghiệp 3PL, logistics và giao nhận vận tải chuẩn bị một thương vụ bán bảo mật, trong đó giá trị được giải thích qua lợi nhuận gộp, hợp đồng, mạng lưới vận hành và khả năng duy trì khách hàng.",
    leadHeading: "Dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp 3PL và logistics",
    leadParagraphs: [
      "Archway đại diện cho chủ doanh nghiệp logistics trong suốt quá trình chuẩn bị và bán doanh nghiệp. Phạm vi dịch vụ bao gồm (1) đánh giá giá trị thương mại theo lợi nhuận gộp và mô hình tài sản, (2) chuẩn bị hồ sơ về khách hàng, tuyến vận chuyển và hợp đồng, (3) tiếp cận và sàng lọc người mua trong điều kiện bảo mật, (4) đánh giá đề nghị và phương án tài chính, (5) hỗ trợ thẩm tra, đàm phán và ký kết, và (6) phối hợp chuyển giao vận hành.",
      "Một quy trình có kiểm soát giúp chủ doanh nghiệp giải thích doanh thu chuyển tiếp, lợi nhuận thực tế, hợp đồng kho hoặc vận chuyển, tài sản, công nghệ và nghĩa vụ tuân thủ mà không phải cung cấp toàn bộ thông tin ngay từ đầu. Archway theo dõi trao đổi với người mua và các bên tư vấn liên quan, còn chủ doanh nghiệp quyết định người mua và điều khoản cuối cùng.",
    ],
    leadLink: "Gửi thông tin để bắt đầu trao đổi riêng",
    benchmarkExampleHeading: "Ví dụ tính nhanh cho doanh nghiệp 3PL và logistics",
    benchmarkExampleParagraphs: [
      "Ví dụ minh họa: nếu SDE đã chuẩn hóa là 3 tỷ đồng và hệ số SDE trung bình là 2,89x, giá trị tham khảo theo SDE là 8,67 tỷ đồng trước khi điều chỉnh nợ, tiền mặt, vốn lưu động và điều khoản thanh toán.",
      "Nếu doanh thu là 30 tỷ đồng và hệ số doanh thu trung bình là 0,54x, phép tham chiếu theo doanh thu là 16,2 tỷ đồng. Cần đối chiếu kết quả với lợi nhuận gộp và phần doanh thu chuyển tiếp.",
    ],
    servicesHeading: "Bán doanh nghiệp 3PL hoặc logistics an tâm hơn với sự đồng hành của Archway",
    servicesIntro: "Một thương vụ logistics cần phân biệt doanh thu chuyển tiếp với phần giá trị doanh nghiệp thực sự tạo ra, đồng thời làm rõ khả năng duy trì mạng lưới và hợp đồng sau chuyển giao.",
    benchmarkHeading: "Các số liệu định giá tham khảo cho ngành 3PL và logistics",
    benchmarkIntro: "Các hệ số dưới đây là mốc tham khảo cho nhóm bán buôn và phân phối. Đơn vị hệ số là lần.",
    benchmarkItems: [
      { value: "2,00x–3,44x" },
      { value: "2,89x" },
      { value: "0,29x–0,68x" },
      { value: "0,54x" },
    ],
    benchmarkNote: "Các hệ số này là mức tham khảo thị trường. Khoảng hệ số cụ thể còn phụ thuộc vào dữ liệu tài chính, quy mô doanh nghiệp và cấu trúc giao dịch.",
    services: [
      { title: "Định giá dựa trên lợi nhuận gộp và mô hình tài sản", text: "Archway rà soát lợi nhuận đã chuẩn hóa, lợi nhuận gộp theo khách hàng và dịch vụ, chu kỳ vốn lưu động, tài sản, hợp đồng thuê và mục tiêu chuyển nhượng. Đánh giá này giúp chủ doanh nghiệp nhìn thấy giá trị vận hành thay vì áp dụng một tỷ lệ đơn giản trên doanh thu.", image: valuationImage, imagePosition: "left", linkLabel: "Gửi thông tin để bắt đầu" },
      { title: "Chuẩn bị hồ sơ và tiếp cận người mua phù hợp", text: "Archway tổ chức hồ sơ theo khách hàng, tuyến vận chuyển, kho bãi, đội xe, nhà cung cấp và nền tảng công nghệ. Người mua chiến lược hoặc doanh nghiệp muốn mở rộng tại Việt Nam được tiếp cận có chọn lọc, trong khi danh tính doanh nghiệp và dữ liệu khách hàng được kiểm soát.", image: positioningImage, imagePosition: "right" },
      { title: "Đàm phán, thẩm tra và chuyển giao mạng lưới", text: "Archway hỗ trợ so sánh giá, điều khoản thanh toán, vốn lưu động, tài sản, hợp đồng thuê, nghĩa vụ dịch vụ và kế hoạch giữ chân đội ngũ. Sau khi chọn người mua, Archway điều phối tài liệu và theo dõi các bước thẩm tra, ký kết cùng chuyển giao.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway giúp chủ doanh nghiệp logistics hướng tới giá và điều khoản tốt hơn",
    outcomesIntro: "Chủ doanh nghiệp tiếp tục vận hành mạng lưới, còn Archway đại diện bên bán để tổ chức thông tin, làm việc với người mua và theo dõi giao dịch.",
    outcomes: [
      { title: "Hướng tới giá và điều khoản tốt hơn", text: "Archway giúp định vị giá trị doanh nghiệp, tìm người mua phù hợp và đàm phán để chủ doanh nghiệp hướng tới mức giá cùng điều khoản tốt hơn." },
      { title: "Bảo mật thông tin", text: "Archway bảo mật danh tính khách hàng, tuyến vận chuyển, giá và quan hệ đại lý trong suốt quá trình giao dịch." },
      { title: "Giữ giao dịch đi đúng tiến độ", text: "Archway theo dõi yêu cầu của người mua về hợp đồng, tài sản, tuân thủ, công nghệ và vận hành, đồng thời phối hợp các tài liệu liên quan." },
      { title: "Giảm việc phải tự điều phối", text: "Chủ doanh nghiệp có một đầu mối làm việc với người mua và các bên liên quan, thay vì tự mình xử lý từng yêu cầu." },
    ],
    ctaHeading: "Định giá doanh nghiệp 3PL và logistics miễn phí",
    ctaText: "Gửi thông tin cơ bản qua biểu mẫu để Archway bắt đầu đánh giá thương mại sơ bộ và trao đổi riêng về mục tiêu chuyển nhượng.",
    ctaLink: "Định giá miễn phí",
    homeLabel: "Trang chủ",
    industriesLabel: "Các ngành chúng tôi phục vụ",
    footerAddress: "Tầng 17, Tòa nhà Vincom Center, 72 đường Lê Thánh Tôn, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    footerPhone: "Điện thoại: 0346-346-550",
  },
  en: {
    metaTitle: "Sell a 3PL or Logistics Business in Vietnam | Archway",
    metaDescription: "Archway provides sell-side advisory and business brokerage for 3PL, logistics and freight-forwarding businesses in Vietnam, from valuation through handover.",
    serviceType: "3PL and logistics business brokerage and sell-side advisory in Vietnam",
    heading: "Sell a 3PL or Logistics Business in Vietnam",
    intro: "Archway helps owners of 3PL, logistics and freight-forwarding businesses prepare a confidential sale in which value is explained through gross profit, contracts, operating networks and customer continuity.",
    leadHeading: "3PL and logistics business brokerage and sell-side advisory",
    leadParagraphs: [
      "Archway represents logistics owners throughout the preparation and sale of the business. Our scope includes (1) assessing commercial value through gross profit and the asset model, (2) preparing customer, lane and contract materials, (3) approaching and screening buyers confidentially, (4) assessing offers and financing plans, (5) supporting due diligence, negotiation and signing, and (6) coordinating the operating handover.",
      "A controlled process helps the owner explain pass-through revenue, underlying earnings, warehouse or transport contracts, assets, technology and compliance obligations without releasing all information at the outset. Archway tracks buyer and adviser discussions while the owner retains the decision over buyer and final terms.",
    ],
    leadLink: "Share information to begin a confidential discussion",
    benchmarkExampleHeading: "A simple 3PL and logistics valuation example",
    benchmarkExampleParagraphs: [
      "For illustration, if normalized SDE is VND 3 billion and the average SDE multiple is 2.89x, the SDE-based reference value is VND 8.67 billion before adjustments for debt, cash, working capital and payment terms.",
      "If revenue is VND 30 billion and the average revenue multiple is 0.54x, the revenue-based reference is VND 16.2 billion. The result should be tested against gross profit and pass-through revenue.",
    ],
    servicesHeading: "Sell your 3PL or logistics business with greater confidence and support from Archway",
    servicesIntro: "A logistics sale needs to distinguish pass-through revenue from value created by the business and clarify whether the network and contracts can continue after the transfer.",
    benchmarkHeading: "Indicative valuation data for the 3PL and logistics sector",
    benchmarkIntro: "The figures below provide reference multiples for wholesale and distribution businesses. Multiples are expressed in times earnings or revenue.",
    benchmarkItems: [
      { value: "2.00x–3.44x" },
      { value: "2.89x" },
      { value: "0.29x–0.68x" },
      { value: "0.54x" },
    ],
    benchmarkNote: "These multiples are market reference points. The applicable range depends on financial data, business scale and transaction structure.",
    services: [
      { title: "Valuation based on gross profit and the asset model", text: "Archway reviews normalized earnings, gross profit by customer and service, working-capital cycles, assets, leases and the owner’s transfer objectives. This helps the owner understand operating value rather than apply a simple percentage to revenue.", image: valuationImage, imagePosition: "left", linkLabel: "Share information to get started" },
      { title: "Sale materials and targeted buyer outreach", text: "Archway organizes materials by customer, lane, warehousing, fleet, suppliers and technology. Strategic buyers or parties expanding in Vietnam are approached selectively while the company identity and customer data remain controlled.", image: positioningImage, imagePosition: "right" },
      { title: "Negotiation, diligence and network handover", text: "Archway supports comparisons of price, payment terms, working capital, assets, leases, service obligations and team-retention requirements. After a buyer is selected, Archway coordinates materials and tracks diligence, signing and handover.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway helps logistics owners work toward better price and terms",
    outcomesIntro: "The owner continues operating the network while Archway represents the seller, organizes information, works with buyers and tracks the sale.",
    outcomes: [
      { title: "Work toward better price and terms", text: "Archway helps position the business, find suitable buyers and negotiate so the owner can work toward better price and terms." },
      { title: "Keep information confidential", text: "Archway keeps customer identities, lanes, pricing and agent relationships confidential throughout the transaction." },
      { title: "Keep the sale moving", text: "Archway tracks buyer requests about contracts, assets, compliance, technology and operations, and coordinates the related materials." },
      { title: "Reduce the owner’s workload", text: "The owner has one representative working with buyers and other parties instead of handling every request alone." },
    ],
    ctaHeading: "Free 3PL and logistics business valuation",
    ctaText: "Share basic information through the form so Archway can begin an initial commercial assessment and discuss your transfer objectives confidentially.",
    ctaLink: "Get a Free Business Valuation",
    homeLabel: "Home",
    industriesLabel: "Industries We Serve",
    footerAddress: "17th Floor, Vincom Center Building, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
    footerPhone: "Phone: (+84) 346-346-550",
  },
};

export const industrialMachineryServicePage: IndustryServicePage = {
  slug: "industrial-machinery-equipment",
  heroImage: industrialHeroImage,
  leadImage: industrialLeadImage,
  ctaImage,
  vi: {
    metaTitle: "Bán doanh nghiệp máy móc và thiết bị công nghiệp | Archway",
    metaDescription: "Archway cung cấp dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp máy móc và thiết bị công nghiệp tại Việt Nam, từ định giá đến chuyển giao.",
    serviceType: "Môi giới và tư vấn đại diện bên bán cho doanh nghiệp máy móc và thiết bị công nghiệp tại Việt Nam",
    heading: "Bán doanh nghiệp máy móc và thiết bị công nghiệp tại Việt Nam",
    intro: "Archway hỗ trợ chủ doanh nghiệp máy móc và thiết bị công nghiệp chuẩn bị một thương vụ bán phản ánh đúng doanh thu thiết bị mới, cơ sở khách hàng đã lắp đặt, dịch vụ sau bán hàng và quan hệ với nhà cung cấp.",
    leadHeading: "Dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp máy móc công nghiệp",
    leadParagraphs: [
      "Archway đại diện cho chủ doanh nghiệp máy móc và thiết bị công nghiệp trong suốt quá trình chuẩn bị và bán doanh nghiệp. Phạm vi dịch vụ bao gồm (1) đánh giá giá trị thương mại theo doanh thu thiết bị, dịch vụ sau bán hàng và tồn kho, (2) chuẩn bị hồ sơ về sản phẩm, nhà cung cấp và khách hàng, (3) tiếp cận và sàng lọc người mua trong điều kiện bảo mật, (4) đánh giá đề nghị và phương án tài chính, (5) hỗ trợ thẩm tra, đàm phán và ký kết, và (6) phối hợp chuyển giao quan hệ thương mại cùng đội ngũ kỹ thuật.",
      "Một thương vụ trong ngành này cần làm rõ quyền phân phối, điều khoản thay đổi quyền sở hữu, nghĩa vụ bảo hành, cơ sở thiết bị đã lắp đặt và khả năng tạo doanh thu dịch vụ sau giao dịch. Archway tổ chức các trao đổi đó theo từng giai đoạn, trong khi chủ doanh nghiệp quyết định người mua, mức giá và điều khoản cuối cùng.",
    ],
    leadLink: "Gửi thông tin để bắt đầu trao đổi riêng",
    benchmarkExampleHeading: "Ví dụ tính nhanh cho doanh nghiệp máy móc công nghiệp",
    benchmarkExampleParagraphs: [
      "Ví dụ minh họa: nếu SDE đã chuẩn hóa là 4 tỷ đồng và hệ số SDE trung bình là 3,00x, giá trị tham khảo theo SDE là 12 tỷ đồng trước khi điều chỉnh nợ, tiền mặt, vốn lưu động và điều khoản thanh toán.",
      "Nếu doanh thu là 40 tỷ đồng và hệ số doanh thu trung bình là 0,76x, phép tham chiếu theo doanh thu là 30,4 tỷ đồng. Kết quả cần được đối chiếu với tồn kho, dịch vụ sau bán hàng và quyền phân phối.",
    ],
    servicesHeading: "Bán doanh nghiệp máy móc công nghiệp an tâm hơn với sự đồng hành của Archway",
    servicesIntro: "Giá trị của doanh nghiệp không chỉ nằm ở giao dịch máy mới mà còn ở khả năng tiếp tục phục vụ cơ sở thiết bị, khách hàng và quan hệ nhà cung cấp.",
    benchmarkHeading: "Các số liệu định giá tham khảo cho ngành máy móc và thiết bị công nghiệp",
    benchmarkIntro: "Các hệ số dưới đây là mốc tham khảo cho ngành sản xuất và máy móc công nghiệp. Đơn vị hệ số là lần.",
    benchmarkItems: [
      { value: "2,04x–3,59x" },
      { value: "3,00x" },
      { value: "0,43x–0,92x" },
      { value: "0,76x" },
    ],
    benchmarkNote: "Các hệ số này là mức tham khảo thị trường. Khoảng hệ số cụ thể còn phụ thuộc vào dữ liệu tài chính, quy mô doanh nghiệp và cấu trúc giao dịch.",
    services: [
      { title: "Định giá theo doanh thu thiết bị và dịch vụ sau bán hàng", text: "Archway rà soát lợi nhuận đã chuẩn hóa, tỷ trọng phụ tùng và bảo trì, cơ sở thiết bị đã lắp đặt, quyền nhà cung cấp, tồn kho và nhu cầu vốn lưu động. Đánh giá này giúp chủ doanh nghiệp phân biệt doanh thu giao dịch đơn lẻ với nguồn thu có khả năng tiếp tục.", image: valuationImage, imagePosition: "left", linkLabel: "Gửi thông tin để bắt đầu" },
      { title: "Chuẩn bị hồ sơ và tiếp cận người mua phù hợp", text: "Archway xây dựng hồ sơ quanh sản phẩm, lãnh thổ, quyền phân phối, khách hàng, dịch vụ kỹ thuật và đội ngũ. Người mua chiến lược, nhà sản xuất hoặc doanh nghiệp dịch vụ liền kề được tiếp cận có chọn lọc, còn thông tin về hãng và khách hàng được kiểm soát.", image: positioningImage, imagePosition: "right" },
      { title: "Đàm phán, thẩm tra và chuyển giao quan hệ hãng", text: "Archway hỗ trợ so sánh giá, tồn kho, nợ, vốn lưu động, bảo hành, điều khoản nhà cung cấp và trách nhiệm sau giao dịch. Sau khi chọn người mua, Archway theo dõi việc cung cấp hồ sơ, các chấp thuận cần thiết và kế hoạch chuyển giao.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway giúp chủ doanh nghiệp máy móc công nghiệp hướng tới giá và điều khoản tốt hơn",
    outcomesIntro: "Chủ doanh nghiệp tiếp tục quản lý quan hệ khách hàng và nhà cung cấp, còn Archway đại diện bên bán để tổ chức thông tin, làm việc với người mua và theo dõi giao dịch.",
    outcomes: [
      { title: "Hướng tới giá và điều khoản tốt hơn", text: "Archway giúp định vị giá trị doanh nghiệp, tìm người mua phù hợp và đàm phán để chủ doanh nghiệp hướng tới mức giá cùng điều khoản tốt hơn." },
      { title: "Bảo mật thông tin", text: "Archway bảo mật thông tin về nhà sản xuất, quyền phân phối, khách hàng và cơ sở thiết bị trong suốt quá trình giao dịch." },
      { title: "Giữ giao dịch đi đúng tiến độ", text: "Archway theo dõi tài liệu, yêu cầu chấp thuận, dữ liệu tồn kho và câu hỏi kỹ thuật trong quá trình làm việc với người mua." },
      { title: "Giảm việc phải tự điều phối", text: "Chủ doanh nghiệp có một đầu mối làm việc với người mua và các bên liên quan, thay vì tự mình xử lý từng yêu cầu." },
    ],
    ctaHeading: "Định giá doanh nghiệp máy móc công nghiệp miễn phí",
    ctaText: "Gửi thông tin cơ bản qua biểu mẫu để Archway bắt đầu đánh giá thương mại sơ bộ và trao đổi riêng về mục tiêu chuyển nhượng.",
    ctaLink: "Định giá miễn phí",
    homeLabel: "Trang chủ",
    industriesLabel: "Các ngành chúng tôi phục vụ",
    footerAddress: "Tầng 17, Tòa nhà Vincom Center, 72 đường Lê Thánh Tôn, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    footerPhone: "Điện thoại: 0346-346-550",
  },
  en: {
    metaTitle: "Sell an Industrial Machinery and Equipment Business | Archway",
    metaDescription: "Archway provides sell-side advisory and business brokerage for industrial machinery and equipment businesses in Vietnam, from valuation through handover.",
    serviceType: "Industrial machinery and equipment business brokerage and sell-side advisory in Vietnam",
    heading: "Sell an Industrial Machinery and Equipment Business in Vietnam",
    intro: "Archway helps industrial machinery and equipment owners prepare a sale that reflects new-equipment revenue, the installed base, aftermarket services and supplier relationships.",
    leadHeading: "Industrial machinery and equipment business brokerage and sell-side advisory",
    leadParagraphs: [
      "Archway represents industrial machinery and equipment owners throughout the preparation and sale of the business. Our scope includes (1) assessing commercial value through equipment revenue, aftermarket services and inventory, (2) preparing product, supplier and customer materials, (3) approaching and screening buyers confidentially, (4) assessing offers and financing plans, (5) supporting due diligence, negotiation and signing, and (6) coordinating the transfer of commercial relationships and technical capability.",
      "A sale in this sector needs to clarify distribution rights, change-of-control provisions, warranty obligations, the installed equipment base and the potential for post-transaction service revenue. Archway organizes those discussions in stages while the owner retains the decision over buyer, price and final terms.",
    ],
    leadLink: "Share information to begin a confidential discussion",
    benchmarkExampleHeading: "A simple industrial machinery valuation example",
    benchmarkExampleParagraphs: [
      "For illustration, if normalized SDE is VND 4 billion and the average SDE multiple is 3.00x, the SDE-based reference value is VND 12 billion before adjustments for debt, cash, working capital and payment terms.",
      "If revenue is VND 40 billion and the average revenue multiple is 0.76x, the revenue-based reference is VND 30.4 billion. The result should be tested against inventory, aftermarket service and distribution rights.",
    ],
    servicesHeading: "Sell your industrial machinery business with greater confidence and support from Archway",
    servicesIntro: "Business value is not limited to new-machine transactions. It also depends on the ability to continue serving the installed base, customers and supplier relationships.",
    benchmarkHeading: "Indicative valuation data for the industrial machinery and equipment sector",
    benchmarkIntro: "The figures below provide reference multiples for manufacturing and industrial machinery. Multiples are expressed in times earnings or revenue.",
    benchmarkItems: [
      { value: "2.04x–3.59x" },
      { value: "3.00x" },
      { value: "0.43x–0.92x" },
      { value: "0.76x" },
    ],
    benchmarkNote: "These multiples are market reference points. The applicable range depends on financial data, business scale and transaction structure.",
    services: [
      { title: "Valuation across equipment and aftermarket revenue", text: "Archway reviews normalized earnings, parts and maintenance mix, the installed base, supplier rights, inventory and working-capital needs. This helps the owner distinguish one-off equipment transactions from revenue that may continue after the sale.", image: valuationImage, imagePosition: "left", linkLabel: "Share information to get started" },
      { title: "Sale materials and targeted buyer outreach", text: "Archway prepares materials around products, territories, distribution rights, customers, technical services and the team. Strategic buyers, manufacturers or adjacent service companies are approached selectively while supplier and customer information remains controlled.", image: positioningImage, imagePosition: "right" },
      { title: "Negotiation, diligence and supplier handover", text: "Archway supports comparisons of price, inventory, debt, working capital, warranty, supplier terms and post-transaction responsibilities. After a buyer is selected, Archway tracks materials, required consents and the handover plan.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway helps industrial-equipment owners work toward better price and terms",
    outcomesIntro: "The owner continues managing customer and supplier relationships while Archway represents the seller, organizes information, works with buyers and tracks the sale.",
    outcomes: [
      { title: "Work toward better price and terms", text: "Archway helps position the business, find suitable buyers and negotiate so the owner can work toward better price and terms." },
      { title: "Keep information confidential", text: "Archway keeps manufacturer information, distribution rights, customer lists and installed-base data confidential throughout the transaction." },
      { title: "Keep the sale moving", text: "Archway tracks documents, consent requirements, inventory data and technical questions while working with the buyer." },
      { title: "Reduce the owner’s workload", text: "The owner has one representative working with buyers and other parties instead of handling every request alone." },
    ],
    ctaHeading: "Free industrial machinery business valuation",
    ctaText: "Share basic information through the form so Archway can begin an initial commercial assessment and discuss your transfer objectives confidentially.",
    ctaLink: "Get a Free Business Valuation",
    homeLabel: "Home",
    industriesLabel: "Industries We Serve",
    footerAddress: "17th Floor, Vincom Center Building, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
    footerPhone: "Phone: (+84) 346-346-550",
  },
};

export const itServicesServicePage: IndustryServicePage = {
  slug: "it-outsourcing-managed-it-services",
  heroImage: itHeroImage,
  leadImage: itLeadImage,
  ctaImage,
  vi: {
    metaTitle: "Bán doanh nghiệp IT Outsourcing và Managed IT tại Việt Nam | Archway",
    metaDescription: "Archway cung cấp dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp IT Outsourcing và Managed IT Services tại Việt Nam, từ định giá đến chuyển giao.",
    serviceType: "Môi giới và tư vấn đại diện bên bán cho doanh nghiệp IT Outsourcing và Managed IT Services tại Việt Nam",
    heading: "Bán doanh nghiệp IT Outsourcing hoặc Managed IT Services tại Việt Nam",
    intro: "Archway hỗ trợ chủ doanh nghiệp dịch vụ công nghệ thông tin thuê ngoài chuẩn bị một thương vụ bán làm rõ doanh thu định kỳ, năng lực đội ngũ, quyền sở hữu trí tuệ và khả năng tiếp tục cung cấp dịch vụ.",
    leadHeading: "Dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp IT Outsourcing và Managed IT Services",
    leadParagraphs: [
      "Archway đại diện cho chủ doanh nghiệp IT Outsourcing và Managed IT Services trong suốt quá trình chuẩn bị và bán doanh nghiệp. Phạm vi dịch vụ bao gồm (1) đánh giá giá trị thương mại theo doanh thu định kỳ, biên lợi nhuận và mức độ giữ chân khách hàng, (2) chuẩn bị hồ sơ hợp đồng, đội ngũ và tài sản trí tuệ, (3) tiếp cận và sàng lọc người mua trong điều kiện bảo mật, (4) đánh giá đề nghị và phương án tài chính, (5) hỗ trợ thẩm tra, đàm phán và ký kết, và (6) phối hợp chuyển giao khách hàng, đội ngũ và hoạt động cung cấp dịch vụ.",
      "Một quy trình sell-side phù hợp giúp chủ doanh nghiệp giải thích chất lượng doanh thu và mức độ chuyển giao mà không phải tiết lộ sớm danh tính khách hàng, mã nguồn hoặc dữ liệu nhạy cảm. Archway làm rõ năng lực tài chính của người mua trước khi chia sẻ dữ liệu sâu hơn và phối hợp với các bên tư vấn liên quan theo từng giai đoạn.",
    ],
    leadLink: "Gửi thông tin để bắt đầu trao đổi riêng",
    benchmarkExampleHeading: "Ví dụ tính nhanh cho doanh nghiệp IT Outsourcing và Managed IT Services",
    benchmarkExampleParagraphs: [
      "Ví dụ minh họa: nếu SDE đã chuẩn hóa là 3 tỷ đồng và hệ số SDE trung bình là 3,10x, giá trị tham khảo theo SDE là 9,3 tỷ đồng trước khi điều chỉnh nợ, tiền mặt, vốn lưu động và điều khoản thanh toán.",
      "Nếu doanh thu là 25 tỷ đồng và hệ số doanh thu trung bình là 1,02x, phép tham chiếu theo doanh thu là 25,5 tỷ đồng. Kết quả cần được đối chiếu với doanh thu định kỳ, chi phí nhân sự và khả năng giữ chân hợp đồng.",
    ],
    servicesHeading: "Bán doanh nghiệp dịch vụ IT an tâm hơn với sự đồng hành của Archway",
    servicesIntro: "Giá trị của doanh nghiệp IT cần được giải thích qua hợp đồng, đội ngũ giao hàng, tài sản trí tuệ và khả năng duy trì doanh thu sau khi chủ doanh nghiệp chuyển giao.",
    benchmarkHeading: "Các số liệu định giá tham khảo cho ngành IT Outsourcing và Managed IT Services",
    benchmarkIntro: "Các hệ số dưới đây là mốc tham khảo cho dịch vụ công nghệ thông tin và phần mềm. Đơn vị hệ số là lần.",
    benchmarkItems: [
      { value: "2,20x–3,87x" },
      { value: "3,10x" },
      { value: "0,57x–1,32x" },
      { value: "1,02x" },
    ],
    benchmarkNote: "Các hệ số này là mức tham khảo thị trường. Khoảng hệ số cụ thể còn phụ thuộc vào dữ liệu tài chính, quy mô doanh nghiệp và cấu trúc giao dịch.",
    services: [
      { title: "Định giá dựa trên doanh thu định kỳ và năng lực giao hàng", text: "Archway rà soát lợi nhuận đã chuẩn hóa, tỷ trọng doanh thu định kỳ, tỷ lệ gia hạn, mức độ tập trung khách hàng, biên lợi nhuận, chi phí nhân sự và sự phụ thuộc vào chủ doanh nghiệp. Đánh giá này giúp phân biệt doanh nghiệp dịch vụ với mô hình phần mềm có cách định giá khác.", image: valuationImage, imagePosition: "left", linkLabel: "Gửi thông tin để bắt đầu" },
      { title: "Chuẩn bị hồ sơ và tiếp cận người mua phù hợp", text: "Archway tổ chức hồ sơ quanh hợp đồng, SLA, đội ngũ, quy trình giao hàng, quyền sở hữu trí tuệ và cam kết bảo mật. Người mua chiến lược hoặc doanh nghiệp công nghệ liền kề được tiếp cận có chọn lọc, trong khi thông tin khách hàng và kỹ thuật được kiểm soát.", image: positioningImage, imagePosition: "right" },
      { title: "Đàm phán, thẩm tra và chuyển giao đội ngũ", text: "Archway hỗ trợ so sánh giá, điều khoản thanh toán, yêu cầu giữ chân nhân sự, chuyển giao hợp đồng, quyền sở hữu trí tuệ và nghĩa vụ bảo mật. Sau khi chọn người mua, Archway theo dõi tài liệu thẩm tra và phối hợp kế hoạch chuyển giao dịch vụ.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway giúp chủ doanh nghiệp dịch vụ IT hướng tới giá và điều khoản tốt hơn",
    outcomesIntro: "Chủ doanh nghiệp tiếp tục duy trì chất lượng dịch vụ, còn Archway đại diện bên bán để tổ chức thông tin, làm việc với người mua và theo dõi giao dịch.",
    outcomes: [
      { title: "Hướng tới giá và điều khoản tốt hơn", text: "Archway giúp định vị giá trị doanh nghiệp, tìm người mua phù hợp và đàm phán để chủ doanh nghiệp hướng tới mức giá cùng điều khoản tốt hơn." },
      { title: "Bảo mật thông tin", text: "Archway bảo mật thông tin về khách hàng, mã nguồn, kiến trúc hệ thống và an ninh dữ liệu trong suốt quá trình giao dịch." },
      { title: "Giữ giao dịch đi đúng tiến độ", text: "Archway theo dõi yêu cầu về hợp đồng, bảo mật, đội ngũ và quy trình để hỗ trợ giao dịch mà không làm gián đoạn hoạt động." },
      { title: "Giảm việc phải tự điều phối", text: "Chủ doanh nghiệp có một đầu mối làm việc với người mua, cố vấn và đội ngũ, thay vì tự mình xử lý từng yêu cầu." },
    ],
    ctaHeading: "Định giá doanh nghiệp dịch vụ IT miễn phí",
    ctaText: "Gửi thông tin cơ bản qua biểu mẫu để Archway bắt đầu đánh giá thương mại sơ bộ và trao đổi riêng về mục tiêu chuyển nhượng.",
    ctaLink: "Định giá miễn phí",
    homeLabel: "Trang chủ",
    industriesLabel: "Các ngành chúng tôi phục vụ",
    footerAddress: "Tầng 17, Tòa nhà Vincom Center, 72 đường Lê Thánh Tôn, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    footerPhone: "Điện thoại: 0346-346-550",
  },
  en: {
    metaTitle: "Sell an IT Outsourcing or Managed IT Services Business | Archway",
    metaDescription: "Archway provides sell-side advisory and business brokerage for IT outsourcing and managed IT services businesses in Vietnam, from valuation through handover.",
    serviceType: "IT outsourcing and managed IT services business brokerage and sell-side advisory in Vietnam",
    heading: "Sell an IT Outsourcing or Managed IT Services Business in Vietnam",
    intro: "Archway helps owners of outsourced IT and managed IT services businesses prepare a sale that explains recurring revenue, delivery capability, intellectual property and service continuity.",
    leadHeading: "IT outsourcing and managed IT services business brokerage and sell-side advisory",
    leadParagraphs: [
      "Archway represents IT outsourcing and managed IT services owners throughout the preparation and sale of the business. Our scope includes (1) assessing commercial value through recurring revenue, margin and customer retention, (2) preparing contract, team and IP materials, (3) approaching and screening buyers confidentially, (4) assessing offers and financing plans, (5) supporting due diligence, negotiation and signing, and (6) coordinating the transfer of customers, people and service operations.",
      "A sell-side process helps the owner explain revenue quality and transferability without releasing customer identities, source code or sensitive data too early. Archway clarifies buyer financial capacity before deeper information is shared and coordinates relevant advisers at each stage.",
    ],
    leadLink: "Share information to begin a confidential discussion",
    benchmarkExampleHeading: "A simple IT-services valuation example",
    benchmarkExampleParagraphs: [
      "For illustration, if normalized SDE is VND 3 billion and the average SDE multiple is 3.10x, the SDE-based reference value is VND 9.3 billion before adjustments for debt, cash, working capital and payment terms.",
      "If revenue is VND 25 billion and the average revenue multiple is 1.02x, the revenue-based reference is VND 25.5 billion. The result should be tested against recurring revenue, people costs and contract retention.",
    ],
    servicesHeading: "Sell your IT-services business with greater confidence and support from Archway",
    servicesIntro: "The value of an IT-services business needs to be explained through contracts, delivery teams, intellectual property and the ability to retain revenue after ownership changes.",
    benchmarkHeading: "Indicative valuation data for the IT outsourcing and managed IT services sector",
    benchmarkIntro: "The figures below provide reference multiples for IT and software services. Multiples are expressed in times earnings or revenue.",
    benchmarkItems: [
      { value: "2.20x–3.87x" },
      { value: "3.10x" },
      { value: "0.57x–1.32x" },
      { value: "1.02x" },
    ],
    benchmarkNote: "These multiples are market reference points. The applicable range depends on financial data, business scale and transaction structure.",
    services: [
      { title: "Valuation based on recurring revenue and delivery capability", text: "Archway reviews normalized earnings, recurring-revenue share, renewal, customer concentration, margin, people costs and founder dependence. This helps distinguish a services company from a software model that may require a different valuation lens.", image: valuationImage, imagePosition: "left", linkLabel: "Share information to get started" },
      { title: "Sale materials and targeted buyer outreach", text: "Archway organizes materials around contracts, SLAs, team, delivery processes, IP rights and security commitments. Strategic or adjacent technology buyers are approached selectively while customer and technical information remains controlled.", image: positioningImage, imagePosition: "right" },
      { title: "Negotiation, diligence and team handover", text: "Archway supports comparisons of price, payment terms, retention requirements, contract transfer, IP rights and confidentiality obligations. After a buyer is selected, Archway tracks diligence materials and coordinates the service handover plan.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway helps IT-services owners work toward better price and terms",
    outcomesIntro: "The owner continues maintaining service quality while Archway represents the seller, organizes information, works with buyers and tracks the sale.",
    outcomes: [
      { title: "Work toward better price and terms", text: "Archway helps position the business, find suitable buyers and negotiate so the owner can work toward better price and terms." },
      { title: "Keep information confidential", text: "Archway keeps customer identities, source code, system architecture and security information confidential throughout the transaction." },
      { title: "Keep the sale moving", text: "Archway tracks contract, security, team and process requests to support the transaction without disrupting operations." },
      { title: "Reduce the owner’s workload", text: "The owner has one representative working with buyers, advisers and the team instead of handling every request alone." },
    ],
    ctaHeading: "Free IT-services business valuation",
    ctaText: "Share basic information through the form so Archway can begin an initial commercial assessment and discuss your transfer objectives confidentially.",
    ctaLink: "Get a Free Business Valuation",
    homeLabel: "Home",
    industriesLabel: "Industries We Serve",
    footerAddress: "17th Floor, Vincom Center Building, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
    footerPhone: "Phone: (+84) 346-346-550",
  },
};

export const medicalEquipmentServicePage: IndustryServicePage = {
  slug: "medical-equipment-technical-services",
  heroImage: medicalHeroImage,
  leadImage: medicalLeadImage,
  ctaImage,
  vi: {
    metaTitle: "Bán doanh nghiệp thiết bị y tế và dịch vụ kỹ thuật | Archway",
    metaDescription: "Archway cung cấp dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp thiết bị y tế và dịch vụ kỹ thuật tại Việt Nam, từ định giá đến chuyển giao.",
    serviceType: "Môi giới và tư vấn đại diện bên bán cho doanh nghiệp thiết bị y tế và dịch vụ kỹ thuật tại Việt Nam",
    heading: "Bán doanh nghiệp thiết bị y tế và dịch vụ kỹ thuật tại Việt Nam",
    intro: "Archway hỗ trợ chủ doanh nghiệp thiết bị y tế và dịch vụ kỹ thuật chuẩn bị một thương vụ bán bảo mật, trong đó giá trị thương mại được giải thích cùng quyền phân phối, tuân thủ, cơ sở thiết bị và hợp đồng dịch vụ.",
    leadHeading: "Dịch vụ môi giới và tư vấn đại diện bên bán cho doanh nghiệp thiết bị y tế",
    leadParagraphs: [
      "Archway đại diện cho chủ doanh nghiệp thiết bị y tế và dịch vụ kỹ thuật trong suốt quá trình chuẩn bị và bán doanh nghiệp. Phạm vi dịch vụ bao gồm (1) đánh giá giá trị thương mại theo danh mục sản phẩm, doanh thu dịch vụ và cơ sở thiết bị, (2) chuẩn bị hồ sơ về hãng, giấy phép, hợp đồng và đội ngũ, (3) tiếp cận và sàng lọc người mua trong điều kiện bảo mật, (4) đánh giá đề nghị và phương án tài chính, (5) hỗ trợ thẩm tra, đàm phán và ký kết, và (6) phối hợp chuyển giao khách hàng, thiết bị cùng nghĩa vụ kỹ thuật.",
      "Ngành thiết bị y tế thường cần làm rõ quyền phân phối, hồ sơ tuân thủ, nghĩa vụ bảo hành, tồn kho và khả năng tiếp tục phục vụ cơ sở thiết bị sau khi thay đổi chủ sở hữu. Archway tổ chức thông tin theo từng giai đoạn và nhắc chủ doanh nghiệp sử dụng chuyên gia pháp lý hoặc tuân thủ phù hợp khi giao dịch yêu cầu.",
    ],
    leadLink: "Gửi thông tin để bắt đầu trao đổi riêng",
    benchmarkExampleHeading: "Ví dụ tính nhanh cho doanh nghiệp thiết bị y tế",
    benchmarkExampleParagraphs: [
      "Ví dụ minh họa: nếu SDE đã chuẩn hóa là 2 tỷ đồng và hệ số SDE trung bình là 2,79x, giá trị tham khảo theo SDE là 5,58 tỷ đồng trước khi điều chỉnh nợ, tiền mặt, vốn lưu động và điều khoản thanh toán.",
      "Nếu doanh thu là 15 tỷ đồng và hệ số doanh thu trung bình là 0,80x, phép tham chiếu theo doanh thu là 12 tỷ đồng. Kết quả cần được đối chiếu với quyền phân phối, tồn kho, bảo hành và nghĩa vụ tuân thủ.",
    ],
    servicesHeading: "Bán doanh nghiệp thiết bị y tế an tâm hơn với sự đồng hành của Archway",
    servicesIntro: "Một thương vụ thiết bị y tế cần kết nối giá trị thương mại với khả năng tuân thủ, chuyển giao quan hệ hãng và duy trì chất lượng dịch vụ kỹ thuật.",
    benchmarkHeading: "Các số liệu định giá tham khảo cho ngành thiết bị y tế và dịch vụ kỹ thuật",
    benchmarkIntro: "Các hệ số dưới đây là mốc tham khảo cho ngành thiết bị y tế. Đơn vị hệ số là lần.",
    benchmarkItems: [
      { value: "1,83x–3,09x" },
      { value: "2,79x" },
      { value: "0,50x–1,03x" },
      { value: "0,80x" },
    ],
    benchmarkNote: "Các hệ số này là mức tham khảo thị trường. Khoảng hệ số cụ thể còn phụ thuộc vào dữ liệu tài chính, quy mô doanh nghiệp và cấu trúc giao dịch.",
    services: [
      { title: "Định giá theo sản phẩm, dịch vụ và cơ sở thiết bị", text: "Archway rà soát lợi nhuận đã chuẩn hóa, doanh thu thiết bị, vật tư tiêu hao, lắp đặt, bảo trì, sửa chữa, quyền phân phối, tồn kho và mục tiêu chuyển nhượng. Đánh giá này giúp chủ doanh nghiệp phân biệt giao dịch thiết bị đơn lẻ với doanh thu dịch vụ có thể tiếp tục.", image: valuationImage, imagePosition: "left", linkLabel: "Gửi thông tin để bắt đầu" },
      { title: "Chuẩn bị hồ sơ và tiếp cận người mua phù hợp", text: "Archway tổ chức hồ sơ quanh sản phẩm, hãng, giấy phép, cơ sở thiết bị, hợp đồng bảo trì, đội ngũ kỹ thuật và nghĩa vụ bảo hành. Người mua chiến lược hoặc doanh nghiệp dịch vụ liền kề được tiếp cận có chọn lọc, trong khi thông tin khách hàng và tuân thủ được kiểm soát.", image: positioningImage, imagePosition: "right" },
      { title: "Đàm phán, thẩm tra và chuyển giao dịch vụ", text: "Archway hỗ trợ so sánh giá, tồn kho, vốn lưu động, bảo hành, điều khoản hãng, phê duyệt cần thiết và trách nhiệm dịch vụ sau giao dịch. Sau khi chọn người mua, Archway theo dõi tài liệu và phối hợp kế hoạch chuyển giao.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway giúp chủ doanh nghiệp thiết bị y tế hướng tới giá và điều khoản tốt hơn",
    outcomesIntro: "Chủ doanh nghiệp tiếp tục duy trì quan hệ hãng và chất lượng dịch vụ, còn Archway đại diện bên bán để tổ chức thông tin, làm việc với người mua và theo dõi giao dịch.",
    outcomes: [
      { title: "Hướng tới giá và điều khoản tốt hơn", text: "Archway giúp định vị giá trị doanh nghiệp, tìm người mua phù hợp và đàm phán để chủ doanh nghiệp hướng tới mức giá cùng điều khoản tốt hơn." },
      { title: "Bảo mật thông tin", text: "Archway bảo mật thông tin về sản phẩm, hãng, bệnh viện, hợp đồng và dữ liệu kỹ thuật trong suốt quá trình giao dịch." },
      { title: "Giữ giao dịch đi đúng tiến độ", text: "Archway theo dõi tài liệu, câu hỏi về sản phẩm, quyền phân phối và yêu cầu chấp thuận, đồng thời phối hợp với chuyên gia phù hợp khi cần." },
      { title: "Giảm việc phải tự điều phối", text: "Chủ doanh nghiệp có một đầu mối làm việc với người mua và các bên liên quan, thay vì tự mình xử lý từng yêu cầu." },
    ],
    ctaHeading: "Định giá doanh nghiệp thiết bị y tế miễn phí",
    ctaText: "Gửi thông tin cơ bản qua biểu mẫu để Archway bắt đầu đánh giá thương mại sơ bộ và trao đổi riêng về mục tiêu chuyển nhượng.",
    ctaLink: "Định giá miễn phí",
    homeLabel: "Trang chủ",
    industriesLabel: "Các ngành chúng tôi phục vụ",
    footerAddress: "Tầng 17, Tòa nhà Vincom Center, 72 đường Lê Thánh Tôn, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    footerPhone: "Điện thoại: 0346-346-550",
  },
  en: {
    metaTitle: "Sell a Medical Equipment and Technical Services Business | Archway",
    metaDescription: "Archway provides sell-side advisory and business brokerage for medical equipment and technical-services businesses in Vietnam, from valuation through handover.",
    serviceType: "Medical equipment and technical-services business brokerage and sell-side advisory in Vietnam",
    heading: "Sell a Medical Equipment and Technical Services Business in Vietnam",
    intro: "Archway helps medical equipment and technical-services owners prepare a confidential sale in which commercial value is explained alongside distribution rights, compliance, the installed base and service contracts.",
    leadHeading: "Medical equipment business brokerage and sell-side advisory",
    leadParagraphs: [
      "Archway represents medical equipment and technical-services owners throughout the preparation and sale of the business. Our scope includes (1) assessing commercial value through products, service revenue and the installed base, (2) preparing supplier, licensing, contract and team materials, (3) approaching and screening buyers confidentially, (4) assessing offers and financing plans, (5) supporting due diligence, negotiation and signing, and (6) coordinating the transfer of customers, equipment and technical obligations.",
      "A medical-equipment sale often needs to clarify distribution rights, compliance records, warranty obligations, inventory and the ability to continue servicing the installed base after ownership changes. Archway organizes information in stages and encourages the owner to use appropriate legal or compliance specialists when a transaction requires them.",
    ],
    leadLink: "Share information to begin a confidential discussion",
    benchmarkExampleHeading: "A simple medical-equipment valuation example",
    benchmarkExampleParagraphs: [
      "For illustration, if normalized SDE is VND 2 billion and the average SDE multiple is 2.79x, the SDE-based reference value is VND 5.58 billion before adjustments for debt, cash, working capital and payment terms.",
      "If revenue is VND 15 billion and the average revenue multiple is 0.80x, the revenue-based reference is VND 12 billion. The result should be tested against distribution rights, inventory, warranty and compliance obligations.",
    ],
    servicesHeading: "Sell your medical equipment business with greater confidence and support from Archway",
    servicesIntro: "A medical-equipment sale needs to connect commercial value with compliance, supplier-relationship transfer and continuity of technical service.",
    benchmarkHeading: "Indicative valuation data for the medical equipment and technical services sector",
    benchmarkIntro: "The figures below provide reference multiples for medical devices. Multiples are expressed in times earnings or revenue.",
    benchmarkItems: [
      { value: "1.83x–3.09x" },
      { value: "2.79x" },
      { value: "0.50x–1.03x" },
      { value: "0.80x" },
    ],
    benchmarkNote: "These multiples are market reference points. The applicable range depends on financial data, business scale and transaction structure.",
    services: [
      { title: "Valuation across products, services and the installed base", text: "Archway reviews normalized earnings, equipment, consumables, installation, maintenance, repair, distribution rights, inventory and the owner’s transfer objectives. This helps distinguish one-off equipment transactions from service revenue that may continue.", image: valuationImage, imagePosition: "left", linkLabel: "Share information to get started" },
      { title: "Sale materials and targeted buyer outreach", text: "Archway organizes materials around products, manufacturers, licences, the installed base, maintenance contracts, technical people and warranty obligations. Strategic or adjacent service buyers are approached selectively while customer and compliance information remains controlled.", image: positioningImage, imagePosition: "right" },
      { title: "Negotiation, diligence and service handover", text: "Archway supports comparisons of price, inventory, working capital, warranty, supplier terms, required approvals and post-transaction service obligations. After a buyer is selected, Archway tracks materials and coordinates the handover plan.", image: transactionImage, imagePosition: "left" },
    ],
    outcomesHeading: "Archway helps medical-equipment owners work toward better price and terms",
    outcomesIntro: "The owner continues managing supplier relationships and service quality while Archway represents the seller, organizes information, works with buyers and tracks the sale.",
    outcomes: [
      { title: "Work toward better price and terms", text: "Archway helps position the business, find suitable buyers and negotiate so the owner can work toward better price and terms." },
      { title: "Keep information confidential", text: "Archway keeps product, manufacturer, hospital, contract and technical information confidential throughout the transaction." },
      { title: "Keep the sale moving", text: "Archway tracks documents, product questions, distribution rights and consent requirements while coordinating appropriate specialists where needed." },
      { title: "Reduce the owner’s workload", text: "The owner has one representative working with buyers and other parties while maintaining technical operations and customer relationships." },
    ],
    ctaHeading: "Free medical-equipment business valuation",
    ctaText: "Share basic information through the form so Archway can begin an initial commercial assessment and discuss your transfer objectives confidentially.",
    ctaLink: "Get a Free Business Valuation",
    homeLabel: "Home",
    industriesLabel: "Industries We Serve",
    footerAddress: "17th Floor, Vincom Center Building, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
    footerPhone: "Phone: (+84) 346-346-550",
  },
};

export const industryServicePages: IndustryServicePage[] = [
  hvacServicePage,
  electricalContractorsServicePage,
  logisticsServicePage,
  industrialMachineryServicePage,
  itServicesServicePage,
  medicalEquipmentServicePage,
];

export function getIndustryServicePage(slug: string): IndustryServicePage | undefined {
  return industryServicePages.find((page) => page.slug === slug);
}
