import React, { useState } from 'react'

const Calculator = () => {
    const [data, setData] = useState("");

    const getValue =(event) =>{
        console.log(event.target.value);
        setData(data.concat(event.target.value))
    }
    const calculation = () =>{
      setData(eval(data).toString())
    }
    const back = () =>{
      setData(data.slice(0,-1))
    }
    
    const clear = () =>{
      setData("")
    }
    
  return (
    <>
        <img src="https://wallpapers.com/images/hd/educational-items-aesthetic-bg8i103jk2cdd1gc.jpg" alt='Please Refresh web'></img>
      <div>
            
        <div className='container'>
          <div>
              <input placeholder='0' value={data}/>
          </div>
        <br></br>

          <div id='w1'>

                  <button id='a1' onClick={getValue} value="%">%</button>
                  <button id='a1' onClick={getValue} value="√ ">√ </button>
                  <button id='a1' onClick={back} >CE</button>
                  <button id='a2' onClick={clear}>C</button>

                  <button id='a3' onClick={getValue} value="7">7</button>
                  <button id='a3' onClick={getValue} value="8">8</button>
                  <button id='a3' onClick={getValue} value="9">9</button>
                  <button id='a4' onClick={getValue} value="-">−</button>

                  <button id='a3' onClick={getValue} value="4">4</button>
                  <button id='a3' onClick={getValue} value="5">5</button>
                  <button id='a3' onClick={getValue} value="6">6</button>
                  <button id='a5' onClick={getValue} value="/">÷</button>
                  

                  <button id='a3' onClick={getValue} value="1">1</button>
                  <button id='a3' onClick={getValue} value="2">2</button>
                  <button id='a3' onClick={getValue} value="3">3</button>
                  <button id='a6' onClick={getValue} value="*">×</button>
                  

                  <button id='a3' onClick={getValue} value=".">.</button>
                  <button id='a3' onClick={getValue} value="0">0</button>
                  <button id='a1' onClick={calculation}>=</button>
                  <button id='a7' onClick={getValue} value="+">+</button>
          </div>
          </div>

    </div>
    </>
  )
}

export default Calculator