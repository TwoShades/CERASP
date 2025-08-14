export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
      delayChildren: 0,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

// All animations after second line (“Versatile. Expert. Aware”) delayed +0.4s
export const whiteBoxVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 4.8, // was 4.4 → +0.4
    },
  },
};

export const colContainerVariants = {
  hidden: {},
  slideOut: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 5.2, // was 4.8 → +0.4
      ease: "easeInOut",
    },
  },
};

export const colVariants = {
  hidden: { y: 0, opacity: 1, transformOrigin: "bottom" },
  slideOut: {
    y: "100vw",
    opacity: 0,
    scaleY: 0.8,
    scaleX: 0.8,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const contactIconVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 3.8, // was 3.4 → +0.4
    },
  },
};

export const gradientVariants = {
  visible: { opacity: 1 },
  fadeOut: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 5.2, // was 4.8 → +0.4
    },
  },
};

export const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      delay: 5.6, // was 5.2 → +0.4
    },
  },
};

export const overlaySlideVariants = {
  visible: {
    x: 0,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 10000,
    backgroundColor: "transparent",
  },
  slideOut: {
    x: "-100vw",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 5.2, // was 4.8 → +0.4
    },
  },
};
