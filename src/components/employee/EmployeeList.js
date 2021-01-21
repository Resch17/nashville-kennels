import React, { useContext, useEffect } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import { EmployeeCard } from './EmployeeCard';
import './Employee.css';

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(getEmployees, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="employees">
      {employees.map((employee) => {
        return <EmployeeCard key={employee.id} employee={employee} />;
      })}
    </div>
  );
};
