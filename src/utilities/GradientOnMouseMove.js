// set background gradient colors and angle using mouse
document.onmousemove = (e) => {
  const boxw = document.body.getBoundingClientRect().width;
  const boxh = document.body.getBoundingClientRect().height;
  const x = e.clientX - boxw / 2;
  const y = e.clientY - boxh / 2;
  const rad = Math.atan(y / x) + Math.PI * (x < 0 ? 1.5 : 0.5);
  const deg = (rad * 180) / Math.PI;
  document.body.style.backgroundImage =
    "linear-gradient(" +
    rad +
    "rad, hsl(" +
    deg +
    ",90%,30%), hsl(" +
    (deg + 120) +
    ",90%,30%))";
};
