const BackgroundGradient = (time: number) => {
  return `linear-gradient(
    rgba(${-0.072 * time ** 3 + 1.9358 * time ** 2 - 11.634 * time + 195.99},${
    -0.0604 * time ** 3 + 1.7135 * time ** 2 - 13.753 * time + 233.93
  },
  ${-0.0403 * time ** 3 + 1.0215 * time ** 2 - 6.226 * time + 255.41}, 0.7),

    rgba(254,${
      0.0026 * time ** 3 - 0.2412 * time ** 2 + 1.1233 * time + 205.24
    },${0.0291 * time ** 3 - 0.8624 * time ** 2 + 0.0806 * time + 215.97}, 0.7),

    rgba(
      ${-0.0353 * time ** 3 + 0.2499 * time ** 2 + 10.27 * time + 127.23},
      ${-0.0402 * time ** 3 + 0.5064 * time ** 2 + 6.4383 * time + 139}, 
  ${-0.1252 * time ** 3 + 4.1984 * time ** 2 - 36.168 * time + 240.68}, 0.7))`;
};

export default BackgroundGradient;
