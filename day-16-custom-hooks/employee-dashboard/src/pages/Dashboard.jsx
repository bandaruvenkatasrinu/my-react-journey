import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { EmployeeContext } from '../context/EmployeeContext';


function Dashboard() {
    const { state } =
        useContext(EmployeeContext);
    
    return (
        <>
            <Navbar />
            
            <div style={{ padding: '20px' }}>
                <h1>Dashboard</h1>

                <h2>
                    Total Employees:
                    {state.employees.length}
                </h2>
            </div>
        </>
    );
}

export default Dashboard;