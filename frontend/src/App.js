import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Registration from "./pages/registration";
import Login from "./pages/Login";
import User from "./pages/dashboard/user";
import ServiceProvider from "./pages/dashboard/serviceprovider";

function ProtectedRoute({children, isExpert=false}){
  const isLoggedin = localStorage.getItem('token') !== null || false;

  if(!isLoggedin){
    console.log("redirecting");
    return <Navigate to="/login" />;
  }

  else if(isLoggedin && !isExpert){
    console.log("logged in");
    return children;
  }

  return children;

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/user" element={<ProtectedRoute><User/></ProtectedRoute>} />
            <Route path="/serviceprovider" element={<ProtectedRoute isExpert={true}><ServiceProvider/></ProtectedRoute>} />
            <Route path="/register" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );

}

export default App;
