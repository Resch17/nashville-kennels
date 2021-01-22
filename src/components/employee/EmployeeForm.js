import React, { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../location/LocationProvider';
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [employee, setEmployee] = useState({
    name: '',
    locationId: 0,
  });

  const history = useHistory();

  useEffect(() => {
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleControlledInputChange = (e) => {
    const newEmployee = { ...employee };

    newEmployee[e.target.id] = e.target.value;
    setEmployee(newEmployee);
  };

  const handleClickSaveEmployee = (e) => {
    e.preventDefault();

    const locationId = parseInt(employee.locationId);

    if (locationId === 0) {
      window.alert('Please select a location');
    } else {
      employee.locationId = locationId;
      addEmployee(employee).then(() => history.push('/employees'));
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoComplete="off"
            autoFocus
            className="form-control"
            placeholder="Employee name"
            value={employee.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location:</label>
          <select
            defaultValue={employee.locationId}
            onChange={handleControlledInputChange}
            name="locationId"
            id="locationId"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
    </form>
  );
};
