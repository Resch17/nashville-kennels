import React, { useContext, useEffect, useState } from 'react';
import { AnimalContext } from './AnimalProvider';
import { LocationContext } from '../location/LocationProvider';
import { CustomerContext } from '../customer/CustomerProvider';
import './Animal.css';
import { useHistory, useParams } from 'react-router-dom';

export const AnimalForm = () => {
  const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  const [animal, setAnimal] = useState({
    name: '',
    breed: '',
    locationId: 0,
    customerId: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  const { animalId } = useParams();

  const history = useHistory();

  // get customers state and locations state on mounting of form (initial render)
  useEffect(() => {
    getCustomers()
      .then(getLocations)
      .then(() => {
        if (animalId) {
          getAnimalById(animalId).then((animal) => {
            setAnimal(animal);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleControlledInputChange = (event) => {
    const newAnimal = { ...animal };
    let selectedVal = event.target.value;

    if (event.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal);
    }

    newAnimal[event.target.id] = selectedVal;
    setAnimal(newAnimal);
  };

  const handleClickSaveAnimal = () => {
    const locationId = parseInt(animal.locationId);
    const customerId = parseInt(animal.customerId);

    if (locationId === 0 || customerId === 0) {
      window.alert('Please fill in all fields');
    } else {
      setIsLoading(true);
      if (animalId) {
        updateAnimal({
          id: animal.id,
          name: animal.name,
          breed: animal.breed,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId),
        }).then(() => history.push(`/animals/detail/${animal.id}`));
      } else {
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId),
        }).then(() => history.push('/animals'));
      }
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
            name="name"
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
            name="breed"
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
          <label htmlFor="locationId">Assign to location:</label>
          <select
            value={animal.locationId}
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
            value={animal.customerId}
            name="customerId"
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
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault();
          handleClickSaveAnimal();
        }}
      >
        {animalId ? <>Save Animal</> : <>Add Animal</>}
      </button>
    </form>
  );
};
