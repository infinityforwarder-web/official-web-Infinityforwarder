export const LOGO_SRC = '/images/infinity-logo-mark.png';
export const LOGO_SRC_DARK = '/images/infinity-logo-mark-dark.png';

const serviceImage = (slug) => `/images/services/${slug}.jpg`;

export const PAGE_HEROES = {
  services: '/images/banners/services.jpg',
  about: '/images/banners/about.jpg',
  contact: '/images/banners/contact.jpg',
  homeGallery: '/images/about/team.jpg',
};

export const ABOUT_IMAGES = {
  team: '/images/about/team.jpg',
  compliance: '/images/about/compliance.jpg',
  network: '/images/about/global-network.jpg',
};

export const CONTACT_IMAGES = {
  support: '/images/contact/support.jpg',
  cargo: '/images/contact/cargo.jpg',
  multimodal: '/images/contact/multimodal.jpg',
};

export const COMPANY = {
  name: 'Infinity Freight Forwarders Pvt Ltd',
  shortName: 'Infinity Forwarder',
  tagline: 'Fast. Secure. Worldwide',
  description:
    'Infinity Freight Forwarders Pvt. Ltd. delivers world-class logistics services including Air Freight, Sea Freight, Customs Clearance, Warehousing, and Door-to-Door Cargo Solutions.',
  addresses: [
    {
      label: 'Regd Office',
      lines: ['Off. No 11/500 ROAD NO 66 Subhash Park, Shahdara, Delhi-110032'],
    },
    {
      label: 'Corp Office',
      lines: ['A-88, G-06, sector-4, Noida, Uttar Pradesh - 201301'],
    },
  ],
  phones: ['+91 7503080009', '+91 9958762810'],
  whatsappDisplay: '+91 7827686858',
  whatsapp: '917827686858',
  emails: [
    'Info@infinityforwarder.com',
    'office@infinityforwarder.com',
    'Sales@infinityforwarder.com',
  ],
};

export const NAV_LINKS = [
  { path: '/', label: 'Home', icon: 'fa-house', end: true },
  { path: '/about', label: 'About Us', icon: 'fa-building' },
  { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', handle: '@infinity-forwarder', icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/in/infinity-forwarder-bb469141a?utm_source=share_via&utm_content=profile&utm_medium=member_ios', brand: '#0a66c2' },
  { name: 'Facebook', handle: 'Infinity Forwarder', icon: 'fa-facebook-f', url: 'https://www.facebook.com/share/1AyYoHEi5b/?mibextid=wwXIfr', brand: '#1877f2' },
  { name: 'Instagram', handle: '@infinity_forwarder', icon: 'fa-instagram', url: 'https://www.instagram.com/infinity_forwarder?utm_source=qr', brand: '#e4405f' },
];

