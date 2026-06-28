import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import MobileHeader from '../MobileHeader';
import Footer from '../Footer';
import MobileBottomNav from '../MobileBottomNav';
import FloatingActions from '../FloatingActions';
import ScrollToTop from '../ScrollToTop';
import SkipLink from '../SkipLink';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageSeo } from '../../hooks/usePageSeo';
import StructuredData from '../StructuredData';

export default function Layout() {
  const { pathname } = useLocation();
  useScrollReveal([pathname]);
  usePageSeo();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <StructuredData />
      <SkipLink />
      <Header />
      <MobileHeader />
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <FloatingActions />
      <ScrollToTop />
    </>
  );
}
