import React, { useState } from 'react'

const LearnUseState = () => {

    // let name ="Bivhas"
    let [name,setname]=useState("Bivhas")
    let [count,setcount]=useState(1)
  return (
    <div>
        <p> name is {name}</p>
        <button
        onClick={()=>{
            console.log("Button is clicked")
        }}>
            Send
        </button>
        <button onClick={()=>{
            setname("Shyam")
        }}>Change Name</button>
        <p>Coint is {count}</p>
        <button onClick={() =>{
            setcount(count+1);
        }}
        >+</button>
        <button onClick={()=>{
            setcount(count-1)
        }}>-</button>
    </div>
  )
}
        
export default LearnUseState

// make  variable using useState()
