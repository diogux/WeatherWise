// CardOrderContext.js
import React, { createContext, useState, useContext } from 'react';

const CardOrderContext = createContext();

export const useCardOrder = () => useContext(CardOrderContext);

export const CardOrderProvider = ({ children }) => {
  const initialOrder = ['Forecast', 'Health', 'Crops', 'Travel', 'Storms'];
  const [cardOrder, setCardOrder] = useState(initialOrder);

  const setOrderAndVisibility = (newOrder) => {
    setCardOrder(newOrder);
  };

  return (
    <CardOrderContext.Provider value={{ cardOrder, setOrderAndVisibility }}>
      {children}
    </CardOrderContext.Provider>
  );
};
