import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

export const Reveal4 = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true });
  width = width ? "fit=content" : "100%";

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
    }
  }, [isinView]);
  return (
    <div ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        inital="hidden"
        animate={slideControls}
        transition={{ duration: 1.75, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
        }}
      />
    </div>
  );
};
