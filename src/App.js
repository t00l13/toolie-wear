import "./App.css";
import { BrowserRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register.js";
import Reset from "./Components/Reset/Reset.js";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
