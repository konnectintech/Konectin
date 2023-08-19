function AsideBar() {
  const size = 100,
    circleSize = size / 2,
    strokeCirce1 = "#555",
    strokeCirce2 = "#fff",
    circleFill = "transparent",
    strokeSize = 10,
    strokeCap = "round",
    progress = 70,
    rad = circleSize - strokeSize,
    strokeLen = 2 * Math.PI * rad,
    strokeLenoffset = strokeLen * ((100 - progress) / 100);

  return (
    <div>
      AsideBar<p></p>
    </div>
  );
}

export default AsideBar;
