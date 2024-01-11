import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Wrapper from "./components/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { cardList } from "./data";

function App() {

  const [cards , setCards] = useState(cardList)
  const [IsLoaded , setIsLoaded ] = useState(true)

  useEffect(()=> {
    setTimeout(() => {setIsLoaded(false)} , 2000)
  },[])


  function addCard() {
    setCards(
      [
      ...cards,
      {
        id: cards.length + 1,
        theme: "Web Design",
        title: "Название задачи",
        date: "30.10.23",
        status: "Без статуса",
      }
    ])
  }
  

  return (
    <Wrapper>
      <PopExit/>
      <PopNewCard/>
      <PopBrowse/>
      <Header addCard = {addCard}/>
      <Main IsLoaded={IsLoaded} cardList = {cards}/>
    </Wrapper>
  );
}

export default App;
