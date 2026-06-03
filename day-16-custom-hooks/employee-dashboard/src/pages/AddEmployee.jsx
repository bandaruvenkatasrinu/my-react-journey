import { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import { EmployeeContext } from '../context/EmployeeContext';

function AddEmployee() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const { dispatch } =
        useContext(EmployeeContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: "ADD_EMPLOYEE",
            
            payload: {
                id: Date.now(),
                name,
                role,
            },
        }),
            setName("");
        setRole("")
    };

    return (
        <>
            <Navbar />
            
            <div style={{ padding: '20px' }}>
                <h1>Add Employee</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type='name'
                        placeholder='Employee Name'
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                    <br />
                    <br />

                    <input
                        type='text'
                        placeholder='Role'
                        value={role}
                        onChange={(e) =>
                            setRole(e.target.value)
                        }
                    />

                    <br />
                    <br />

                    <button type='submit'>
                        Add Employee
                    </button>

                </form>

            </div>
        </>
    );
}

export default AddEmployee;