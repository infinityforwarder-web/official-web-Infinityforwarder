import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getServiceBySlug } from '../utils/serviceHelpers';
import { getPageSeo, SEO_DEFAULTS, SITE_URL } from '../config/seo';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageSeo() {
  const { pathname } = useLocation();
  const serviceSlug = pathname.startsWith('/services/') ? pathname.split('/')[2] : null;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : null;

  useEffect(() => {
    const seo = getPageSeo(pathname, { service });
    const canonical = `${SITE_URL}${seo.path === '/' ? '' : seo.path}`;

    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords || SEO_DEFAULTS.keywords);
    upsertMeta('name', 'author', 'Infinity Freight Forwarders Pvt. Ltd.');
    upsertMeta('name', 'robots', 'index, follow');

    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', 'Infinity Freight Forwarders Pvt. Ltd.');
    upsertMeta('property', 'og:locale', 'en_IN');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);

    upsertLink('canonical', canonical);
  }, [pathname, service]);
}
