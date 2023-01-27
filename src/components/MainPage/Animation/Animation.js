const featureAnimation = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: () => ({
    y: 0,
    opacity: 1,
  }),
};

export default featureAnimation;
