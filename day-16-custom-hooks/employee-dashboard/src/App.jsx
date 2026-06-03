import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import AddEmployee from './pages/AddEmployee'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />

        <Route
          path='/employees'
          element={<Employees />}
        />

        <Route
          path='/add'
          element={<AddEmployee />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
