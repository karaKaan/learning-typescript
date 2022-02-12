import { MouseEventHandler } from "react";
import "./Todo.css";

export interface Props {
  task: string;
  description?: string;
  deadline?: string;
  click?: MouseEventHandler<HTMLParagraphElement>
}

export default function Todo(props: Props) {
  const { task, description, deadline } = props;
  return (
    <div className="wrapper">
      <div className="title-wrapper">
        <p className="task">
          {task} - {deadline}{" "}
        </p>
        <p className="close" onClick={props.click}>x</p>
      </div>

      <p className="description">{description}</p>
    </div>
  );
}
