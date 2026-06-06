import { Link } from 'react-router-dom';

function Navbar({isLoggedIn, setIsLoggedIn}) {
    return (
        <div className='container'>

            <Link to="/">Home</Link>{" | "}
            <Link to="/about">About</Link>{" | "}
            <Link to="/dashboard">Dashboard</Link>{" | "}
            <Link to="/profile">Profile</Link>{" | "}
            {
                !isLoggedIn ? (
                    <Link to="/login">Login</Link>
                ) :
                    <button onClick={()=>setIsLoggedIn(false)}>
                        Logout
                    </button>
            }
        </div>
    );
}

export default Navbar;