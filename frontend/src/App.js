import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
