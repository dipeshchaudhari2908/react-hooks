import React,{useState,useEffect} from 'react';

const Useeffect = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() =>{
        alert("You have clicked");
    },[]);


    return (
        <div>
            <p>*******************</p>
            <h1>useEffect</h1>
            <button onClick={() => {setNum(num+1);}}>Click me 1: {num}</button>
            <button onClick={() => {setNums(nums+1);}}>Click me 2: {nums}</button>
        </div>
    )
}

export default Useeffect
