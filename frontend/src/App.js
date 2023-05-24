import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
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

function protectedRoutes({children}){
    const token = localStorage.getItem(token)!==null;

    if(!token){
      Navigate('/login');
    }
      else{
      const user = JSON.parse(localStorage.getItem('user')); // idk 'user' er ekhane ki hobe
      const serviceProvider = JSON.parse(localStorage.getItem('serviceProvider'));
      if(user){
        return(
          <User/>
        )
      }
      else if(serviceProvider){
        return(
          <Chat/>
        )
      }
    }

  // return (
  //   <>
  //     {children}
  //   </>
  // )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={
              <protectedRoutes>
                <Homepage />
              </protectedRoutes>  
            } />
            <Route path="/services/nursery" element={<NurseryFinder />} />
            <Route path="/services/fertilizer" element={<GetFertilizerAmount />} />
            <Route path="/services/plantinfo" element={<ViewPlantDetails />} />
            <Route path="/services/plantdisease" element={<ViewPlantDisease />} />
            <Route path="/provideservice" element={
              <protectedRoutes><Chat/></protectedRoutes>
            } />
            <Route path ="/user" element={
              <protectedRoutes><User/></protectedRoutes>
            } />
            
            <Route path="/register" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
           
          </Routes>
        </Router>
      </header>
    </div>
  );

}

export default App;
