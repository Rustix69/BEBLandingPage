import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FollowerPointerCardProps = {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
};

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: FollowerPointerCardProps) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const el = ref.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <AnimatePresence>
        {isVisible && title && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: position.y,
              left: position.x,
              transform: "translate(-50%, calc(-100% - 10px))",
              zIndex: 50,
            }}
            className="pointer-events-none"
          >
            <div className="px-4 py-2 rounded-lg text-xs whitespace-nowrap text-gray-800">
              {title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
