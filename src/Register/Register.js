import React from "react";
import { useForm } from "react-hook-form"
import './Register.css'

function Register() {
    const {register, handleSubmit, formState:{errors}}=useForm();
    console.log(errors)

    return (
        <div className="cover1">
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit((e)=>{
                console.log(e);
            })}>
                <div>
                    <input type="text" className="details1" {...register("name", {required:"Name Required"})} placeholder="Enter Username" />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <input type="text" className="details1"  {...register("lname", {required:"LastName Required"})} placeholder="Enter Lastname" />
                    {errors.lname && <span>{errors.lname.message}</span>}
                </div>
                <div>
                    <input type="password" className="details1 "{...register("psw", {required:"Password Required"})}  placeholder="Enter Password"/>
                    {errors.psw && <span>{errors.psw.message}</span>}
                </div>
                <div>
                    <input type="password" className="details1" {...register("cps", {required:"Password Required"})} placeholder="Confirm Password" />
                    {errors.cps && <span>{errors.cps.message}</span>}
                </div>
                <div>
                    <input type="submit" className="sub1" placeholder="Enter Username" />
                </div>
            </form>

        </div>
    )
}
export default Register
