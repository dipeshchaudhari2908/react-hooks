import React,{useCallback,useState} from 'react';

const Effect = () => {

    const [numbers,setNumber] = useState({num1: 0, num2: 0});
    const [result,setResult] = useState(0);
       const memoizedCallback = useCallback(()=>{
        setResult(parseInt(numbers.num1) + parseInt(numbers.num2));
        
    },[numbers,result]);
    console.log(result);
    return (
        <div>
           <u><h1>useCallback Page</h1></u> 
           <h2>Result:{result}</h2>
           <br/>
           <input type="text" onChange={(e) => setNumber({num1: +e.target.value, num2: numbers.num2})
        }
        />
        <br/>
           <input type="text" onChange={(e) => setNumber({num1: numbers.num1, num2: +e.target.value })
        }
        />

        <br/>
        <button onClick={memoizedCallback}>Cal</button>
        </div>
    )
}

export default Effect
