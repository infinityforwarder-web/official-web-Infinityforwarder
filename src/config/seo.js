import { COMPANY, SERVICES, SOCIAL_LINKS } from './site';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://infinityforwarder.com').replace(
  /\/$/,
  ''
);

export const SEO_KEYWORDS = [
  'Infinity Forwarder',
  'Infinity Freight Forwarders',
  'Infinity Freight Forwarders Pvt Ltd',
  'freight forwarder India',
  'freight forwarder Delhi',
  'freight forwarder Noida',
  'logistics company India',
  'international freight forwarding',
  'air freight India',
  'ocean freight India',
  'sea freight forwarding',
  'FCL LCL shipping',
  'customs clearance India',
  'import export logistics',
  'international shipping company',
  'door to door cargo',
  'warehousing and distribution',
  'global logistics partner',
  'cargo shipping India',
  'freight forwarding company Delhi NCR',
];

const keywordString = SEO_KEYWORDS.join(', ');

const defaultDescription =
  'Infinity Freight Forwarders Pvt. Ltd. (Infinity Forwarder) — air & ocean freight, customs clearance, import-export, land transport, and warehousing across India and worldwide. Offices in Delhi & Noida.';

export const SEO_DEFAULTS = {
  title: 'Infinity Freight Forwarders Pvt. Ltd. | Infinity Forwarder — Global Logistics',
  description: defaultDescription,
  keywords: keywordString,
};

const PAGE_SEO = {
  '/': {
    title: 'Infinity Forwarder | Infinity Freight Forwarders Pvt. Ltd. — Freight & Logistics India',
    description:
      'Infinity Freight Forwarders Pvt. Ltd. — trusted Infinity Forwarder for air freight, ocean freight (FCL/LCL), customs clearance, import-export, and door-to-door cargo from Delhi, Noida & worldwide.',
  },
  '/about': {
    title: 'About Infinity Freight Forwarders | Infinity Forwarder India',
    description:
      'Learn about Infinity Freight Forwarders Pvt. Ltd. — your Infinity Forwarder partner for reliable international logistics, customs compliance, and end-to-end freight solutions.',
  },
  '/services': {
    title: 'Freight & Logistics Services | Infinity Freight Forwarders',
    description:
      'Explore freight forwarding services by Infinity Forwarder: import-export, ocean & air freight, customs clearance, land transportation, and warehousing in India.',
  },
  '/contact': {
    title: 'Contact Infinity Forwarder | Get a Freight Quote — Delhi & Noida',
    description:
      'Contact Infinity Freight Forwarders Pvt. Ltd. for freight quotes and shipment support. Call, WhatsApp, or request a quotation — Delhi & Noida offices.',
  },
};

export function getPageSeo(pathname, { service } = {}) {
  if (service) {
    return {
      title: `${service.title} | Infinity Freight Forwarders — Infinity Forwarder`,
      description: `${service.summary} Infinity Freight Forwarders Pvt. Ltd. (Infinity Forwarder) — ${service.tagline}. Request a quote today.`,
      keywords: `${keywordString}, ${service.title.toLowerCase()}, ${service.slug.replace(/-/g, ' ')}`,
      path: pathname,
    };
  }

  const page = PAGE_SEO[pathname];
  if (page) {
    return { ...page, keywords: keywordString, path: pathname };
  }

  return {
    title: 'Page Not Found | Infinity Freight Forwarders',
    description: SEO_DEFAULTS.description,
    keywords: keywordString,
    path: pathname,
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    legalName: 'Infinity Freight Forwarders Pvt. Ltd.',
    alternateName: ['Infinity Forwarder', 'Infinity Freight Forwarders'],
    url: SITE_URL,
    logo: `${SITE_URL}${COMPANY.logoPath}`,
    description: COMPANY.description,
    email: COMPANY.emails[0],
    telephone: COMPANY.phones.map((p) => p.replace(/\s/g, '')),
    address: COMPANY.addresses.map((addr) => ({
      '@type': 'PostalAddress',
      name: addr.label,
      streetAddress: addr.lines[0],
      addressLocality: addr.label === 'Regd Office' ? 'Delhi' : 'Noida',
      addressRegion: addr.label === 'Regd Office' ? 'Delhi' : 'Uttar Pradesh',
      addressCountry: 'IN',
    })),
    areaServed: ['India', 'Worldwide'],
    sameAs: SOCIAL_LINKS.map((s) => s.url),
    knowsAbout: [
      'Freight forwarding',
      'Air freight',
      'Ocean freight',
      'Customs clearance',
      'Import and export',
      'Warehousing',
      'Logistics',
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Infinity Freight Forwarders Pvt. Ltd.',
    alternateName: 'Infinity Forwarder',
    url: SITE_URL,
    description: SEO_DEFAULTS.description,
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
  };
}

export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.details,
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
      alternateName: 'Infinity Forwarder',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    serviceType: service.title,
  };
}

export const SITEMAP_PATHS = [
  '/',
  '/about',
  '/services',
  '/contact',
  ...SERVICES.map((s) => `/services/${s.slug}`),
];
