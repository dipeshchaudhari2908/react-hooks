import React,{ useState } from 'react'

export default function State() {

    const [num, setNum] = useState(0);
    const [str, setStr] = useState([{name:'Dipesh',age: 29, country:"India"}
]);
    const submitForm = (e) =>{
        const user ={
            name:'Urvi',
            age: 26,
            country: 'France'
        }
        setStr([...str,user])
    }

    return (
        <div>
            <p>{num}</p>
            <button onClick={() => setNum(num+1)}>Increment</button>
            
            <p>*******************************</p>

            <div>
                {str.map(str => {
                    return <div>
                        <h2>{str.name}</h2>
                        <p>{str.age}</p>
                        <p>{str.country}</p>
                    </div>
                })}
            </div>
<p>**********************************</p>

<button onClick={submitForm}>Add User</button>
        </div>
    )
}
