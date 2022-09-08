interface Step {
    name:string
}
function Step({name}:Step) {
  return <li className="circle">{name}</li>;
}

export default Step;
