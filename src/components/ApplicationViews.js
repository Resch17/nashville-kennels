import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from './animal/AnimalList';
import { AnimalForm } from './animal/AnimalForm';
import { AnimalDetail } from './animal/AnimalDetail';
import { AnimalSearch } from './animal/AnimalSearch';
import { LocationProvider } from './location/LocationProvider';
import { LocationList } from './location/LocationList';
import { LocationForm } from './location/LocationForm';
import { LocationDetail } from './location/LocationDetail';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { EmployeeList } from './employee/EmployeeList';
import { EmployeeForm } from './employee/EmployeeForm';
import { EmployeeDetail } from './employee/EmployeeDetail';
import { CustomerProvider } from './customer/CustomerProvider';
import { CustomerList } from './customer/CustomerList';

export const ApplicationViews = () => {
  return (
    <>
      <CustomerProvider>
        <Route exact path="/">
          <Home />
        </Route>
      </CustomerProvider>

      <AnimalProvider>
        <EmployeeProvider>
          <LocationProvider>
            <Route exact path="/locations">
              <LocationList />
            </Route>
            <Route exact path="/locations/create">
              <LocationForm />
            </Route>
            <Route exact path="/locations/detail/:locationId(\d+)">
              <LocationDetail />
            </Route>
          </LocationProvider>
        </EmployeeProvider>
      </AnimalProvider>

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
          <Route exact path="/employees/detail/:employeeId(\d+)">
            <EmployeeDetail />
          </Route>
        </EmployeeProvider>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals">
              <AnimalSearch />
              <AnimalList />
            </Route>

            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>

            <Route exact path="/animals/detail/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            <Route path="/animals/edit/:animalId(\d+)">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>
    </>
  );
};
