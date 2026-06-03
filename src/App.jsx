import useFetch from "./hooks/useFetch";

function App() {
  const {
    data: users,
    loading,
    error
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
    );
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>
          {user.website}
        </h2>
      ))}
    </div>
  );
}


// function App() {
//   const [show, toggle] = useToggle();
//   return (
//     <div>
//       <button onClick={toggle}>
//         Toggle
//       </button>

//       {show && <h1>Hello React</h1>}
//     </div>
//   );
// }

export default App;