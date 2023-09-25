import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './UsersList.scss'
import { fetchUsers } from '../../api/fetch';
import cn from 'classnames';

const handleFilter = (users, query, sortQuery) => {
  let filteredUsers = [...users];
  const normalizedQuery = query.toLowerCase().trim();

  if (normalizedQuery) {
    filteredUsers = users.filter(user => user.name.toLowerCase().includes(normalizedQuery));
  }

  if (sortQuery) {
    switch (sortQuery) {
      case 'asc':
        filteredUsers = filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'desc':
        filteredUsers = filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        filteredUsers;
        break;
    }
  }

  return filteredUsers;
}

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [sortQuery, setSortQuery] = useState('')

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
      })
  }, []);

  const filteredUsers = handleFilter(users, query, sortQuery);

  return (
    <div className='users-container'>
      <div className="panel">
        <input
          type="search"
          className="panel-search-input"
          placeholder="Enter name"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <div className="panel-sort">
          <div
            className={cn('panel-sort-asc', {
              'is-active': sortQuery === 'asc'
            })}
            onClick={() => {
              if (sortQuery === 'asc') {
                setSortQuery('')
                return;
              }
              setSortQuery('asc');
            }}
          >
            ↑
          </div>
          <div
            onClick={() => {
              if (sortQuery === 'desc') {
                setSortQuery('')
                return;
              }
              setSortQuery('desc');
            }
            }
            className={cn('panel-sort-desc', {
              'is-active': sortQuery === 'desc'
            })}
          >
            ↓
          </div>
        </div>
      </div>
      <div className='users-list'>
        {filteredUsers &&
          filteredUsers.map((user) => (
            <div className="card" key={user.id}>
              <div className="card-header">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`}
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  {user.name}
                </div>
                <div className='card-links'>
                  <Link
                    to={`/:${user.id}/posts`}
                    state={{ userId: user.id }}
                    className='card-link'
                  >
                    Posts
                  </Link>
                  <Link
                    to={`/:${user.id}/albums`}
                    state={{ userId: user.id }}
                    className='card-link'
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