export const slideUp = {
  initial: {
    y: 300,
    opacity: 0.98,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

export const appear = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 3, ease: [0.33, 1, 0.68, 1], delay: 2 },
  },
};

export const slideLeft = {
  initial: {
    x: 300,
    opacity: 0.98,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};
