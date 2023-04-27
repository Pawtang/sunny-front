interface Coords {
  time: number;
  value: number;
}

interface CubicCurve {
  coefficients: number[];
  evaluate: (time: number) => number;
}

const interpolateRGB = (time: number) => {
  const rgbValues: number[][] = [
    [255, 15, 30],
    [90, 90, 155],
    [30, 40, 50],
    [50, 150, 50],
    [255, 255, 100],
    [255, 255, 255],
  ];

  const segmentSize: number = 240; // 1440 / 6 = 240
  const segmentIndex: number = Math.floor(time / segmentSize);
  const segmentStart: number = segmentIndex * segmentSize;
  const segmentEnd: number = (segmentIndex + 1) * segmentSize;

  const x1: number = segmentStart;
  const x2: number = segmentEnd;
  const y1: number[] = rgbValues[segmentIndex];
  const y2: number[] = rgbValues[segmentIndex + 1];

  const r: number = ((time - x1) * (y2[0] - y1[0])) / (x2 - x1) + y1[0];
  const g: number = ((time - x1) * (y2[1] - y1[1])) / (x2 - x1) + y1[1];
  const b: number = ((time - x1) * (y2[2] - y1[2])) / (x2 - x1) + y1[2];

  return [r, g, b];
};

export default interpolateRGB;
