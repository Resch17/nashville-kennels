import React, { useContext, useEffect, useState } from 'react';
import { AnimalContext } from './AnimalProvider';
import './Animal.css';
import { useParams, useHistory } from 'react-router-dom';

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext);

  const [animal, setAnimal] = useState({});

  const { animalId } = useParams();

  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push('/animals');
    });
  };

  useEffect(() => {
    getAnimalById(animalId).then((res) => {
      setAnimal(res);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="animal">
      <div className="animal__info">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">
          Location: {animal.location?.name}
        </div>
        <div className="animal__owner">Customer: {animal.customer?.name}</div>
      </div>
      <div className="animal__right-side">
        <button className="animal__releaseButton" onClick={handleRelease}>
          Release Animal
        </button>
        <button className="animal__editButton" onClick={()=>{
          history.push(`/animals/edit/${animal.id}`)
        }}>
          Edit Animal
        </button>
      </div>
    </section>
  );
};
