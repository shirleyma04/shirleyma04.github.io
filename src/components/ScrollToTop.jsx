import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0);

      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }

      if (document.body) {
        document.body.scrollTop = 0;
      }

      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.scrollTop = 0;
      }
    };

    scrollToTop();

    requestAnimationFrame(() => {
      scrollToTop();

      setTimeout(scrollToTop, 0);
      setTimeout(scrollToTop, 50);
      setTimeout(scrollToTop, 200);
    });
  }, [pathname]);

  return null;
}
