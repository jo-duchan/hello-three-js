import { Html } from "@react-three/drei";

interface Props {
  label?: string;
}

function Label({ label }: Props) {
  const labelStyled = {
    color: "#eee",
    userSelect: "none" as const,
    fontSize: "7px",
    paddingTop: "24px",
  };

  if (!label) {
    null;
  }

  return (
    <Html key={label} center>
      <h6 style={{ ...labelStyled }}>{label}</h6>
    </Html>
  );
}

export default Label;
