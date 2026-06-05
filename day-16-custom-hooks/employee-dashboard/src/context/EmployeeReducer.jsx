const savedEmployees =
    JSON.parse(
        localStorage.getItem("employees")
    ) || [
        {
            id: 1,
            name: "Srinu",
            role: "Frontend Developer",
            department: "IT"
        }
    ];

export const initialState = {
    employees: savedEmployees,
};

export function employeeReducer(
    state,
    action
) {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [
                    ...state.employees,
                    action.payload,
                ],
            };
        
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employees:
                    state.employees.filter(
                        (emp) =>
                            emp.id !== action.payload
                    ),
            };
        
        default:
            return state;
    }
}