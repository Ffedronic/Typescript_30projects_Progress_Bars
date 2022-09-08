import { MouseEventHandler } from "react";

interface Button {
  id: string;
  name: string;
  disabled?: boolean;
  clickHandler?: MouseEventHandler<HTMLButtonElement>
}

function Button({ id, name, disabled, clickHandler }: Button) {

  if (disabled) {
    return (
      <button onClick={clickHandler} className="btn" id={id} disabled>
        {name}
      </button>
    );
  }
  return (
    <button onClick={clickHandler} className="btn" id={id}>
      {name}
    </button>
  );
}

export default Button;
