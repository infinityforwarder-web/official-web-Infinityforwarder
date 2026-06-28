import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { COMPANY, SERVICES } from '../config/site';

const VIDEO_SRC = '/videos/hero-logistics.mp4';
const POSTER_SRC = '/images/hero-poster.jpg';

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onCanPlay = () => setVideoReady(true);

    const play = () => {
      if (prefersReduced) {
        video.pause();
        return;
      }
      video.play().catch(() => {});
    };

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('loadeddata', play);

    if (video.readyState >= 2) onCanPlay();
    if (!prefersReduced) play();

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('loadeddata', play);
    };
  }, []);

  return (
    <section className="hero hero-video" id="home">
      <video
        ref={videoRef}
        className={`hero-video-bg ${videoReady ? 'is-ready' : ''}`}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        poster={POSTER_SRC}
        aria-hidden
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden />
      <div className="hero-blob-1" aria-hidden />
      <div className="hero-blob-2" aria-hidden />
      <Container>
        <div className="hero-content reveal-up active">
          <div className="hero-badge">
            <span /> Active Global Network
          </div>
          <h1>
            <span className="visually-hidden">{COMPANY.name} — </span>
            <span className="gradient-text">{COMPANY.tagline}</span>
          </h1>
          <p className="hero-description">{COMPANY.description}</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-glow magnetic">
              Get a Quotation <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link to="/services" className="btn btn-outline magnetic">
              Our Services
            </Link>
          </div>
          <div className="hero-service-strip" aria-hidden>
            {SERVICES.map((s) => (
              <span key={s.slug} className="hero-service-pill">
                <i className={`fa-solid ${s.icon}`} style={{ color: s.color }} />
                <span className="hero-service-pill-label">
                  {s.title.replace(' Services', '').replace(' Service', '')}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
