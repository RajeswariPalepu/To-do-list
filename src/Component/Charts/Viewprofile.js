import React, { useState } from 'react'
import Axios from 'axios';
import LoadingScreen from "react-loading-screen";
function Viewprofile() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const[loader,setLoader]=useState(false)
    const [message, setMessage] = useState(false)
    const handleemail = (event) => {
        setEmail(event.target.value)
    }
    const handleuserName = (event) => {
        setUserName(event.target.value)
    }
    const handleupdate = async () => {
        setLoader(true)
            await Axios.post("", {
                "email": email, "username": userName
            }, {
                headers:
                {
                    'x-api-key': ''
                }
            }).then((res) => {
                if (res?.data?.message) {
                    setLoader(false)
                    setMessage(true)
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    return (
        // <div>
        //     <section className="h-100 gradient-custom-2">
        //         <div className="container py-5 h-100">
        //             <div className="row d-flex justify-content-center align-items-center h-100">
        //                 <div className="col col-lg-9 col-xl-7">
        //                     <div className="card">
        //                         <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#fff", height:"200px"}}>
        //                             <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
        //                                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
        //                                     alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
        //                                     style={{width: "150px",zIndex: "1" }}/>
        //                                 <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
        //                                     style={{zIndex: "1"}}>
        //                                     Edit profile
        //                                 </button>
        //                             </div>
        //                             <div className="d-flex flex-row align-items-center mb-4">
        //                                 <i className="fas fa-user fa-lg me-3 fa-fw"></i>
        //                                 <div className="form-outline flex-fill mb-0 ">
        //                                     <label className="form-label Reg">User Name</label>
        //                                     <input type="text" id="form3Example1c" onChange={(e) => handleuserName(e)} className="form-control" />
        //                                 </div>
        //                             </div>
        //                             <div className="d-flex flex-row align-items-center mb-4">
        //                                 <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
        //                                 <div className="form-outline flex-fill mb-0 ">
        //                                     <label className="form-label Reg">Your Email</label>
        //                                     <input type="email" id="form3Example3c" onChange={(e) => handleemail(e)} className="form-control" />
        //                                 </div>
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div className="p-5 text-center bg-image"
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/06/28/94/06289464b221ac09a5a4535918e70dae.jpg')",
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: "#ccb4c8"
            }}
        >
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 middle">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Viewprofile</p>
                                            <form className="mx-1 mx-md-4 Form1">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <label className="form-label Reg">User Name</label>
                                                        <input type="text" id="form3Example1c " onChange={(e) => handleuserName(e)} className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 label4">
                                                        <label className="form-label label1" >Email</label>
                                                        <input type="email" id="typeEmail" onChange={(e) => handleemail(e)} className="form-control my-3" />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={()=>handleupdate()}>Update</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Viewprofile
