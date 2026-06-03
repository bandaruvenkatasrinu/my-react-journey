import './App.css'
import { useState } from 'react';
import useFetch from './hooks/useFetch'
import UserCard from './components/userCard';

function App() {
  const { data, loading } =
    useFetch(
      'https://jsonplaceholder.typicode.com/users'
    );
  const [search, setSearch] = useState("");

    const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Directory</h1>

      <input
        type='text'
        placeholder='Search User'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      
      />
      <br />
      <br />

      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default App
