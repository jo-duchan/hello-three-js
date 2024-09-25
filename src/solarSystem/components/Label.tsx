import { Html } from "@react-three/drei";

interface Props {
  label?: string;
  radius?: number;
}

function Label({ label, radius = 0 }: Props) {
  const wrapperStyled = {
    display: "flex",
    justifyContent: "center",
    transform: "translateX(-50%)",
    width: "max-content",
  };

  const labelStyled = {
    color: "#eee",
    userSelect: "none" as const,
    fontSize: "7px",
    textAlign: "center" as const,
  };

  if (!label) {
    null;
  }

  return (
    <Html
      key={label}
      position={[0, -radius - 0.5, 0]}
      style={{ ...wrapperStyled }}
    >
      <h6 style={{ ...labelStyled }}>{label}</h6>
    </Html>
  );
}

export default Label;
