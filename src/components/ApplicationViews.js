import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from './animal/AnimalList';
import { LocationProvider } from './location/LocationProvider';
import { LocationList } from './location/LocationList';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { EmployeeList } from './employee/EmployeeList';
import { CustomerProvider } from './customer/CustomerProvider';
import { CustomerList } from './customer/CustomerList';

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <AnimalProvider>
        <Route path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>

      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>
    </>
  );
};
