import "./Button.css";

export interface Props {
  text: string;
  textColor?: string;
  bgColor?: string;
}

export const Button = (props: Props) => {
  const { text, textColor, bgColor } = props;

  return (
    <div>
      <button
        style={{ color: textColor || "#000", background: bgColor || "#fefe" }}
      >
        {text}
      </button>
    </div>
  );
};
