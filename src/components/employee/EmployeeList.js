import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../location/LocationProvider';
import { EmployeeCard } from './EmployeeCard';
import './Employee.css';

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getEmployees().then(getLocations);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  return (
    <>
      <h2>Employees</h2>
      <button
        onClick={() => {
          history.push('/employees/create');
        }}
      >
        Add Employee
      </button>
      <div className="employees">
        {employees.map((employee) => {
          const clinic = locations.find((l) => l.id === employee.locationId);
          return (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              location={clinic}
            />
          );
        })}
      </div>
    </>
  );
};
