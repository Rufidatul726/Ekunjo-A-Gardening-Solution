import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Registration from "./pages/registration";
import Login from "./pages/Login";
import User from "./pages/dashboard/user";
import Chat from "./pages/chatsystem/serviceProvider/chat";
// import Controller from "./pages/dashboard/controller";

function ProtectedRoute({children}){
  //const isLoggedin = localStorage.getItem('token');
  const isLoggedin = true;

  if(!isLoggedin){
    console.log("redirecting");
    return <Navigate to="/login" />;
  }

  else if(isLoggedin){
    return children;
  }
}

function RouteIsExpert({children}){
  const isExpert = localStorage.getItem('isExpert');
  //const isExpert = true;

  if(!isExpert){
    console.log("redirecting");
    return <Navigate to="/user" />;
  }

  else if(isExpert){
    return children;
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <PrivateRoute path="/user" element={<User />} />
            <PrivateRoute path="/provideservice" element={<Chat />} /> */}
            {/* <Route path="/provideservice" element={<Chat/> } />
            <Route path ="/user" element={<User/>} /> */}
            <Route path="/user" element={<ProtectedRoute><User/></ProtectedRoute>} />
            <Route path="/provideservice" element={<ProtectedRoute><RouteIsExpert><Chat/></RouteIsExpert></ProtectedRoute>} />
            <Route path="/register" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );

}

export default App;
