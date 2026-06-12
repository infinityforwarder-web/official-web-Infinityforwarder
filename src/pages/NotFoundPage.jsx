import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PageBanner from '../components/PageBanner';

export default function NotFoundPage() {
  return (
    <>
      <PageBanner
        title="Page not found"
        subtitle="The page you are looking for does not exist or may have moved."
        image="/images/banners/services.jpg"
      />
      <section className="section-padding pt-0">
        <Container className="text-center reveal-up">
          <p className="text-muted mb-4">
            Check the URL or return to the homepage to continue browsing our services.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/" className="btn btn-glow">
              Back to Home
            </Link>
            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
