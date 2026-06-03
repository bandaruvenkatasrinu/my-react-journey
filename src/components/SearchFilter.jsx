import { useEffect, useState } from 'react';

function SearchFilter() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const getUsers = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Search User" onChange={(e) => setSearch(e.target.value)} />
            
            {filteredUsers.map((user) => (
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </div>
    );
}

export default SearchFilter;