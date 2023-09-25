import React, { useEffect, useState } from 'react';
import './App.scss';
import { Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <div className='app-container'>
      <nav>
        <ul className="nav-container">
          <li>
            <Link
              to="/"
              className="nav-item"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/posts"
              className="nav-item"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              to="/albums"
              className="nav-item"
            >
              Albums
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}