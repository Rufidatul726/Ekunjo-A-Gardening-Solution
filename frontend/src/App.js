import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import NurseryFinder from "./pages/services/nursery";
import ViewPlantDetails from "./pages/services/viewPlantDetails";
import GetFertilizerAmount from "./pages/services/getFertilizerAmount";
import Registration from "./pages/registration";

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
            <Route path="/services/plantdisease" element={<ViewPlantDetails />} />
            <Route path="/register" element={<Registration/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
