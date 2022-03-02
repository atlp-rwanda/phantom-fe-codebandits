export const Sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms || 2000);
  });
};

export default Sleep;
