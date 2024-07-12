import { observable, action } from "mobx";
import React from "react";
import { useLocalObservable } from "mobx-react";
import { ICardProps } from "src/Statiс/interface";

export const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    cardsData: [] as ICardProps[],
    setCards: action(function(responseData: ICardProps[]) {
      store.cardsData = [...store.cardsData, ...responseData];
    }) 
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};