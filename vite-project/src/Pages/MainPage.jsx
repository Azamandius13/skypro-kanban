import Wrapper from "../components/Wrapper/Wrapper";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
import Header from "../components/Header/Header";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
import Main from "../components/Main/Main";
import { useState } from "react";
import { useEffect } from "react";
import { cardList } from "../data";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";
import { useUser } from "../hooks/useUser";

export default function MainPage() {

  const {userData} = useUser();

  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getTasks({ token: userData.token })
      .then((data) => {
        console.log(data.tasks);
        setCards(data.tasks);
      })
      .then(() => {
        setIsLoaded(false);
      });
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
        <Outlet />
        <Header addCard={addCard} userData = {userData} />
        <Main cardList={cards} isLoaded={isLoaded} />
      </Wrapper>
    </>
  );
}
