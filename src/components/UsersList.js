import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api/fetch';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
      })
  }, []);

  return (
    <div className='container'>
      <div className='users-list'>
        {users &&
          users.map((user) => (
            <div className="card" key={user.id}>
              <div className="card-header">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`}
                />
              </div>
              <div className="card-body">
                <div className="title">
                  {user.name}
                </div>
                <div className='links'>
                  <Link
                    to={`/:${user.id}/posts`}
                    className='posts'
                  >
                    Posts
                  </Link>
                  <Link
                    to={`/:${user.id}/albums`}
                    className='albums'
                  >
                    Albums
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UsersList