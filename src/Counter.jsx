const Counter = (props) => {
  return (
    <div>
      <p>counter: {props.counterP}</p>
      <button onClick={props.clickHandler}>+</button>
      <button onClick={props.deacreaser}>-</button>
      <button onClick={props.zero}>0</button>
    </div>
  );
};
export default Counter;
