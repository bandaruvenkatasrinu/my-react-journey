import { useEffect, useState } from "react";
// function UsersData() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => setUsers(data));
//     }, []);
//     return (
//         <div>
//             <h1>Users List</h1>
//             {users.map((user) =>
//                 <h3 key={user.id}>{user.name}</h3>
//             )}
//         </div>
//     );
// }

// function UsersData() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => setUsers(data));
//     }, []);

//     return (
//         <div>
//             <h2>Users List</h2>
//             {users.map((user) =>
//                 <h3 key={user.id}>{user.name}</h3>
//             )}
//         </div>
//     );
// }

function UsersData() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Users list</h2>
            {users.map((user) =>
                <h3 key={user.id}>{user.email}</h3>
            )}
        </div>
    );
}
export default UsersData;