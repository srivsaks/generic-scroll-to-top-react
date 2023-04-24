import React, { useEffect, useState } from "react";

export const ScrollToTop = React.forwardRef(({ className, top = 20 }) => {
  const [visible, setVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop > top);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${className}`}>
      {visible && (
        <button
          onClick={() => {
            scrollTop();
          }}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
});
