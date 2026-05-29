import { SERVICES } from '../config/site';

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slug, limit = 3) {
  const current = getServiceBySlug(slug);
  if (!current) return SERVICES.slice(0, limit);
  const related = current.relatedSlugs
    ?.map((s) => getServiceBySlug(s))
    .filter(Boolean);
  if (related?.length) return related.slice(0, limit);
  return SERVICES.filter((s) => s.slug !== slug).slice(0, limit);
}
