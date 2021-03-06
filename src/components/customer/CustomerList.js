import React, { useContext, useEffect } from 'react';
import { CustomerContext } from './CustomerProvider';
import { CustomerCard } from './CustomerCard';
import './Customer.css';

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getCustomers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="customers">
      {customers.sort((a,b)=>a.name.localeCompare(b.name)).map((customer) => {
        return <CustomerCard key={customer.id} customer={customer} />;
      })}
    </div>
  );
};
