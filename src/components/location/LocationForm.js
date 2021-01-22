import React, { useContext, useState } from 'react';
import { LocationContext } from './LocationProvider';
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext);

  const [location, setLocation] = useState({
    name: '',
    address: '',
  });

  const history = useHistory();

  const handleControlledInputChange = (e) => {
    const newLocation = { ...location };

    newLocation[e.target.id] = e.target.value;
    setLocation(newLocation);
  };

  const handleClickSaveLocation = (e) => {
    e.preventDefault();

    if (location.name === '' || location.address === '') {
      window.alert('Please fill in all fields');
    } else {
      addLocation(location).then(() => history.push('/locations'));
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoComplete="off"
            autoFocus
            className="form-control"
            placeholder="Location name"
            value={location.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Location address:</label>
          <input
            type="text"
            id="address"
            onChange={handleControlledInputChange}
            required
            autoComplete="off"
            className="form-control"
            placeholder="Location address"
            value={location.address}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Location
      </button>
    </form>
  );
};
