import { useState, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { EmployeeContext } from '../context/EmployeeContext';

function AddEmployee() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [success, setSuccess] = useState("");

    const { dispatch } = useContext(EmployeeContext);


useEffect(() => {
    if (success) {
        const timer = setTimeout(() => {
            setSuccess("");
        }, 3000);

        return () => clearTimeout(timer);
    }
}, [success]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !name.trim() ||
            !role.trim() 
        ) {
            alert("Please fill all fields")
            return;
        }

        dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
                id: Date.now(),
                name,
                role,
            },
        }),
            setSuccess("Employee added successfully 😊");
            setName("");
        setRole("")
    };

    return (
        <>
            <Navbar />
            
            <div style={{ padding: '20px' }}>
                <h1>Add Employee</h1>

                {
                    success && (
                        <p
                            style={{
                                color: "green",
                                fontWeight: "bold",
                                marginBottom:"15px",
                        }}
                        >
                            {success}
                        </p>
                )}

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