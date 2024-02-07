
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Magasin from "./components/Magasin"
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Occasion from "./components/Occasion";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  return (
    <div >
  
        
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
     

      <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route  path="/" element={<Home />}></Route>
      <Route  path="/mag" element={<Magasin />}></Route>
      <Route  path="/occasion" element={<Occasion />}></Route>
      <Route element={<PrivateRoute />}>
        <Route path="/profil" element={<Profil />} />
      </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
