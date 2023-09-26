import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams()
  // const [query, setQuery] = useState('');
  const query = searchParams.get('query') || '';
  const sortBy = searchParams.get('sortBy') || '';
  // const [sortQuery, setSortQuery] = useState('')

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
      })


  }, []);

  const handleSearchParams = (e, sortBy) => {
    const params = new URLSearchParams(searchParams);

    if (!e.target.value) {
      params.delete('query')
    } else {
      params.set('query', e.target.value);
    }

    setSearchParams(params);
  }

  const handleSortParams = (e, sortQuery) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    console.log(params);

    if (sortQuery === sortBy) {
      params.delete('sortBy')
    } else {
      params.set('sortBy', sortQuery);
    }

    setSearchParams(params);
  }

  const filteredUsers = handleFilter(users, query, sortBy);

  return (
    <div className='users-container'>
      <div className="panel">
        <input
          type="search"
          className="panel-search-input"
          placeholder="Enter name"
          value={query}
          onChange={handleSearchParams}
        />
        <div className="panel-sort">
          <div
            onClick={(e) => handleSortParams(e, 'asc')}
            className={cn('panel-sort-asc', {
              'is-active': sortBy === 'asc'
            })}
          >
            ↑
          </div>
          <div
            onClick={(e) => handleSortParams(e, 'desc')}
            className={cn('panel-sort-desc', {
              'is-active': sortBy === 'desc'
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