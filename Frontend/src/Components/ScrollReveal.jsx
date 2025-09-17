import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, direction = "up" }) {
  const variants = {
  hidden: {
    opacity: 0,
    y: 60, // neeche se start
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      type: "spring",   // ✅ spring motion
      stiffness: 120,   // jump ki force
    },
  },
};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // 20% visible trigger
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
