import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LocationContext } from './LocationProvider';
import { AnimalContext } from '../animal/AnimalProvider';
import { EmployeeContext } from '../employee/EmployeeProvider';
import { LocationCard } from './LocationCard';
import './Location.css';

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);
  const { getAnimals } = useContext(AnimalContext);
  const { getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getAnimals().then(getEmployees).then(getLocations);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  return (
    <>
      <h2>Locations</h2>
      <button
        onClick={() => {
          history.push('/locations/create');
        }}
      >
        Add Location
      </button>
      <div className="locations">
        {locations
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((location) => {
            return <LocationCard key={location.id} location={location} />;
          })}
      </div>
    </>
  );
};
