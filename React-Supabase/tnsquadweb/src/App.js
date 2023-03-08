import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import SignUp from "./components/pages/Auth/SignUp";
import Login from "./components/pages/Auth/Login";
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      {/*<AuthProvider>*/}
         <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} /> 
          </Routes>
         </Router>
      {/*</AuthProvider> */}
    </div>
  );
}

export default App;
