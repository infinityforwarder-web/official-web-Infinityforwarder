import { useLocation } from 'react-router-dom';
import { getServiceBySlug } from '../utils/serviceHelpers';
import {
  getOrganizationSchema,
  getServiceSchema,
  getWebSiteSchema,
} from '../config/seo';

export default function StructuredData() {
  const { pathname } = useLocation();
  const serviceSlug = pathname.startsWith('/services/') ? pathname.split('/')[2] : null;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : null;

  const schemas = [getOrganizationSchema(), getWebSiteSchema()];
  if (service) schemas.push(getServiceSchema(service));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) }}
    />
  );
}
