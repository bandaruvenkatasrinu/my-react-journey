function Login({ setIsLoggedIn }) {
    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <button onClick={() => setIsLoggedIn(true)}>
                Login
            </button>
        </div>
    );
}

export default Login;