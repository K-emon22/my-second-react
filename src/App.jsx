import "./App.css";
import Runs from "./assets/Bangladesh";
import Count from "./assets/count";

function App() {
const HandleButton=()=>{
alert('react is not moja')
}

const HandleButton2=(num,mum)=>{
const newNumber=num+5+mum
  alert(newNumber)
}

  return (
    <>
      <h3>Vite + React</h3>
      <Count></Count>
      <Runs></Runs>

      <button onClick={HandleButton} style={{fontWeight:'bolder',color:'red', fontSize:'20px'}}> Clicked </button>

      <button onClick={()=>{HandleButton2(30,40)}} style={{fontWeight:'bolder',color:'blue', fontSize:'20px'}}> Clicked </button>
    </>
  );
}

export default App;
