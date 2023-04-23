import {  useState } from 'react';
import { NumberKey } from './model';

const App = () => {

 const [data] = useState<NumberKey[]> ([
      {id:1, numberKey:7},
      {id:2, numberKey:8},
      {id:3, numberKey:9}, 
      {id:4, numberKey:'DEL'},
      {id:5, numberKey:4},
      {id:6, numberKey:5},
      {id:7, numberKey:6},
      {id:8, numberKey:'+'},
      {id:9, numberKey:1},
      {id:10, numberKey:2},
      {id:11, numberKey:3},
      {id:12, numberKey:'-'},
      {id:13, numberKey:'.'},
      {id:14, numberKey:0},
      {id:15, numberKey:'/'},
      {id:16, numberKey:'*'},
])
const [sign, setSign] = useState<string | number>(0)
const [selectedNumbers, setSelectedNumbers] = useState<any>([]);
const [selectedNumbersSecond, setSelectedNumbersSecond] = useState<any>([]);
const [enter, setEnter] = useState<boolean>(true)
const [signBool, setSignBool] = useState<boolean>(false)
// const [result, setResult] = useState<string>('')


/**
 * 
 * @param number 
 */
  const handleNumberSelect = (number:number) => {
if(signBool)
setSelectedNumbersSecond([...selectedNumbersSecond, !number ? '' : number  ])
else
setSelectedNumbers([...selectedNumbers, !number ? '' : number  ])

};

 const calculNumber = (e:any)=>{
    setSign(e.target.dataset.id)
console.log(Number(selectedNumbers.join('')));

    handleNumberSelect(Number(e.target.dataset.id));
    switch(sign){
      case '+':    
        setSignBool(true);
        console.log(` le ${sign} a été séléctionner du le calcul  ${Number(selectedNumbersSecond.join('')) + Number(selectedNumbersSecond.join(''))}`);
        break;
        case '-':
          setSignBool(true);
        console.log(` le ${sign} a été séléctionner`);
        break;
        case '*':
          setSignBool(true);
        console.log(` le ${sign} a été séléctionner`);
        break;
        case '/':
          setSignBool(true);
       console.log(` le ${sign} a été séléctionner`);
        break;
    }
   
   
}

const changeColorMode = (e:any) =>{
console.log(e.target.id);
if(e.target.id === "on"){
  
}

}
  return (
    <div className='text-9xl flex flex-col items-center '>
<div className='text-3xl w-92 flex flex-col '>
  <div>
    <p className='text-white text-lg py-2 font-bold'>calc</p>
    

{/* Swicth */}
{/* <div>
   <div className="switch-toggle bg-blueScreen rounded-full w-40">

  <input id="on" name="state-d" type="radio" onClick={(e)=>changeColorMode(e)} />
  <label htmlFor="on" className='rounded-full  h-12 w-12 mt-4'></label>

  <input id="na" name="state-d" type="radio" onClick={(e)=>changeColorMode(e)} />
  <label htmlFor="na" className='rounded-full  h-12 w-12 mt-4'></label>

  <input id="off" name="state-d" type="radio" onClick={(e)=>changeColorMode(e)}/>
  <label htmlFor="off" className='rounded-full  h-12 w-12 mt-4'></label>

</div>
</div> */}
   
  </div>
  <div className='bg-blueScreen h-14 rounded-md w-full overflow-x-auto'>
    <h1 className="text-right mt-4 mr-2 font-bold text-white ">
      {/* Limiter les nombres */}
       {signBool ? selectedNumbersSecond.slice(0,10) : selectedNumbers.slice(0,10)}
     </h1>
  </div>
  <div className='bg-blueScreen rounded-xl p-4 h-62 mt-4'>
    <div className=' text-lg font-bold grid grid-cols-4   place-items-center '>
      {
        data.map((buttonCalc) => 
        
        <button key={buttonCalc.id} onClick={(e) => calculNumber(e)}  className={buttonCalc.numberKey === 'DEL'?'flex items-center justify-center pt-1 bg-blueKey text-white m-1 w-14 h-10 rounded-md text-center drop-shadow-md border-b-4 border-blueKeyShadow' : 'flex items-center justify-center pt-1  bg-yellowKeyShadow m-1 w-14 h-10  rounded-md text-center border-b-4 border-orangeKeyShadow'}  data-id= {buttonCalc.numberKey}  >
      {buttonCalc.numberKey}
 
      </button>)
      }

   </div>
   <div className='flex justify-center px-2 mt-2 font-bold '>
  <button onClick={() => setSelectedNumbers([''])} className='mr-1 w-32 flex items-center justify-center pt-1 bg-blueKey text-white w-12 h-8 px-14 rounded-md text-center text-sm border-b-4 border-blueKeyShadow'>RESET</button>
  <button onClick={() => setEnter(false)} className='ml-1 w-32 flex items-center justify-center pt-1 bg-redToogle text-white w-12 h-8 px-14 rounded-md text-center text-lg border-b-4 border-redKeyShadow'>=</button>
</div>
  
  </div>
</div>
    </div>
  );
};

export default App;