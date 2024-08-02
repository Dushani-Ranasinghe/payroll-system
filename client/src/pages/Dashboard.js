import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Dashboard.css";

const Dashboard = ({ handleLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-row">
        <div className="dashboard-sidebar">
          <a href="/dashboard" className="dashboard-header">
            DPL Bags
          </a>
          <ul className="dashboard-nav">
            <li className="dashboard-nav-item">
              <Link to="" className="dashboard-nav-link">
                <i className="dashboard-nav-icon bi-house"></i>
                <span className="dashboard-nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="dashboard-nav-item">
              <Link to="employees" className="dashboard-nav-link">
                <i className="dashboard-nav-icon bi-people"></i>
                <span className="dashboard-nav-text">Employees</span>
              </Link>
            </li>
            <li className="dashboard-nav-item">
              <Link to="salaries" className="dashboard-nav-link">
                <i className="dashboard-nav-icon bi-cash-coin"></i>
                <span className="dashboard-nav-text">Payroll</span>
              </Link>
            </li>
            <li className="dashboard-nav-item">
              <Link to="profile" className="dashboard-nav-link">
                <i className="dashboard-nav-icon bi-person-circle"></i>
                <span className="dashboard-nav-text">Profile</span>
              </Link>
            </li>
            <li className="dashboard-nav-item" onClick={handleLogout}>
              <a href="/logout" className="dashboard-nav-link">
                <i className="dashboard-nav-icon bi-power"></i>
                <span className="dashboard-nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-header-bar">
            <h4 className="dashboard-title">Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
