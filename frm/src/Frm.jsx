
import { useState } from "react";

const Frm = () => {
    let [h,setH] = useState('')
    let [p,setP] = useState('')
    let [sh,setSh] = useState('false')

    function hinput(event){
        console.log(event.target.value);
        setH (event.target.value)
    }
    function pinput(event){
        console.log(event.target.value);
        setP (event.target.value)
    }
   
    return(
        <>
        
        <h1>My Name - {(st) ? h : ''}</h1>
        <button onClick={(sh) = () => setSh}>click</button>
         
        <h1>My Name - {h}</h1>
        <input type="text" onChange={hinput} />
        <h1>My Place - {p}</h1>
        <input type="text" onChange={pinput} />
        
        </>
    )
}

export default Frm