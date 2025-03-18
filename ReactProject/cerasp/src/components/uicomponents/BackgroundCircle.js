import "./css/BackgroundCircle.css";

export default function BackgroundCircle({
  top = 50,
  left = 50,
  size = 200,
  color = "173, 216, 230",
  scrollProgress,
}) {
  const dynamicColor = `rgba(${color}, 0.9)`;

  const sizeChange = 1 + scrollProgress * 0.05;

  return (
    <div
      className="bg-circle"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size * sizeChange}px`,
        height: `${size * sizeChange}px`,
        backgroundColor: dynamicColor,
        transform: `scale(${sizeChange})`,
      }}
    />
  );
}
