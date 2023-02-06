import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
    const[loginErrors, setLoginErrors] = useState("")
    let Navigate = useNavigate()
    const handleemail = (event) => {
        setEmail(event.target.value)
        errors.length && errors.map((email, key) => {
            if (email === "email") {
                errors.splice(key, 1)
                setErrors(errors)
            }
        })
    }

    const handlepassword = (event) => {
        setPassword(event.target.value)
        errors.length && errors.map((password, key) => {
            if (password === "password") {
                errors.splice(key, 1)
                setErrors(errors)
            }
        })
    }
    const handlesignin = () => {
        const reg1 = []
        if (password === "") {
            reg1.push("password")
        }
        if (email === "") {
            reg1.push("email")
        }
        setErrors(reg1)
        if(!reg1.length){
            Axios.post("", {

            "email": email, "password1": password
        }, {
            headers:
            {
                'x-api-key': 'x1veBkaEGM5Al1MBeAg3c9HI128dNytd3yFbtc6s'
            }
        }
        ).then((res) => {
            console.log(res);
            setLoginErrors("")
            Navigate("/dashboard")
        }).catch((error) => {
            console.log(error);
           setLoginErrors("Login Failed")
        })
        }
       
    }
    return (

        <div className="p-5 text-center bg-image"
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/06/28/94/06289464b221ac09a5a4535918e70dae.jpg')",
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: "#ccb4c8"
            }} >
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 middle">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                            <form className="mx-1 mx-md-4 Form1">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <label className="form-label label1" >Email</label>
                                                        <input type="email" id="typeEmail" onChange={(e) => handleemail(e)}
                                                            placeholder="Enter a valid email address" className="form-control my-3" />
                                                    </div>
                                                    {
                                                   errors.map((email) => (
                                                        email === "email" ? <p className='error'>Please Enter Email</p> : null
                                                    ))
                                                }
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <label className="form-label pswd" >Password</label>
                                                        <input type="password" id="form3Example4c" onChange={(e) => handlepassword(e)}
                                                            placeholder="Enter password" className="form-control" />
                                                    </div>
                                                    {
                                                   errors.map((password) => (
                                                        password === "password" ? <p className='error'>Please Enter password</p> : null
                                                    ))
                                                }

                                                </div>
{
                                                   loginErrors.length?<p className='error'>Please Enter valid Details</p>:null
                                                }
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <div className="d-flex justify-content-between align-items-center frgtpswd">
                                                            <a href="#!" className="text-body"><Link to="/forgotpassword">Forgot password?</Link></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    
                                                        <button type="button" className="btn btn-primary btn-lg" onClick={() => handlesignin()}>Login</button>
                                                   
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
