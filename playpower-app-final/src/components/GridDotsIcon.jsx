// 3x3 dot grid icon used for "Show all photos" and the lightbox "back to grid" control.
export default function GridDotsIcon({ size = 16 }) {
  const dots = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      dots.push(<rect key={`${r}-${c}`} x={1 + c * 5} y={1 + r * 5} width="3" height="3" rx="0.8" />);
    }
  }
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
      {dots}
    </svg>
  );
}
