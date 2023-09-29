export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const textSlideUp = {
  initial: {
    y: "100%",
  },
  open: (i: any) => ({
    y: "0%",
    transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1], delay: 0.01 * i },
  }),
  closed: {
    // y: "100%",
    opacity: 0.25,
    transition: { duration: 0.6 },
  },
};
