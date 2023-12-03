// import{useState} from 'react'
import React from 'react';
import './Form.css'

// 1.
// function Eff(){

//     const[form,setform]=useState("");
//     const[submit,setsubmit]=useState("");

//     const value=(e)=>{
//         setform(e.target.value)
//         console.log(e.target.value);
//     }

//     const value1=(e)=>{
//         e.preventDefault()
//         setsubmit(form)

//     }

//     return(
//         <div>
//             <h1>Heloo {form}</h1>
//             <h3>changed: {submit}</h3>
//             <form>
//             <input type='text' placeholder='Enter your name' onChange={value}/>
//             <button onClick={value1}>submit</button>
//             </form>
//         </div>
//     )
// }

// export default Eff;



// 2. Form

import { useForm } from "react-hook-form"

function Login(){

   const {register,handleSubmit,formState:{errors}}= useForm()
   console.log(errors)
    
    return(
        
    <div className="cover">

        <div className="login">
            <h1>Login Form</h1>

            <div className="form">
                <form  onSubmit={handleSubmit((e)=>{
            console.log(e)
                })}>


                <div className="value">
                    <input className="details" type="text"  {...register("name",{required:"Name required"})}placeholder="User Name"/>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="value">
                    <input className="details" type="email"  {...register("email",{required:"Email required"})}placeholder="Email"/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="value">
                    <input className="details" type="Password"   {...register("psw.",{required:"Password required"})}placeholder="Password"/>
                    {errors.psw && <span>{errors.psw.message}</span>}
                </div>

                <div className="value-1">
                <input className="sub" type="submit"/>
                </div>

                </form>
            </div>
           
        </div>
    </div>
    
    )
}
export default Login ;
