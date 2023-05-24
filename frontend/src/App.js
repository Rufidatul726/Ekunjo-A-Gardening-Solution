import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import NurseryFinder from "./pages/services/nursery";
import ViewPlantDetails from "./pages/services/viewPlantDetails";
import GetFertilizerAmount from "./pages/services/getFertilizerAmount";
import ViewPlantDisease from "./pages/services/viewPlantDisease";
import Registration from "./pages/registration";
import Login from "./pages/Login";
import User from "./pages/dashboard/user";
import Chat from "./pages/chatsystem/serviceProvider/chat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services/nursery" element={<NurseryFinder />} />
            <Route path="/services/fertilizer" element={<GetFertilizerAmount />} />
            <Route path="/services/plantinfo" element={<ViewPlantDetails />} />
            <Route path="/services/plantdisease" element={<ViewPlantDisease />} />
            if(isLoggedin && isServiceProvider){
                 <Route path="/provideservice" element={<Chat/>} />
            }
            if(isLoggedin && isUser){
              <Route path ="/user" element={<User/>} />
            }
            <Route path="/register" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
           
          </Routes>
        </Router>
      </header>
    </div>
  );

}

export default App;
