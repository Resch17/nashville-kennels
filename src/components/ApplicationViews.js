import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from './animal/AnimalList';
import { AnimalForm } from './animal/AnimalForm';
import { LocationProvider } from './location/LocationProvider';
import { LocationList } from './location/LocationList';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { EmployeeList } from './employee/EmployeeList';
import { EmployeeForm } from './employee/EmployeeForm';
import { CustomerProvider } from './customer/CustomerProvider';
import { CustomerList } from './customer/CustomerList';

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

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

      <LocationProvider>
        <EmployeeProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </EmployeeProvider>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>
    </>
  );
};
