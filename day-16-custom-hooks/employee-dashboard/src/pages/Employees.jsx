import { useContext } from "react";
import Navbar from "../components/Navbar";
import EmployeeCard from "../components/EmployeeCard";
import { EmployeeContext } from "../context/EmployeeContext";

function Employees() {
    const { state, dispatch } =
        useContext(EmployeeContext);
    
    const deleteEmployee = (id) => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: id,
        });
    };

    return (
        <>
            <Navbar />
            
            <div style={{ padding: '20px' }}>
                <h1>Employees</h1>

                {state.employees.map((employee) => (
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        onDelete={deleteEmployee}
                    />
                ))}
            </div>
        </>
    );
}

export default Employees;