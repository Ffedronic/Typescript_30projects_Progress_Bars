interface Button {
  id: string;
  name: string;
  disabled?: boolean;
}
function Button({ id, name, disabled }: Button) {
  if (disabled) {
    return (
      <button className="btn" id={id} disabled>
        {name}
      </button>
    );
  }
  return (
    <button className="btn" id={id}>
      {name}
    </button>
  );
}

export default Button;
