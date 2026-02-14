// Custom Animated Cursor Component
import { useState, useEffect } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
    const [cursorState, setCursorState] = useState('default'); // default, button, link, card
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile/tablet
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Don't initialize cursor on mobile
        if (window.innerWidth < 1024) {
            return () => window.removeEventListener('resize', checkMobile);
        }

        // Performance optimization: use RAF for smooth animations
        let rafId;
        let targetX = 0;
        let targetY = 0;

        // Update cursor position with RAF for smooth 60fps
        const updatePosition = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;

            // Dot follows immediately
            setDotPosition({ x: targetX, y: targetY });

            if (!isVisible) setIsVisible(true);

            // Cancel previous RAF
            if (rafId) cancelAnimationFrame(rafId);

            // Smooth trailing for ring
            rafId = requestAnimationFrame(() => {
                setPosition({ x: targetX, y: targetY });
            });
        };

        // Handle hover states
        const handleMouseOver = (e) => {
            const target = e.target;

            if (target.tagName === 'BUTTON' || target.closest('button')) {
                setCursorState('button');
            } else if (target.tagName === 'A' || target.closest('a')) {
                setCursorState('link');
            } else if (target.classList.contains('glass-card') || target.closest('.glass-card')) {
                setCursorState('card');
            } else {
                setCursorState('default');
            }
        };

        const handleMouseOut = () => {
            setCursorState('default');
        };

        // Hide default cursor
        document.body.style.cursor = 'none';

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', checkMobile);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    // Don't render cursor on mobile
    if (isMobile || !isVisible) return null;

    return (
        <>
            {/* Outer Ring with Delay */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference transition-all duration-200 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${cursorState === 'button' ? 1.5 : cursorState === 'card' ? 1.3 : 1})`,
                    pointerEvents: 'none',
                }}
            >
                <div
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 pointer-events-none ${cursorState === 'button'
                        ? 'border-[#ff6b35] shadow-[0_0_20px_rgba(255,107,53,0.8)]'
                        : cursorState === 'link'
                            ? 'border-[#ff8c42] shadow-[0_0_15px_rgba(255,140,66,0.6)]'
                            : cursorState === 'card'
                                ? 'border-[#ff6b35] shadow-[0_0_15px_rgba(255,107,53,0.6)]'
                                : 'border-[#ff6b35]/50 shadow-[0_0_10px_rgba(255,107,53,0.4)]'
                        }`}
                    style={{ pointerEvents: 'none' }}
                ></div>
            </div>

            {/* Inner Dot */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-100 ease-out"
                style={{
                    left: `${dotPosition.x}px`,
                    top: `${dotPosition.y}px`,
                    transform: `translate(-50%, -50%) scale(${cursorState !== 'default' ? 0.5 : 1})`,
                    pointerEvents: 'none',
                }}
            >
                <div
                    className={`w-2 h-2 rounded-full transition-all duration-200 pointer-events-none ${cursorState === 'button'
                        ? 'bg-[#ff6b35] shadow-[0_0_15px_rgba(255,107,53,1)]'
                        : cursorState === 'link'
                            ? 'bg-[#ff8c42] shadow-[0_0_12px_rgba(255,140,66,0.8)]'
                            : 'bg-[#ff6b35] shadow-[0_0_10px_rgba(255,107,53,0.8)]'
                        }`}
                    style={{ pointerEvents: 'none' }}
                ></div>
            </div>

            {/* Icon/State Indicator */}
            {cursorState === 'button' && (
                <div
                    className="fixed top-0 left-0 pointer-events-none z-[99999] transition-all duration-200"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y - 25}px`,
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none',
                    }}
                >
                    <div className="text-xs text-[#ff6b35] font-bold animate-bounce pointer-events-none" style={{ pointerEvents: 'none' }}>👆</div>
                </div>
            )}

            {cursorState === 'link' && (
                <div
                    className="fixed top-0 left-0 pointer-events-none z-[99999] transition-all duration-200"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y + 20}px`,
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none',
                    }}
                >
                    <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent pointer-events-none" style={{ pointerEvents: 'none' }}></div>
                </div>
            )}

            {cursorState === 'card' && (
                <div
                    className="fixed top-0 left-0 pointer-events-none z-[99999] transition-all duration-200"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                    }}
                >
                    <div className="text-[#ff6b35] font-mono text-xs opacity-50 pointer-events-none" style={{ pointerEvents: 'none' }}>{'{}'}</div>
                </div>
            )}

            {/* Hide default cursor on all elements */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        a, button, input, textarea, select {
          cursor: none !important;
        }

        /* Ensure cursor elements never block interactions */
        [class*="fixed"][class*="pointer-events-none"] * {
          pointer-events: none !important;
        }

        /* Mobile - Show default cursor */
        @media (max-width: 1024px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
