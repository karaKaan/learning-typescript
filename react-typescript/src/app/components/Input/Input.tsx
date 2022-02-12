import "./Input.css"

export interface Props {
  label: string;
  inputType?: string;
}

export default function Input(props: Props) {
  const { label, inputType } = props;
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input type={inputType || "text"} />
    </div>
  );
}
