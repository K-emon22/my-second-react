import {useState} from "react";

const Runs = () => {
  let [runs, setRuns] = useState(0);
  let [six , setSixes] =useState(0)
  let [four , setFours] =useState(0)

  const handleOne = () => {
    const updateRun = runs + 1;
    setRuns(updateRun);
  };
  const handleFour = () => {

    const updateRun = runs + 4;
    const TotalFour=four+1
    setFours(TotalFour)
    setRuns(updateRun);
  };
  const handleSix = () => {
    const TotalSix=six+1
    setSixes(TotalSix)
    const updateRun = runs + 6;
    setRuns(updateRun);
  };
  const handleTwo = () => {
    const updateRun = runs + 2;
    setRuns(updateRun);
  };

  return (
    <div>
      <h2> Bangladesh batsman</h2>
      <h1> Run:{runs} , Total Six: {six}, Total Four: {four} </h1>
      <button onClick={handleOne}> Single run </button>
      <button onClick={handleFour}> Four run </button>
      <button onClick={handleSix}> Six run </button> 
      <button onClick={handleTwo}> Two run </button>
    </div>
  );
};

export default Runs;
