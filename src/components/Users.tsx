import { useEffect, useState } from 'react';

import { UserDetailsType } from '../types';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState<Array<Partial<UserDetailsType>>>([]);

  useEffect(() => {
    getUsers();
  }, []);
  const navigate = useNavigate()

  async function getUsers() {
    const res = await fetch('${apiRoot}/user');
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    } else if (res.status === 401) {
      // 401 Unauthorized
      navigate('/logout')
    } else window.alert('Bad Request');
  }

  function followUser() {}

  return (
    <>
      <h3>Users: </h3>
      {users.length > 0 && (
        <>
          {users.map((user: Partial<UserDetailsType>) => (
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
