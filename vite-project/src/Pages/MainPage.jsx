import Wrapper from "../components/Wrapper/Wrapper";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
import Header from "../components/Header/Header";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
import Main from "../components/Main/Main";
import { useState } from "react";
import { useEffect } from "react";
import { cardList } from "../data";
import { Outlet, useNavigate } from "react-router-dom";
import { addNewTaskApi, getTasks } from "../api";
import { useUser } from "../hooks/useUser";
import { appRoutes } from "../lib/approutes";
import { CardListContext } from "../contexts/cardlist";

export default function MainPage() {
  const { userData } = useUser();
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);
  let navigate = useNavigate();

  function onCreate(taskData) {
    addNewTaskApi(userData.token, taskData)
      .then(() => {
        console.log(userData.token);
        console.log("Добавляю задачу");
        navigate(appRoutes.MAIN);
      })
      .then(() => getTasks({ token: userData.token }))
      .then((data) => {
        console.log(data.tasks);
        setCards(data.tasks);
      })
      .then(() => {
        setIsLoaded(false);
      });
  }

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

  console.log(cards);

  return (
    <>
      <Wrapper>
      <CardListContext.Provider value={cards}>
        {/* <PopNewCard /> */}
        <Outlet context={onCreate} />
        <Header addCard={addCard} userData={userData} />
          <Main cardList={cards} isLoaded={isLoaded} />
        </CardListContext.Provider>
      </Wrapper>
    </>
  );
}
