import { useState, useEffect } from 'react';
import { User } from '../types';

export default function Users() {
  const [users, setUsers] = useState<Array<Partial<User>>>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await fetch('http://127.0.0.1:5000/user');
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    } else window.alert('Bad Request');
  }

  function followUser() {}

  return (
    <>
      <h3>Users: </h3>
      {users.length > 0 && (
        <>
          {users.map((user: Partial<User>) => (
            <>
              <p key={user.id}>
                {user.username} <small>{user.email} </small>
                {localStorage.getItem('token') && (
                  <button onClick={followUser}>Follow</button>
                )}
              </p>
            </>
          ))}
        </>
      )}
    </>
  );
}
