import React, { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import './Employee.css';
import { useParams, useHistory } from 'react-router-dom';

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({});

  const { employeeId } = useParams();

  const history = useHistory();

  useEffect(() => {
    getEmployeeById(employeeId).then((res) => {
      setEmployee(res);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">
        Location: {employee.location?.name}
      </div>
    </section>
  );
};
