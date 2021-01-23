import React from 'react';
import { Link } from "react-router-dom";
import './Location.css';

export const LocationCard = ({ location }) => (
  <section className="location">
    <h3 className="location__name">
      <Link to={`/locations/detail/${location.id}`}>{location.name}</Link>
    </h3>
    <div className="location__address">{location.address}</div>
    <div className="location__employeeCount">
      Employee count: {location.employees.length}
    </div>
    <div className="location__animalCount">
      Animal count: {location.animals.length}
    </div>
  </section>
);
