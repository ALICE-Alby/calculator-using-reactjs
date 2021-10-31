import {useState} from 'react';
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '+', '-', '.','%'];

  const updateCalc = value =>{
    if(
      ops.includes(value) && calc==='' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }

  }
  const createDigits =() =>{
     const digits=[];

     for (let i=1;i<10;i++){
       digits.push(
       <button onClick={() => updateCalc(i.toString())} 
       key={i}>{i}
       </button>)
     }
     return digits;
  }
  const deleteButton =() =>{
    if(calc ==''){
      return;
    }
    const value =calc.slice(0, -1);
    setCalc(value);
  }
  const percent = () => {
    setResult(String(parseFloat(result) / 100 ));
  }
  return (
    <div className="myApp">
     <div className="calculator">
       <div className="display">
         {result ? <span>({result})</span>:'' }&nbsp;
        {calc || "0"}  

       </div>
       <div className="operator">
         <button id="clr" onClick={() => setCalc("") || setResult("")}>AC</button>

         <button onClick={() => updateCalc('/')}>/</button>
         <button onClick={() => updateCalc('*')}>*</button>
         <button onClick={() => updateCalc('+')}>+</button>
         <button onClick={() => updateCalc('-')}>-</button>
         <button onClick={percent}>%</button>

       </div>
       <div className="digits">
         {createDigits()}
       <button onClick={() => updateCalc('0')}>0</button>
       <button onClick={() => updateCalc('.')}>.</button>
       <button id="del" onClick={deleteButton}>Del</button>
       </div>
     </div>

    </div>
  );
}

export default App;
