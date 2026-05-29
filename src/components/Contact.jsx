import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { COMPANY } from '../config/site';

const importCategories = [
  'Air Freight',
  'Ocean Freight (FCL/LCL)',
  'Customs Clearance',
  'Import / Export',
  'Land Transportation',
  'Warehousing',
  'Other',
];

const initialForm = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  service: '',
  serviceOther: '',
  message: '',
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAIL_RECIPIENTS = (import.meta.env.VITE_EMAILJS_TO_EMAIL || COMPANY.emails.join(','))
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);

export default function Contact({ standalone = false }) {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: '',
  });

  const isOtherService = form.service === 'Other';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.phone.trim() || !form.service) {
      setSubmitState({
        status: 'error',
        message: 'Please fill in phone and service.',
      });
      return;
    }

    if (isOtherService && !form.serviceOther.trim()) {
      setSubmitState({
        status: 'error',
        message: 'Please describe the service you need.',
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitState({
        status: 'error',
        message:
          'Email service is not configured yet. Please add EmailJS details in the environment file.',
      });
      return;
    }

    setSubmitState({
      status: 'loading',
      message: 'Sending your enquiry...',
    });

    const serviceLabel = isOtherService ? `Other — ${form.serviceOther.trim()}` : form.service;

    const templateParams = {
      company_email_1: COMPANY.emails[0],
      company_email_2: COMPANY.emails[1],
      company_email_3: COMPANY.emails[2],
      name: form.fullName.trim() || 'Website Visitor',
      email: form.email.trim() || COMPANY.emails[0],
      from_name: form.fullName.trim() || 'Website Visitor',
      full_name: form.fullName.trim(),
      company_name: form.companyName.trim() || '—',
      reply_to: form.email.trim() || COMPANY.emails[0],
      from_email: form.email.trim() || '—',
      phone: form.phone,
      service_required: serviceLabel,
      service_other: form.serviceOther.trim(),
      message: form.message,
      submitted_at: new Date().toLocaleString(),
    };

    try {
      await Promise.all(
        EMAIL_RECIPIENTS.map((toEmail) =>
          emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              ...templateParams,
              to_email: toEmail,
            },
            EMAILJS_PUBLIC_KEY
          )
        )
      );

      setForm(initialForm);
      setSubmitState({
        status: 'success',
        message: 'Thank you! Your enquiry has been sent successfully.',
      });
    } catch (error) {
      const detail = error?.text || error?.message;
      console.error('EmailJS send failed:', error);
      setSubmitState({
        status: 'error',
        message: import.meta.env.DEV && detail
          ? `Could not send enquiry: ${detail}`
          : 'Sorry, we could not send your enquiry right now. Please call or WhatsApp us.',
      });
    }
  };

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const RequiredMark = () => (
    <span className="required-mark" aria-hidden="true">
      *
    </span>
  );

  return (
    <section className={standalone ? 'section-padding' : 'section-padding'} id="contact">
      <Container>
        <Row className="contact-wrapper reveal-up g-0">
          <Col lg={5} className="company-info order-2 order-lg-1">
            <h2 className="contact-title">{COMPANY.shortName}</h2>
            <p className="text-muted mb-4">{COMPANY.description}</p>
            {COMPANY.addresses.map((addr) => (
              <div key={addr.label} className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="info-text">
                  <h4>{addr.label}</h4>
                  <p>
                    {addr.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
            <div className="info-item">
              <div className="info-icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>
                  {COMPANY.phones.map((p) => (
                    <span key={p} className="d-block">
                      <a href={`tel:${p.replace(/\s/g, '')}`} className="contact-email-link">
                        {p}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fa-brands fa-whatsapp" />
              </div>
              <div className="info-text">
                <h4>WhatsApp</h4>
                <p>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    className="contact-email-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {COMPANY.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>
                  {COMPANY.emails.map((e) => (
                    <span key={e} className="d-block mb-1">
                      <a href={`mailto:${e}`} className="contact-email-link">
                        {e}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={7} className="form-panel order-1 order-lg-2">
            <h3 className="form-heading">Request a Quotation</h3>
            <Form onSubmit={handleSubmit} noValidate>
              <Row className="g-4">
                <Col xs={12}>
                  <Form.Group className="input-group-custom">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={form.fullName}
                      onChange={update('fullName')}
                      placeholder="Your full name"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="input-group-custom">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={form.companyName}
                      onChange={update('companyName')}
                      placeholder="Company or business name"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="input-group-custom">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="input-group-custom">
                    <Form.Label>
                      Phone <RequiredMark />
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+91 XXXXXXXXXX"
                      autoComplete="tel"
                      required
                      aria-required="true"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="input-group-custom">
                    <Form.Label>
                      Service Required <RequiredMark />
                    </Form.Label>
                    <Form.Select
                      value={form.service}
                      onChange={update('service')}
                      required
                      aria-required="true"
                    >
                      <option value="">Select service...</option>
                      {importCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                {isOtherService && (
                  <Col xs={12}>
                    <Form.Group className="input-group-custom">
                      <Form.Label>
                        Please specify service <RequiredMark />
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={form.serviceOther}
                        onChange={update('serviceOther')}
                        placeholder="Describe the service you need"
                        required
                      />
                    </Form.Group>
                  </Col>
                )}
                <Col xs={12}>
                  <Form.Group className="input-group-custom">
                    <Form.Label>Message / Product Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Origin, destination, product type, volume..."
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <button
                    type="submit"
                    className="btn btn-glow magnetic w-100 py-3"
                    disabled={submitState.status === 'loading'}
                  >
                    {submitState.status === 'loading' ? (
                      <>
                        Sending... <i className="fa-solid fa-spinner fa-spin ms-2" />
                      </>
                    ) : (
                      <>
                        Submit Enquiry <i className="fa-solid fa-paper-plane ms-2" />
                      </>
                    )}
                  </button>
                </Col>
                {submitState.message && (
                  <Col xs={12}>
                    <div className={`form-status form-status-${submitState.status}`}>
                      {submitState.message}
                    </div>
                  </Col>
                )}
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
