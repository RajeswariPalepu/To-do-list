import React, { useState } from 'react'
import Axios from 'axios';
function SetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");


    const handleemail = (event) => {
        setEmail(event.target.value)
    }
    const handlepassword = (event) => {
        setPassword(event.target.value)
    }
    const handleconfirmpassword = (event) => {
        setConfirmpassword(event.target.value)
    }

    const handlesubmit = () => {
        if(password===confirmpassword){

        
        Axios.post("", {
            "email": email, "passwd": password
        },{
            headers:
            {
                'x-api-key': ''
            }
        }
        ).then((res) => {
            console.log(res);
        })
    }}
    return (
        <div className="p-5 text-center bg-image"
        style={{
            backgroundImage: "url('https://i.pinimg.com/736x/06/28/94/06289464b221ac09a5a4535918e70dae.jpg')",
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        backgroundColor: "#ccb4c8"
        }}
        >
            <div>
                <section className="vh-100">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 middle">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Set Password</p>
                                                <form className="mx-1 mx-md-4 Form1">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0 ">
                                                            <label className="form-label label1" >Email</label>
                                                            <input type="email" id="typeEmail" onChange={(e) => handleemail(e)} className="form-control my-3" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label stpswd" >Set Password</label>
                                                            <input type="password" id="form3Example4c" onChange={(e) => handlepassword(e)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label cnfmpswd" >Confirm Password</label>
                                                            <input type="password" id="form3Example4c" onChange={(e) => handleconfirmpassword(e)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 label3">
                                                        <button type="button" className="btn btn-primary btn-lg" onClick={() => handlesubmit()}>Submit</button>
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
        </div>
    )
}

export default SetPassword

