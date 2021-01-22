import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LocationContext } from './LocationProvider';
import { LocationCard } from './LocationCard';
import './Location.css';

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
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
        {locations.map((location) => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </div>
    </>
  );
};
