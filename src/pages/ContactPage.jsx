import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import ContactHighlights from '../components/ContactHighlights';
import AnimatedStrip from '../components/AnimatedStrip';
import { PAGE_HEROES } from '../config/site';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge="Contact"
        title="Connect With Our Experts"
        subtitle="Request a quotation, ask about a shipment, or speak with our team—we respond quickly."
        image={PAGE_HEROES.contact}
      />
      <AnimatedStrip />
      <Contact standalone />
      <ContactHighlights />
    </>
  );
}
