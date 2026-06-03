
function ConditionalRendering() {

    const isLoggedIn = true;

    return (
        <div>
          {isLoggedIn ? <h1>Welcome back</h1> : <h1>Please Login</h1>}
        </div>
    )
}

export default ConditionalRendering;