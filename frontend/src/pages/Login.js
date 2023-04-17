import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

function Login() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const phoneNo = "01234567890";
    const passwordno = "1234567890";
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(phone, password);

        if (phone === phoneNo && password === passwordno) {
            
            console.log("Login Successful");
            alert("Login Successful");
            navigate("/");
        }
        else {
            alert("Login Failed");
        }

        // try {
        //     const response = await axios.post("http://localhost:9000/login",{phone,password,});
        //     console.log(response);
        //     setLoading(false);
        //     setMessage(response.data.message);
        // } catch (error) {
        //     console.log(error);
        //     setLoading(false);
        //     setError(error.response.data.message);
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
                    <label className="form-label" for="form3Example3">Phone Number</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" onChange={onPasswordChange}/>
                    <label className="form-label" for="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Login</button>
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