import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Phone from "./components/Phone/Phone";
import "./App.css";

function App() {
  return (
    <Router>
      <main className="container">
        <div className="container_phone">
          <div>
            <Phone />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
