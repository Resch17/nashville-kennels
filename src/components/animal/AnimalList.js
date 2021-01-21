import React, { useContext, useEffect } from 'react';
import { AnimalContext } from './AnimalProvider';
import { AnimalCard } from './AnimalCard';
import './Animal.css';

export const AnimalList = () => {
  // This state changes when 'getAnimals()' is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  // useEffect - reach out to the world for something
  // empty array as second parameter: only run function when component is first mounted to DOM
  useEffect(() => {
    console.log('AnimalList: useEffect - getAnimals');
    getAnimals();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="animals">
      {console.log('AnimalList: Render', animals)}
      {animals.map((animal) => {
        return <AnimalCard key={animal.id} animal={animal} />;
      })}
    </div>
  );
};
