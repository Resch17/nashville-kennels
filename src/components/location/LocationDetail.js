import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { LocationContext } from './LocationProvider';
import './Location.css';

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext);
  const [location, setLocation] = useState({});
  const { locationId } = useParams();

  const history = useHistory;

  useEffect(() => {
    getLocationById(locationId).then((res) => {
      setLocation(res);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <address className="location__address">{location.address}</address>
      <h4>Employees</h4>
      <ul className="location__employee-list">
        {location.employees?.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
      <h4>Patients</h4>
      <ul className="location__animal-list">
        {location.animals?.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </section>
  );
};
