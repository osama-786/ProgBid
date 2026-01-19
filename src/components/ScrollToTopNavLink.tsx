// src/components/ScrollToTopNavLink.tsx
import React, { useLayoutEffect } from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";

interface ScrollToTopNavLinkProps extends NavLinkProps {
  children: React.ReactNode;
  /**
   * Extra delay after layout (useful if your page mounts heavy content).
   * Default 0. Try 20–50ms if content loads slowly.
   */
  waitMs?: number;
}

function ScrollToTopNavLink({
  children,
  onClick,
  waitMs = 20,
  ...rest
}: ScrollToTopNavLinkProps) {
  const location = useLocation();

  /* -------------------------
     1. SCROLL ON NAVLINK CLICK
     ------------------------- */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow dev's custom click handler
    onClick?.(e as any);

    // Scroll immediately for snappy feel
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------------------------------------------
     2. GLOBAL SCROLL ON ROUTE CHANGE (RELIABLE)
     using useLayoutEffect ensures the scroll
     happens BEFORE browser paint → fixes first click
     -------------------------------------------- */
  useLayoutEffect(() => {
    const { hash } = location;

    const doScroll = () => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Wait for layout but run before paint
    const raf = requestAnimationFrame(() => {
      if (waitMs > 20) {
        setTimeout(doScroll, waitMs);
      } else {
        doScroll();
      }
    });

    return () => cancelAnimationFrame(raf);

  }, [location.pathname, location.hash, waitMs]);

  return (
    <NavLink
      {...rest}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
}
export default ScrollToTopNavLink;