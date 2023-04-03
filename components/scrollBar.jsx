import React, { useState, useEffect } from "react";

function ScrollBar({ element }) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (element.current) {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight - 280;
        const documentHeight = element.current.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        const scrollPercentage = scrollTop / maxScroll;
        const maxBarWidth = 100;
        const newBarWidth = maxBarWidth * scrollPercentage;
        setBarWidth(newBarWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bar-container">
      <div className="bar" style={{ width: `${barWidth}%` }}></div>
    </div>
  );
}

export default ScrollBar;
