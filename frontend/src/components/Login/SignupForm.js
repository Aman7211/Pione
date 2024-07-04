import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//import environment file on frontend

export default function SignupForm() {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })

    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/user/signup`, credentials);
          console.log(response.data); 
          toast.success('Registration successful. Please log in.');
          navigate('/login'); 
        } catch (error) { 
          toast.error("Registration Failed. Try Again")
        }
      };
    


    return (
        <>

            <div className="container" style={{ "marginBottom": "10px", "marginTop": "20px" }}>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label mb-1 text-[1rem] leading-[1.375rem] font-medium"> Name<sup className="text-red-500 text-sm">*</sup></label>
                        <input type="text" name='name' value={credentials.name} onChange={onchange} placeholder='Enter Full name' style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-2 border-blue-50 " />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label mb-1 text-[1rem] leading-[1.375rem] font-medium"> Email address<sup className="text-red-500 text-sm">*</sup></label>
                        <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onchange} placeholder='Enter Email Id' style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-2 border-blue-50 " />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label mb-1 text-[1rem] leading-[1.375rem] font-medium"> Password<sup className="text-red-500 text-sm">*</sup></label>
                        <input type="password" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} placeholder='Enter Password' style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-2 border-blue-50 " />
                    </div>
                   
                    <div>
                        <button type="submit" className="mt-6 text-[20px] font-semibold tracking-widest rounded-[8px] bg-black text-white py-[8px] md:px-[175px] px-[132px] ">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
