import "./Button.css";

export interface Props {
  text: string;
  textColor?: string;
  bgColor?: string;
  click?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: Props) => {
  const { text, textColor, bgColor } = props;

  return (
    <div>
      <button
        style={{ color: textColor || "#000", background: bgColor || "#fefe" }}
        onClick={props.click}
      >
        {text}
      </button>
    </div>
  );
};
