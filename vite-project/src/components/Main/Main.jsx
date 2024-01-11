import Column from "../Column/Column";

export const statuslist = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];


function Main({cardList , IsLoaded}){
    return (
        <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">

              {
                IsLoaded ? 'Loading' : statuslist.map((item) => (
                  <Column 
                  key={item}
                  name={item}
                  cardList={cardList.filter((card) => card.status === item)}
                  />
                ))
              }


          
              
            </div>
          </div>
        </div>
      </main>
    )
}

export default Main;