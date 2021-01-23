import React from 'react';
import { Link } from 'react-router-dom';
import './Animal.css';

export const AnimalCard = ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">
      <Link to={`/animals/detail/${animal.id}`}>{animal.name}</Link>
    </h3>
    <div className="animal__breed">Breed: {animal.breed}</div>
    <div className="location__address">Location: {location.name}</div>
    <div className="customer__name">Customer: {customer.name}</div>
  </section>
);
