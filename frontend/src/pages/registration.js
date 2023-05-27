import React, { useState } from "react";
import { Link } from "react-router-dom";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registration() {
        const [username, setUsername] = useState("");
        const [phone, setPhone] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [successMessage, setSuccessMessage] = useState(false);
        const phoneEx= "01234567890";
        const Navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();

            if(password !== confirmPassword){
                setErrorMessage("Passwords do not match. Please try again.");
                setPassword("");
                setConfirmPassword("");
                return;
            }

            // if(!isValidPhoneNumber(phone)){
            //     setErrorMessage("Please enter a valid phone number.");
            //     setPhone("");
            //     return;
            // }
            console.log("Name:", username);
            console.log("Phone:", phone);
            console.log("Password:", password);
            console.log("Confirm Password:", confirmPassword);
            setErrorMessage("");

            //Check if phone number already exists
            // try{
            //     const response = await axios.get("http://localhost:5656/users/register", {phone});
            //     const data = response.json();
            //     console.log(data);
            //     if(data){
            //         setErrorMessage("Phone number already exists. Please try again.");
            //         setPhone("");
            //         return;
            //     }

            //     }catch(err){
            //     console.log(err);
            // }



            //Send data to backend
            axios.post("http://localhost:5656/register", {username, phone, password})
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });

            if(password===confirmPassword && phone!==phoneEx && isValidPhoneNumber(phone)){
                setSuccessMessage(!successMessage);
            }
            else{
                setSuccessMessage(false);
            }
        };

        const isValidPhoneNumber = (phoneNumber) => {
            const phoneRegex = /^\d{11}$/; // match 10-digit phone number
            return phoneRegex.test(phoneNumber);
        };

        const handleNameChange = (e) => {
            setUsername(e.target.value);
        };

        const handlePhoneChange = (e) => {
            setPhone(e.target.value);
        };

        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        };

        const handleConfirmPasswordChange = (e) => {
            setConfirmPassword(e.target.value);
        };


    return (
        <section class="vh-100">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" >
                <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-1 mt-1">Sign up</p>

                        <form class="mx-1 mx-md-4">
                            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control" onChange={handleNameChange} required/>
                            <label class="form-label" for="form3Example1c">Your Name</label>
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input type="tel" id="form3Example3c" class="form-control" onChange={handlePhoneChange} required/>
                            <label class="form-label" for="form3Example3c">Your Phone Number</label>
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" onChange={handlePasswordChange} required/>
                            <label class="form-label" for="form3Example4c">Password</label>
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" class="form-control" onChange={handleConfirmPasswordChange} required/>
                            <label class="form-label" for="form3Example4cd">Repeat your password</label>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-2 mb-sm-2">
                            <button type="button" class="btn btn-outline btn-lg" onClick={handleSubmit}
                                style={{
                                    backgroundColor: "#fff", 
                                    color: "#000", 
                                    border: "none",
                                    height: "50px",
                                } }
                            >Register</button>
                            </div>
                            </form>
                            {
                            successMessage &&
                            (
                                <div
                                style={{
                                  position: "fixed",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  backgroundColor: "#fff",
                                  padding: "2rem",
                                  borderRadius: "5px",
                                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                  zIndex: "999",
                                }}
                              >
                                <h2>Registration Successful</h2>
                                <p>Thank you for registering, {username}!</p>
                                <button onClick={() => Navigate("/login")}
                                        style={{position: "absolute", top: "0", right: "0", padding: "0.2rem 1rem", 
                                        height: "30px", border: "none", backgroundColor: "transparent", cursor: "pointer"}}
                                >x</button>
                              </div>
                            )
                        }
                        {/* <div className="text-center text-lg-start mt-4 pt-2"> */}
                            <p className="small fw-bold mt-4 pt-1 mb-0">Already have an account? 
                                <Link to="/login" className="link-danger">
                                <span className="text-danger"> Log In</span>
                                </Link>
                            </p>
                        {/* </div>    */}

                    </div>

                     
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}