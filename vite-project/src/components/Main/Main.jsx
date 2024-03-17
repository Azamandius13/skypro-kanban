import Column from "../Column/Column";
import { statusList } from "../../data";
import { Container } from "../Common/Common.styled";
import { MainContainer } from "./Main.styled";
import { MainBlock } from "./Main.styled";
import { MainContent } from "./Main.styled";

function Main({cardList , isLoaded}) {
  return (
    <MainContainer>
      <Container>
        <MainBlock>
          <MainContent>
              { isLoaded? "Данные загружаются" : statusList.map((status)=> 
                 <Column 
                 key={status}
                 title={status} 
                 cardList={cardList.filter((card) => card.status === status)}
                 />
              )
              }
            
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  );
}

export default Main;
