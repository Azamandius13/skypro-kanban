import Card from "../Card/Card";

function Column({name}) {
    return (
        <div className="main__column column">
        <div className="column__title">
          <p>{name}</p>
        </div>
        <div className="cards">
            <Card name={"Новая карточка"} 
                theme={"Тема"}
                date={"10.12.2023"}
            />
              <Card name={"Новая карточка2"} 
                theme={"Тема2"}
                date={"10.12.2023"}
            />
        </div>
      </div>
    )
}

export default Column;