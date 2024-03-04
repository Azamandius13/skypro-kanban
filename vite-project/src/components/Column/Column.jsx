import Card from "../Card/Card";

function Column({ title }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card theme={"Тема карточки"} 
        name ={"Название задачи"} 
        date={"13.03.1993"} />
        <Card theme={"Тема карточки2"} 
        name ={"Название задачи2"} 
        date={"13.03.1993"} />
      </div>
    </div>
  );
}

export default Column;