export const SERVICES = [
  {
    slug: 'import-export',
    icon: 'fa-globe',
    color: '#6366f1',
    title: 'Import & Export Services',
    tagline: 'Complete international trade logistics',
    summary:
      'Complete import and export logistics with shipment coordination, documentation, customs, and cargo movement for hassle-free global transportation.',
    details:
      'We provide complete import and export logistics solutions to help businesses manage international trade smoothly and efficiently. Our team handles shipment coordination, documentation, customs processes, and cargo movement to ensure hassle-free global transportation.',
    heroImage: serviceImage('import-export'),
    cardImage: serviceImage('import-export'),
    features: [
      'International Import & Export Solutions',
      'Documentation & Compliance Support',
      'Customs Coordination & Cargo Handling',
      'Door-to-Door Shipment Management',
      'Smooth Global Trade Operations',
    ],
    benefits: [
      'End-to-end coordination for import and export shipments',
      'Reduced complexity in documentation and customs',
      'Smooth, efficient global trade operations',
    ],
    relatedSlugs: ['customs', 'ocean-freight', 'warehousing'],
  },
  {
    slug: 'ocean-freight',
    icon: 'fa-ship',
    color: '#0ea5e9',
    title: 'Ocean Freight Services',
    tagline: 'FCL & LCL across global ports',
    summary:
      'Reliable, cost-effective FCL and LCL ocean freight with secure handling, timely delivery, and efficient operations across global ports.',
    details:
      'Our Ocean Freight solutions offer reliable and cost-effective transportation for international cargo through Full Container Load (FCL) and Less than Container Load (LCL) services. We ensure secure handling, timely delivery, and efficient shipping operations across global ports.',
    heroImage: serviceImage('ocean-freight'),
    cardImage: serviceImage('ocean-freight'),
    features: [
      'FCL (Full Container Load) & LCL (Less than Container Load) shipping',
      'Port-to-Port and Door-to-Door delivery',
      'Customs Clearance and Documentation Support',
      'International Cargo Handling & Shipment Coordination',
      'Secure, Cost-Effective & Timely Ocean Transportation',
    ],
    benefits: [
      'Cost-effective shipping for international cargo volumes',
      'Secure handling and coordination at major global ports',
      'Timely ocean transportation with professional oversight',
    ],
    relatedSlugs: ['customs', 'land-transport', 'import-export'],
  },
  {
    slug: 'air-freight',
    icon: 'fa-plane',
    color: '#8b5cf6',
    title: 'Air Freight Services',
    tagline: 'Fast air cargo for urgent shipments',
    summary:
      'Fast, dependable air freight for urgent shipments with worldwide connectivity, secure handling, and efficient international and domestic delivery.',
    details:
      'We provide fast and dependable Air Freight services for urgent and time-sensitive shipments. With worldwide connectivity and professional cargo management, we ensure quick transit, secure handling, and efficient delivery for international and domestic air cargo.',
    heroImage: serviceImage('air-freight'),
    cardImage: serviceImage('air-freight'),
    features: [
      'Fast & Reliable Air Cargo Solutions',
      'Express International & Domestic Shipping',
      'Airport-to-Airport and Door-to-Door Services',
      'Secure Handling for Urgent Shipments',
    ],
    benefits: [
      'Quick transit for time-sensitive cargo',
      'Worldwide air connectivity and routing',
      'Professional management from pickup to delivery',
    ],
    relatedSlugs: ['customs', 'land-transport', 'import-export'],
  },
  {
    slug: 'customs',
    icon: 'fa-file-shield',
    color: '#f59e0b',
    title: 'Customs Clearance Services',
    tagline: 'Compliant, hassle-free border clearance',
    summary:
      'Smooth customs clearance with efficient documentation, duty processing, and coordination to minimise delays on import and export shipments.',
    details:
      'Our Customs Clearance services ensure smooth and compliant cargo movement through efficient documentation, duty processing, and customs coordination. We help minimize delays and simplify import and export clearance procedures.',
    heroImage: serviceImage('customs'),
    cardImage: serviceImage('customs'),
    features: [
      'Import & Export Customs Documentation',
      'Duty Processing & Compliance Support',
      'Smooth Cargo Clearance Operations',
      'Coordination with Customs Authorities',
      'Hassle-Free & Timely Shipment Clearance',
    ],
    benefits: [
      'Compliant cargo movement through customs channels',
      'Minimised delays with expert documentation support',
      'Simplified import and export clearance procedures',
    ],
    relatedSlugs: ['import-export', 'ocean-freight', 'air-freight'],
  },
  {
    slug: 'land-transport',
    icon: 'fa-truck-fast',
    color: '#10b981',
    title: 'Land Transportation Services',
    tagline: 'Safe inland cargo movement nationwide',
    summary:
      'Reliable land transportation for local and interstate cargo with safe handling, timely delivery, and seamless movement from ports and warehouses.',
    details:
      'We offer reliable land transportation solutions for local and interstate cargo movement with safe handling and timely delivery. Our transportation network supports seamless movement of goods from ports, warehouses, and distribution centers to final destinations.',
    heroImage: serviceImage('land-transport'),
    cardImage: serviceImage('land-transport'),
    features: [
      'Domestic & International Road Transportation',
      'Port-to-Warehouse Cargo Movement',
      'Safe & Timely Delivery Solutions',
      'Full Truck Load (FTL) & Part Load Services',
      'Efficient Inland Logistics Support',
    ],
    benefits: [
      'Safe handling from port or warehouse to destination',
      'Timely inland delivery across our transport network',
      'Seamless connection with ocean, air, and warehousing legs',
    ],
    relatedSlugs: ['warehousing', 'ocean-freight', 'customs'],
  },
  {
    slug: 'warehousing',
    icon: 'fa-warehouse',
    color: '#ec4899',
    title: 'Warehousing',
    tagline: 'Secure storage & distribution support',
    summary:
      'Secure warehousing and distribution with inventory management and efficient cargo handling for smooth supply chain operations.',
    details:
      'Our warehousing and distribution solutions provide secure storage, inventory management, and efficient cargo distribution to support smooth supply chain operations. We ensure safe handling and organized logistics for all types of commercial shipments.',
    heroImage: serviceImage('warehousing'),
    cardImage: serviceImage('warehousing'),
    features: [
      'Secure Storage',
      'Cargo Handling',
      'Supply Chain Support',
      'Short-Term & Long-Term Warehousing',
      'Delivery Management',
    ],
    benefits: [
      'Organized storage for commercial shipments of all types',
      'Efficient inventory and distribution management',
      'Flexible short- and long-term warehousing options',
    ],
    relatedSlugs: ['land-transport', 'import-export', 'customs'],
  },
];

