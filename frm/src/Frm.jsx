
// import { useState } from "react";

// const Frm = () => {
//     let [h,setH] = useState('')
//     let [p,setP] = useState('')
//     let [sh,setSh] = useState('false')

//     function hinput(event){
//         console.log(event.target.value);
//         setH (event.target.value)
//     }
//     function pinput(event){
//         console.log(event.target.value);
//         setP (event.target.value)
//     }
//     function sh(){
//         setSh(true)
//     }
   
//     return(
//         <>
        
//         <button onClick={sh}>Submit</button>
         
//         <h1>My Name - {h}</h1>
//         <input type="text" onChange={hinput} />
//         <h1>My Place - {p}</h1>
//         <input type="text" onChange={pinput} />
        
//         </>
//     )
// }

// export default Frm
import React from "react";
import { useState } from "react";

const Frm = () => {
    let [inputname , setInput] = useState({
        username:'',
        address:''

    })
    const hinput = (event) => {
        const {name,value} = event.target;
        setInput({
            ...inputname,
            [name]:value
        })
    }
    const finalsubmit = (event) =>{
        event.preventDefault();
        console.log(inputname)
    }

return(
    <>
    <form onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={inputname.username} onChange={hinput} />

        <label htmlFor="">Address</label>
        <input type="text" name="Address" value={inputname.address} onChange={hinput} />

        <input type="submit" />
    </form>
    </>
)}

export default Frm















