import { useRef, useState } from "react";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 107, 53, 0.35)", ...rest }) => {
  const divRef = useRef(null);
  const overlayRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || !overlayRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlayRef.current.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, ${spotlightColor}, transparent 100%)`;
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.8);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.8);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          // Background is set via direct DOM manipulation in handleMouseMove
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;