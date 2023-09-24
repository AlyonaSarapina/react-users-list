import React, { useEffect, useState } from 'react';
import './App.scss';
import { Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <><nav>
      <div className="nav-container">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
      <div className="section">
        <Outlet />
      </div>
    </>
  )
}