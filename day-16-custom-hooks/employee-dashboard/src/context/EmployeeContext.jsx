import {
    createContext,
    useReducer,
    useEffect,
} from 'react';

import {
    employeeReducer,
    initialState,
} from './EmployeeReducer';

export const EmployeeContext =
    createContext();

export function EmployeeProvider({
        children,
}) {
    const [state, dispatch] =
        useReducer(
            employeeReducer,
            initialState
        );
    
    useEffect(() => {
        localStorage.setItem(
            "employees",
            JSON.stringify(state.employees)
        );
    }, [state.employees]);
    
    return (
        <EmployeeContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
    }