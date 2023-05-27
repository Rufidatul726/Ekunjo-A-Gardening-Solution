import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PropTypes } from 'prop-types';
// import axios from "axios";

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
// }

function Login({setToken}) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // const res = await fetch("http://localhost:9000/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         phone,
        //         password,
        //     }),
        // });

        //if(res.status === 400){
        //    alert("Invalid Credentials");
        //}
        // else{
        //     const data = await res.json();
        //     console.log(data);
        //     if(data.token ){
        //         localStorage.setItem("token", data.token);
        //         setToken(data.token);
        //         localStorage.setItem("userDetails", JSON.stringify(data.userDetails));
        //         data.isExpert ? localStorage.setItem("isExpert", "true") : localStorage.setItem("isExpert", "false");
        //         data.isExpert ? Navigate('/serviceprovider') : Navigate('/user');
        //     }
        // }

    };

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };


  return (
    <section className="vh-100">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                </div>

                <div className="form-outline mb-4">
                    <input type="tel" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid phone number" onChange={onPhoneChange}/>
                    <label className="form-label" htmlFor="form3Example3">Phone Number</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" onChange={onPasswordChange}/>
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}
                        style={{
                            backgroundColor: "#fff", 
                            color: "#000", 
                            border: "none",
                            height: "50px",
                        } }
                    >Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                        <Link to="/register" className="link-danger">
                            <span className="text-danger">Register</span>
                        </Link>
                    </p>
                </div>

                </form>
            </div>
            </div>
        </div>
        </section>
  );
}

export default Login;

Login.prototypes = {
    setToken: PropTypes.func.isRequired,
}