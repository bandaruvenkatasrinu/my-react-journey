import { useEffect, useState } from "react";

function Loading() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            {users.map((user) => (
                <div className="card" key={users.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.company.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Loading;