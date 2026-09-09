export interface IndustryImage {
  avifSrcset: string;
  webpSrcset: string;
  src: string;
  width: number;
  height: number;
  altVi: string;
  altEn: string;
}

interface LocalizedIndustryCard {
  title: string;
  cardDescription: string;
  cardLinkLabel: string;
}

export interface IndustryPage {
  slug: string;
  image: IndustryImage;
  vi: LocalizedIndustryCard;
  en: LocalizedIndustryCard;
}

export const industryPages: IndustryPage[] = [
  {
    slug: "hvac",
    image: {
      avifSrcset: "/assets/image-library/archway_owner_working_2-640.avif 640w, /assets/image-library/archway_owner_working_2-1280.avif 1280w, /assets/image-library/archway_owner_working_2-1920.avif 1920w",
      webpSrcset: "/assets/image-library/archway_owner_working_2-640.webp 640w, /assets/image-library/archway_owner_working_2-1280.webp 1280w, /assets/image-library/archway_owner_working_2-1920.webp 1920w",
      src: "/assets/image-library/archway_owner_working_2-1280.webp",
      width: 1280,
      height: 853,
      altVi: "Nhân viên trao đổi tại cơ sở dịch vụ công nghiệp",
      altEn: "Workers reviewing equipment at an industrial services facility",
    },
    vi: {
      title: "HVAC",
      cardDescription: "Hệ thống sưởi, thông gió và điều hòa không khí cho công trình và doanh nghiệp.",
      cardLinkLabel: "Tìm hiểu cách bán doanh nghiệp HVAC",
    },
    en: {
      title: "HVAC",
      cardDescription: "Heating, ventilation and air conditioning systems for buildings and businesses.",
      cardLinkLabel: "Learn how to sell an HVAC business",
    },
  },
  {
    slug: "electrical-contractors",
    image: {
      avifSrcset: "/assets/image-library/archway_solar_panel-640.avif 640w, /assets/image-library/archway_solar_panel-1280.avif 1280w, /assets/image-library/archway_solar_panel-1920.avif 1920w",
      webpSrcset: "/assets/image-library/archway_solar_panel-640.webp 640w, /assets/image-library/archway_solar_panel-1280.webp 1280w, /assets/image-library/archway_solar_panel-1920.webp 1920w",
      src: "/assets/image-library/archway_solar_panel-1280.webp",
      width: 1280,
      height: 853,
      altVi: "Công nhân lắp đặt hệ thống điện mặt trời",
      altEn: "Workers installing a solar power system",
    },
    vi: {
      title: "Nhà thầu điện",
      cardDescription: "Nhà thầu và đơn vị cung cấp dịch vụ điện cho công trình và doanh nghiệp.",
      cardLinkLabel: "Tìm hiểu cách bán doanh nghiệp nhà thầu điện",
    },
    en: {
      title: "Electrical Contractors",
      cardDescription: "Electrical contractors and service providers for buildings, facilities and businesses.",
      cardLinkLabel: "Learn how to sell an electrical contracting business",
    },
  },
  {
    slug: "3pl-freight-forwarding",
    image: {
      avifSrcset: "/assets/image-library/archway_storage-640.avif 640w, /assets/image-library/archway_storage-1280.avif 1280w, /assets/image-library/archway_storage-1920.avif 1920w",
      webpSrcset: "/assets/image-library/archway_storage-640.webp 640w, /assets/image-library/archway_storage-1280.webp 1280w, /assets/image-library/archway_storage-1920.webp 1920w",
      src: "/assets/image-library/archway_storage-1280.webp",
      width: 1280,
      height: 853,
      altVi: "Kho hàng với hệ thống kệ lưu trữ",
      altEn: "Warehouse with storage racking",
    },
    vi: {
      title: "3PL / Giao nhận vận tải",
      cardDescription: "Dịch vụ logistics bên thứ ba, giao nhận, kho bãi và vận chuyển hàng hóa.",
      cardLinkLabel: "Tìm hiểu cách bán doanh nghiệp 3PL hoặc giao nhận vận tải",
    },
    en: {
      title: "3PL / Freight Forwarding",
      cardDescription: "Third-party logistics, freight forwarding, warehousing and transportation services.",
      cardLinkLabel: "Learn how to sell a 3PL or freight forwarding business",
    },
  },
  {
    slug: "industrial-machinery-equipment",
    image: {
      avifSrcset: "/assets/image-library/archway_factory-640.avif 640w, /assets/image-library/archway_factory-1280.avif 1280w, /assets/image-library/archway_factory-1920.avif 1920w",
      webpSrcset: "/assets/image-library/archway_factory-640.webp 640w, /assets/image-library/archway_factory-1280.webp 1280w, /assets/image-library/archway_factory-1920.webp 1920w",
      src: "/assets/image-library/archway_factory-1280.webp",
      width: 1280,
      height: 853,
      altVi: "Nhân viên vận hành máy móc trong nhà xưởng",
      altEn: "Worker operating machinery in a factory",
    },
    vi: {
      title: "Máy móc & thiết bị công nghiệp",
      cardDescription: "Doanh nghiệp cung cấp máy móc, thiết bị và giải pháp phục vụ sản xuất công nghiệp.",
      cardLinkLabel: "Tìm hiểu cách bán doanh nghiệp máy móc và thiết bị công nghiệp",
    },
    en: {
      title: "Industrial Machinery & Equipment",
      cardDescription: "Businesses supplying machinery, equipment and solutions for industrial production.",
      cardLinkLabel: "Learn how to sell an industrial machinery and equipment business",
    },
  },
  {
    slug: "it-outsourcing-managed-it-services",
    image: {
      avifSrcset: "/assets/image-library/archway_working-640.avif 640w, /assets/image-library/archway_working-1280.avif 1280w, /assets/image-library/archway_working-1920.avif 1920w",
      webpSrcset: "/assets/image-library/archway_working-640.webp 640w, /assets/image-library/archway_working-1280.webp 1280w, /assets/image-library/archway_working-1920.webp 1920w",
      src: "/assets/image-library/archway_working-1280.webp",
      width: 1280,
      height: 853,
      altVi: "Nhân viên làm việc với máy tính tại doanh nghiệp",
      altEn: "Employee working at a computer in a business",
    },
    vi: {
      title: "IT Outsourcing / Managed IT Services",
      cardDescription: "Dịch vụ IT được thuê ngoài, quản trị và vận hành cho doanh nghiệp.",
      cardLinkLabel: "Tìm hiểu cách bán doanh nghiệp IT Outsourcing hoặc Managed IT Services",
    },
    en: {
      title: "IT Outsourcing / Managed IT Services",
      cardDescription: "Outsourced IT support, management and operations for businesses.",
      cardLinkLabel: "Learn how to sell an IT outsourcing or managed IT services business",
    },
  },
  {
    slug: "medical-equipment-technical-services",
    image: {
      avifSrcset: "/assets/image-library/archway_factory_working-640.avif 640w, /assets/image-library/archway_factory_working-1280.avif 1280w, /assets/image-library/archway_factory_working-1920.avif 1920w",
      webpSrcset: "/assets/image-library/archway_factory_working-640.webp 640w, /assets/image-library/archway_factory_working-1280.webp 1280w, /assets/image-library/archway_factory_working-1920.webp 1920w",
      src: "/assets/image-library/archway_factory_working-1280.webp",
      width: 1280,
      height: 850,
      altVi: "Công nhân vận hành thiết bị sản xuất",
      altEn: "Worker operating production equipment",
    },
    vi: {
      title: "Thiết bị y tế & dịch vụ kỹ thuật",
      cardDescription: "Doanh nghiệp cung cấp thiết bị y tế, dịch vụ kỹ thuật và hỗ trợ vận hành.",
      cardLinkLabel: "Tìm hiểu cách bán doanh nghiệp thiết bị y tế và dịch vụ kỹ thuật",
    },
    en: {
      title: "Medical Equipment & Technical Services",
      cardDescription: "Businesses supplying medical equipment, technical services and operational support.",
      cardLinkLabel: "Learn how to sell a medical equipment and technical-services business",
    },
  },
];
