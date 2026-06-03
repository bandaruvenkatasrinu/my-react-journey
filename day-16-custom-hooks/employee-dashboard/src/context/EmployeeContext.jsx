import {
    createContext,
    useReducer,
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