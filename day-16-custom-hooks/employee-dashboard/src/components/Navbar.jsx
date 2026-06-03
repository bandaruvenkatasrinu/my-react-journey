import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            style={{
                padding: "15px",
                background: "#222",
            }}
        >
            <Link
                to='/'
                style={{ color: 'white', marginRight: '15px' }}
            >
                Dashboard
            </Link>

            <Link
                to='/employees'
                style={{ color: 'white', marginRight: '15px' }}
            >
                Employees
            </Link>

            <Link
                to='/add'
                style={{ color: 'white', marginRight: '15px' }}
            >
                Add Employee
            </Link>
        </nav>
    );
}

export default Navbar;

