import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Signup } from "./pages/Signup";
import { AuthProvider } from './context/authContext';
import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import i404 from "./404.jpg";
import { Jornadas } from "./pages/jornadas";
import { Aulas } from "./pages/aulas";
import { Cursos } from "./pages/cursos";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/aulas" element={<Aulas />}></Route>
          <Route path="/cursos" element={<Cursos />}></Route>
          <Route path="/jornadas" element={<Jornadas />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={
          <div className="error">
            <img src={i404} alt="error 404" width="500" height="400"></img>
          </div>
          }></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
