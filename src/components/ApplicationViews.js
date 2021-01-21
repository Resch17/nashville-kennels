import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { CustomerCard } from './customer/CustomerCard';
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from './animal/AnimalList';
import { LocationProvider } from './location/LocationProvider';
import { LocationList } from './location/LocationList';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { EmployeeList } from './employee/EmployeeList';

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <AnimalProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>

      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <Route path="/customers">
        <CustomerCard />
      </Route>
      
      <EmployeeProvider>
        <Route path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>
    </>
  );
};
