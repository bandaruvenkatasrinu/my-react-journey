import { Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from "./pages/Profile";
import ProtectedRouter from './routes/ProtectedRouter';
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
     <Navbar
  isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRouter isLoggedIn={isLoggedIn}> 
              <Dashboard />
            </ProtectedRouter>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRouter isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRouter>
          }
        />

        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
