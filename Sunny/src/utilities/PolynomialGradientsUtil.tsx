const generateGradient = (time: number) => {
  const gradients: Record<string, number[][]> = {
    Dawn: [
      [255, 180, 162],
      [242, 221, 221],
      [166, 223, 243],
    ],
    Rise: [
      [166, 223, 243],
      [242, 221, 221],
      [255, 180, 162],
    ],
    Noon: [
      [255, 180, 162],
      [242, 221, 221],
      [166, 223, 243],
    ],
    Set: [
      [166, 223, 243],
      [242, 221, 221],
      [255, 180, 162],
    ],
    Dusk: [
      [255, 180, 162],
      [242, 221, 221],
      [166, 223, 243],
    ],
    Night: [
      [166, 223, 243],
      [0, 0, 64],
      [0, 0, 0],
    ],
  };

  const keys = Object.keys(gradients);
  const index = (time / 24) * keys.length;
  const startIndex = Math.floor(index) % keys.length;
  const endIndex = (startIndex + 1) % keys.length;

  const startGradient = gradients[keys[startIndex]];
  const endGradient = gradients[keys[endIndex]];

  const t = index - startIndex;
  const cubic = (a: number, b: number, c: number, d: number) => (t: number) => {
    return a + b * t + c * t * t + d * t * t * t;
  };

  const interpolatedGradient = startGradient.map((startValues, i) => {
    const endValues = endGradient[i];
    const [r1, g1, b1] = startValues;
    const [r2, g2, b2] = endValues;
    const r = cubic(r1, r2 - r1, 0, 0)(t);
    const g = cubic(g1, g2 - g1, 0, 0)(t);
    const b = cubic(b1, b2 - b1, 0, 0)(t);
    return `linear-gradient(rgba)`;
    // return [r, g, b];
  });

  return interpolatedGradient;
};

export default generateGradient;
