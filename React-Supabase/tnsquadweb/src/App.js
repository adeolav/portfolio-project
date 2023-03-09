import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import SignUp from "./components/pages/Auth/SignUp";
import Login from "./components/pages/Auth/Login";
import Home from './components/pages/Home';
import SinglePost from "./components/pages/Post/SinglePost";
import AddPost from "./components/pages/Post/AddPost";
import {AuthProvider} from "./context/AuthContext";


function App() {
  return (
    <div className="App">
      <AuthProvider>
         <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/singlepost/:id" element={<SinglePost />} /> 
            <Route exact path="/addpost" element={<AddPost />} /> 
          </Routes>
         </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
