import React from 'react'
import { useForm } from 'react-hook-form';
import './Signup.css'

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="signup">
            <div className="container mt-5">
                <form className="signup_page" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="form-title"> Sign Up </h2>
                    <div className="signup_content">
                    <label >Username: </label>
                        <input type="text" placeholder="username" {...register("username")}required />
                    </div>
                    <div className="signup_content">
                    <label >Email: </label>
                        <input type="email" placeholder="email" {...register("email")}required />
                    </div>
                    <div className="signup_content">
                    <label >Password: </label>
                        <input type="password" placeholder="*********" {...register("password")}required />
                    </div>
                    <div className="signup_content">
                                <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;