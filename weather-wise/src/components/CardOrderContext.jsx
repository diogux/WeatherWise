import React, { createContext, useState, useContext } from 'react';

const CardOrderContext = createContext();

export const useCardOrder = () => useContext(CardOrderContext);

export const CardOrderProvider = ({ children }) => {
  const [cardOrder, setCardOrder] = useState(['Forecast', 'Daily Advice', 'Health', 'Crops', 'Travel']);

  return (
    <CardOrderContext.Provider value={{ cardOrder, setCardOrder }}>
      {children}
    </CardOrderContext.Provider>
  );
};
