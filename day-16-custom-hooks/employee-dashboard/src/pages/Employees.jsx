import Navbar from "../components/Navbar";
import EmployeeCard from "../components/EmployeeCard";
import { EmployeeContext } from "../context/EmployeeContext";
import { useState, useContext, useMemo, useCallback } from "react";

function Employees() {
    const [search, setSearch] = useState("");
    const { state, dispatch } =
        useContext(EmployeeContext);
    
    const deleteEmployee = useCallback((id) => {
        dispatch({
            type: "DELETE_EMPLOYEE",
            payload: id,
        });
    }, [dispatch]);

const filteredEmployees = useMemo(() => {
    return state.employees.filter((employee) =>
        employee.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );
}, [search, state.employees]);

    return (
        <>
            <Navbar />
            
            <div style={{ padding: '20px' }}>
                <h3>Search Employees</h3>

                <input
                    type="text"
                    placeholder="Search Employee"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "300px",
                        marginBottom:"20px",
                    }}
                />
                
                {filteredEmployees.map((employee) => (
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