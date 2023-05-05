import { BrouserRouter } from "react-router-dom"
import './App.css';
import { Signup } from "./pages/Signup";
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Signup/>
    </AuthProvider>
  );
}

export default App;
