import Wrapper from "../components/Wrapper/Wrapper";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
import Header from "../components/Header/Header";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
import Main from "../components/Main/Main";
import { useState } from "react";
import { useEffect } from "react";
import { cardList } from "../data";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded((isLoaded) => {
        !isLoaded;
      });
    }, 2000);
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: "test",
        title: "test",
        date: "30.10.23",
        status: "Тестирование",
      },
    ]);
  }
  return (
    <>
      <Wrapper>
        {/* <PopNewCard /> */}
        <Outlet/>
        <Header addCard={addCard} />
        <Main cardList={cards} isLoaded={isLoaded} />
      </Wrapper>
    </>
  );
}
