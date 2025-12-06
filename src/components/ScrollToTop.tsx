import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
    const selectors = ['#root', '#app', 'main', '.app-root'];
    selectors.forEach((sel) => {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el && typeof (el as Element).scrollTo === 'function') {
        try {
          (el as Element).scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } catch {
          el.scrollTop = 0;
        }
      }
    });

    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;