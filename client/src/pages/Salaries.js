import React, { useState } from "react";
import "../styles/Salaries.css";

// Sample salary data
const initialSalaries = [
  { id: 1, name: "John Doe", position: "Machine operator", shift: "full-time", month: "August", year: 2024, basic: 21500, noPay: 2, noPayAmount: 860, transport: 2000, attendance: 1000, otHours: 29, otRate: 127, grossSalary: 0, epfEmployee: 0, epfEmployer: 0, etf: 0, netSalary: 0, isEligibleForEPFETF: true },
  { id: 2, name: "Jane Smith", position: "Helper", shift: "part-time", month: "August", year: 2024, basic: 17000, noPay: 2.5, noPayAmount: 680, transport: 2000, attendance: 1000, otHours: 32, otRate: 127, grossSalary: 0, epfEmployee: 0, epfEmployer: 0, etf: 0, netSalary: 0, isEligibleForEPFETF: false },
  // Add more salary data as needed
];

const Salaries = () => {
  const [salaries, setSalaries] = useState(initialSalaries);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("All");
  const [selectedShift, setSelectedShift] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("August");
  const [selectedYear, setSelectedYear] = useState(2024);

  const calculateSalary = (salary) => {
    const { basic, noPay, noPayAmount, transport, attendance, otHours, otRate, isEligibleForEPFETF } = salary;

    // Calculate No Pay Deduction
    const noPayDeduction = noPay * noPayAmount;

    // Calculate OT Pay
    const otPay = otHours * otRate;

    // Calculate Gross Salary
    const grossSalary = basic - noPayDeduction + transport + attendance + otPay;

    // Calculate EPF, ETF (assuming eligibility and basic salary is used for these calculations)
    const epfEmployee = isEligibleForEPFETF ? basic * 0.08 : 0;
    const epfEmployer = isEligibleForEPFETF ? basic * 0.12 : 0;
    const etf = isEligibleForEPFETF ? basic * 0.03 : 0;

    // Calculate Net Salary
    const netSalary = grossSalary - epfEmployee;

    return { grossSalary, epfEmployee, epfEmployer, etf, netSalary };
  };

  const handleAdd = () => {
    // Logic to add a new salary entry
  };

  const handleDelete = (id) => {
    setSalaries(salaries.filter((salary) => salary.id !== id));
  };

  const handleUpdate = (id) => {
    // Logic to update a salary entry
  };

  // Filter and calculate salaries based on the selected month and year
  const filteredSalaries = salaries.map((salary) => {
    const calculatedValues = calculateSalary(salary);
    return { ...salary, ...calculatedValues };
  }).filter((salary) => {
    const matchesSearch = salary.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition === "All" || salary.position === selectedPosition;
    const matchesShift = selectedShift === "All" || salary.shift === selectedShift;
    const matchesMonth = salary.month === selectedMonth;
    const matchesYear = salary.year === selectedYear;
    return matchesSearch && matchesPosition && matchesShift && matchesMonth && matchesYear;
  });

  return (
    <div className="salary-container">
      <h1>Salaries for {selectedMonth} {selectedYear}</h1>
      <div className="navbar">
      <div className="search-input-container">
          <i className="uil uil-search search-icon"></i>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
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
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          {/* Add more years as needed */}
        </select>
        <button onClick={handleAdd}>Add New</button>
      </div>
      <table className="main-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Shift</th>
            <th>EPF/ETF Eligibility</th>
            <th>Basic Salary (LKR)</th>
            <th>No Pay (Days)</th>
            <th>Transport Allowance (LKR)</th>
            <th>Attendance Bonus (LKR)</th>
            <th>OT Hours</th>
            <th>Gross Salary (LKR)</th>
            <th>EPF (8%) (LKR)</th>
            <th>EPF (12%) (LKR)</th>
            <th>ETF (3%) (LKR)</th>
            <th>Net Salary (LKR)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSalaries.map((salary) => (
            <tr key={salary.id}>
              <td>{salary.id}</td>
              <td>{salary.name}</td>
              <td>{salary.position}</td>
              <td>{salary.shift}</td>
              <td>{salary.isEligibleForEPFETF ? "Eligible" : "Not Eligible"}</td>
              <td>{salary.basic}</td>
              <td>{salary.noPay} x {salary.noPayAmount}</td>
              <td>{salary.transport}</td>
              <td>{salary.attendance}</td>
              <td>{salary.otHours} x {salary.otRate}</td>
              <td>{salary.grossSalary.toFixed(2)}</td>
              <td>{salary.epfEmployee.toFixed(2)}</td>
              <td>{salary.epfEmployer.toFixed(2)}</td>
              <td>{salary.etf.toFixed(2)}</td>
              <td>{salary.netSalary.toFixed(2)}</td>
              <td>
                <button onClick={() => handleUpdate(salary.id)}>Update</button>
                <button onClick={() => handleDelete(salary.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Salaries;