export const WHY_US_INTRO =
  'Infinity Freight Forwarders provides reliable, cost-effective, and end-to-end logistics solutions designed to simplify global trade operations.';

export const WHY_US = [
  {
    icon: 'fa-route',
    title: 'End-to-End Logistics',
    text: 'Reliable, cost-effective solutions designed to simplify global trade operations—from planning through final delivery.',
    image: '/images/why-us/end-to-end.jpg',
  },
  {
    icon: 'fa-earth-americas',
    title: 'Strong Global Network',
    text: 'A robust international network with expert customs support to keep your import and export cargo moving smoothly.',
    image: '/images/why-us/global-network.jpg',
  },
  {
    icon: 'fa-boxes-stacked',
    title: 'Secure & Timely Delivery',
    text: 'Secure cargo handling and timely delivery ensure smooth transportation for businesses engaged in global trade.',
    image: '/images/why-us/secure-delivery.jpg',
  },
  {
    icon: 'fa-handshake',
    title: 'Trusted Partner',
    text: 'A customer-focused approach, professional coordination, and commitment to service excellence for worldwide freight and logistics.',
    image: '/images/why-us/trusted-partner.jpg',
  },
];

export const PROCESS_STEPS = [
  { num: '01', title: 'Enquiry & Quote', text: 'Share shipment details and get a competitive quotation.' },
  { num: '02', title: 'Booking Confirmation', text: 'We confirm your booking and finalise the best route.' },
  { num: '03', title: 'Pickup & Handling', text: 'Cargo is picked up and handled with full care.' },
  { num: '04', title: 'Transportation', text: 'Shipment moves by ocean, air, or road with updates.' },
  { num: '05', title: 'Customs Clearance', text: 'Documentation and customs clearance are completed smoothly.' },
  { num: '06', title: 'Arrival & Receipt', text: 'Cargo arrives and is received with safety checks.' },
  { num: '07', title: 'Inspection', text: 'Documents are verified for compliance before release.' },
  { num: '08', title: 'Inland Transport', text: 'Cargo is transported to the required inland location.' },
  { num: '09', title: 'Warehousing', text: 'Storage and inventory support provided when required.' },
  { num: '10', title: 'Order Fulfilment', text: 'Packing, dispatch, and order coordination are managed.' },
  { num: '11', title: 'Final Delivery', text: 'Shipment is delivered safely to the final destination.' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Excellent coordination from booking to final delivery. The team kept us updated at every stage and handled documentation smoothly.',
  },
  {
    quote:
      'Our urgent air shipment was moved on time with safe handling. Communication was clear and the process was stress-free.',
  },
  {
    quote:
      'Very reliable support for import consignments. Customs formalities were managed efficiently, which helped us avoid delays.',
  },
  {
    quote:
      'Professional logistics partner for our regular cargo movements. Rates are fair, service is consistent, and deliveries are timely.',
  },
];

export const ANIMATED_STRIP = [
  { icon: 'fa-ship', label: 'Ocean' },
  { icon: 'fa-plane', label: 'Air' },
  { icon: 'fa-truck', label: 'Road' },
  { icon: 'fa-warehouse', label: 'Storage' },
  { icon: 'fa-box', label: 'Cargo' },
  { icon: 'fa-globe', label: 'Global' },
];
