
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vehicles">List of Vehicles</Link></li>
        <li><Link to="/add-vehicle">Add Vehicles</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
