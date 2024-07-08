import { useContext } from "react";
import { createContext } from "react";

export const CardListContext = createContext(null);

export const useCardListContext = () => {
  const cardlist = useContext(CardListContext);
  return cardlist;
};
