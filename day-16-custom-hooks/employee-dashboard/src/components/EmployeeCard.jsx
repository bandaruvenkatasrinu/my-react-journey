function EmployeeCard({
    employee,
    onDelete,
}) {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                padding: '10px',
                marginBottom: '10px',
            }}
        >
            <h3>{employee.name}</h3>
            
            <p>{employee.role}</p>
            <p>{employee.department}</p>

            <button
                onClick={() =>
                    onDelete(employee.id)
                }
            >
                Delete
            </button>
        </div>
    );
}

export default EmployeeCard;