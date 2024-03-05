import Column from "../Column/Column";
import { statusList } from "../../data";

function Main({cardList , isLoaded}) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
              { isLoaded? "Данные загружаются" : statusList.map((status)=> 
                 <Column 
                 key={status}
                 title={status} 
                 cardList={cardList.filter((card) => card.status === status)}
                 />
              )

              }
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
