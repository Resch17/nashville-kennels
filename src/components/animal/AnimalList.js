import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AnimalContext } from './AnimalProvider';
import { AnimalCard } from './AnimalCard';
import './Animal.css';

export const AnimalList = () => {
  // This state changes when 'getAnimals()' is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext);

  const [filteredAnimals, setFiltered] = useState([]);

  // useEffect - reach out to the world for something
  // empty array as second parameter === only run function when component is first mounted to DOM
  useEffect(() => {
    getAnimals();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  useEffect(() => {
    if (searchTerms !== '') {
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      setFiltered(animals);
    }
  }, [searchTerms, animals]);

  // react re-renders this component when the state of AnimalList changes - which happens when animals changes
  return (
    <>
      <h2>Animals</h2>
      <button
        onClick={() => {
          history.push('/animals/create');
        }}
      >
        Add Animal
      </button>
      <div className="animals">
        {filteredAnimals
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((animal) => {
            return <AnimalCard key={animal.id} animal={animal} />;
          })}
      </div>
    </>
  );
};
