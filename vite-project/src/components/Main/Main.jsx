import Column from "../Column/Column";
import { cardList } from "../../data";

export const statuslist = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];


function Main(){
    return (
        <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {statuslist.map((item) => (
                <Column 
                key={item}
                name={item}
                cardList={cardList.filter((card) => card.status === status)}
                />

              ))}
              
            </div>
          </div>
        </div>
      </main>
    )
}

export default Main;