const generateGradient = (time: number) => {
  const gradients: Record<string, number[][]> = {
    Dawn: [
      [196, 169, 233], // Blue
      [255, 192, 203], // Pink
      [255, 255, 153], // Yellow
    ],
    Rise: [
      [110, 182, 228], // Blue
      [199, 252, 254], // Light Blue
      [255, 168, 46], // Orange
    ],
    Noon: [
      [0, 191, 255], // Blue
      [255, 255, 255], // White
      [255, 255, 0], // Yellow
    ],
    Set: [
      [255, 153, 51], // Orange
      [255, 192, 203], // Pink
      [148, 0, 211], // Purple
    ],
    Dusk: [
      [255, 153, 51], // Orange
      [255, 192, 203], // Pink
      [70, 130, 180], // Blue
    ],
    Night: [
      [70, 130, 180], // Blue
      [25, 25, 112], // Dark blue
      [0, 0, 139], // Navy blue
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
    // console.log(time, r, g, b);
  });
  // console.log(interpolatedGradient);
  return "linear-gradient(152deg, rgba(110,182,228,1) 0%, rgba(199,252,254,1) 50%, rgba(255,240,136,1) 100%)";
  //  `linear-gradient(
  //   rgba(${output[0]},${output[1]},${output[2]},0.7),
  // rgba(${output[3]},${output[4]},${output[5]},0.7),
  //   rgba(${output[6]},${output[7]},${output[8]},0.7)`;
};

export default generateGradient;
