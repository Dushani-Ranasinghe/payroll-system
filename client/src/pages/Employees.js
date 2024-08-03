import React, { useState } from "react";
import "../styles/Employees.css";

// Sample employee data
const initialEmployees = [
  { id: 1, name: "John Doe", position: "Machine operator", shift: "full-time", dob: "1998-10-01", address: "654/B,Yakkaduwa,Ja ela", phoneNo: "0112345678", documents: "id scan", start_date: "1998-10-01", end_date: "1998-10-01" },
  { id: 2, name: "Jane Smith", position: "Helper", shift: "part-time", dob: "1978-12-11", address: "654/B,Yakkaduwa,Ja ela", phoneNo: "0112345678", documents: "id scan", start_date: "1998-10-01", end_date: "1998-10-01" },
  // Add more employees as needed
];

const Employees = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("All");
  const [selectedShift, setSelectedShift] = useState("All");

  const handleAdd = () => {
    // Logic to add a new employee
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleUpdate = (id) => {
    // Logic to update an employee
  };

  // Filter employees based on search term, position, and shift
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition === "All" || emp.position === selectedPosition;
    const matchesShift = selectedShift === "All" || emp.shift === selectedShift;
    return matchesSearch && matchesPosition && matchesShift;
  });

  return (
    <div>
      <h1>Employees</h1>
      <div className="navbar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}>
          <option value="All">All Positions</option>
          <option value="Machine operator">Machine operator</option>
          <option value="Helper">Helper</option>
          {/* Add more positions as needed */}
        </select>
        <select value={selectedShift} onChange={(e) => setSelectedShift(e.target.value)}>
          <option value="All">All Shifts</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          {/* Add more shifts as needed */}
        </select>
        <button onClick={handleAdd}>Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Shift</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Documents</th>
            <th>Joining Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.shift}</td>
              <td>{emp.dob}</td>
              <td>{emp.address}</td>
              <td>{emp.phoneNo}</td>
              <td>{emp.documents}</td>
              <td>{emp.start_date}</td>
              <td>{emp.end_date}</td>
              <td>
                <button onClick={() => handleUpdate(emp.id)}>Update</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
