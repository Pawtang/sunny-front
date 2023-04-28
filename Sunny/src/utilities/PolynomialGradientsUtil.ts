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

  const output: string[] = [];

  const interpolatedGradient = startGradient.map((startValues, i) => {
    const endValues = endGradient[i];
    const [r1, g1, b1] = startValues;
    const [r2, g2, b2] = endValues;
    const r = cubic(r1, r2 - r1, 0, 0)(t);
    const g = cubic(g1, g2 - g1, 0, 0)(t);
    const b = cubic(b1, b2 - b1, 0, 0)(t);
    output.push(r.toString());
    output.push(g.toString());
    output.push(b.toString());
  });
  // console.log(interpolatedGradient);
  return `linear-gradient(
    rgba(${output[0]},${output[1]},${output[2]},0.7),
  rgba(${output[3]},${output[4]},${output[5]},0.7),
    rgba(${output[6]},${output[7]},${output[8]},0.7)`;
};

export default generateGradient;
