import React, { useContext, useEffect, useState } from 'react';
import { AnimalContext } from './AnimalProvider';
import { LocationContext } from '../location/LocationProvider';
import { CustomerContext } from '../customer/CustomerProvider';
import './Animal.css';
import { useHistory } from 'react-router-dom';

export const AnimalForm = () => {
  const { addAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
  */
  const [animal, setAnimal] = useState({
    name: '',
    breed: '',
    locationId: 0,
    customerId: 0,
  });

  const history = useHistory();

  // get customers state and locations state on mounting of form (initial render)
  useEffect(() => {
    getCustomers().then(getLocations);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleControlledInputChange = (event) => {
    const newAnimal = { ...animal };

    newAnimal[event.target.id] = event.target.value;
    setAnimal(newAnimal);
  };

  const handleClickSaveAnimal = (event) => {
    event.preventDefault();

    const locationId = parseInt(animal.locationId);
    const customerId = parseInt(animal.customerId);

    if (locationId === 0 || customerId === 0) {
      window.alert('Please select a location');
    } else {
      animal.locationId = locationId;
      animal.customerId = customerId;
      addAnimal(animal).then(() => history.push('/animals'));
    }
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoComplete="off"
            autoFocus
            className="form-control"
            placeholder="Animal name"
            value={animal.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="breed">Animal breed:</label>
          <input
            type="text"
            id="breed"
            onChange={handleControlledInputChange}
            required
            autoComplete="off"
            className="form-control"
            placeholder="Animal breed"
            value={animal.breed}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location:</label>
          <select
            defaultValue={animal.locationId}
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
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select
            defaultValue={animal.customerId}
            name="customer"
            id="customerId"
            onChange={handleControlledInputChange}
            className="form-control"
          >
            <option value="0">Select a customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
        Save Animal
      </button>
    </form>
  );
};
