import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Signup } from "./pages/Signup";
import { AuthProvider } from './context/authContext';
import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
