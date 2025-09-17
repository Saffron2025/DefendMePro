import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopWithHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove '#' and find element
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Normal route change → scroll top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
