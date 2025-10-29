// src/components/SmoothScrollLink.jsx

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSmoothScrolling } from "../providers/SmoothScrollProvider";
import { useEffect, useRef } from "react";

const SmoothScrollLink = ({ to, children, className, onClick, ...props }) => {
  const { scrollTo } = useSmoothScrolling();
  const location = useLocation();
  const navigate = useNavigate();
  const pendingScrollRef = useRef(null);

  // Handle pending scroll after navigation
  useEffect(() => {
    if (pendingScrollRef.current) {
      const targetId = pendingScrollRef.current;

      // Wait for DOM to be ready
      const scrollTimeout = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          // Extra delay to ensure page is fully rendered
          requestAnimationFrame(() => {
            setTimeout(() => {
              scrollTo(element);
              pendingScrollRef.current = null;
            }, 100);
          });
        }
      }, 300);

      return () => clearTimeout(scrollTimeout);
    }
  }, [location.pathname, scrollTo]);

  const handleClick = (e) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Handle hash links
    if (to.includes("#")) {
      e.preventDefault();

      const [path, hash] = to.split("#");
      const targetId = hash;
      const currentPath = location.pathname;

      // Same page scrolling
      if (currentPath === path || path === "") {
        const element = document.getElementById(targetId);
        if (element) {
          scrollTo(element);
        }
      }
      // Different page - navigate then scroll
      else {
        pendingScrollRef.current = targetId;
        navigate(path);
      }
    }
  };

  // Handle home link (/) scrolling to top
  const isHomeLinkToTop = to === "/" || to === "/#";

  useEffect(() => {
    if (isHomeLinkToTop && location.pathname === "/") {
      // Optionally scroll to top when on home page
    }
  }, [isHomeLinkToTop, location.pathname]);

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;