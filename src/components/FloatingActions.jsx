import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { COMPANY } from '../config/site';

export default function FloatingActions() {
  useEffect(() => {
    if (window.innerWidth <= 768) return undefined;

    const buttons = document.querySelectorAll('.fab-action.magnetic');
    const handlers = [];

    buttons.forEach((btn) => {
      const onMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      const onLeave = () => {
        btn.style.transform = '';
        btn.style.transition = 'transform 0.4s ease';
      };
      const onEnter = () => {
        btn.style.transition = 'none';
      };
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      btn.addEventListener('mouseenter', onEnter);
      handlers.push({ btn, onMove, onLeave, onEnter });
    });

    return () => {
      handlers.forEach(({ btn, onMove, onLeave, onEnter }) => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
        btn.removeEventListener('mouseenter', onEnter);
      });
    };
  }, []);

  return createPortal(
    <div className="fab-stack" aria-label="Quick contact">
      <a
        href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
        className="fab-action fab-call magnetic"
        data-tooltip="Call Support"
        aria-label="Call support"
      >
        <i className="fa-solid fa-phone" />
      </a>
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-action fab-wa magnetic"
        data-tooltip="Chat on WhatsApp"
        aria-label="WhatsApp chat"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </div>,
    document.body
  );
}
