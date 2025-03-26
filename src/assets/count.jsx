import { useState } from "react";
const Count = () => {

  const [count, setCount] = useState(0);

  const HandleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const CountStyle = {
    border: "2px solid white",
  };

  return (
    <div style={CountStyle}>
      <h2> count: {count}</h2>
      <button onClick={HandleAdd}> Add</button>
    </div>
  );
};

export default Count;
