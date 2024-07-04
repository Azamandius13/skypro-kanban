import Card from "../Card/Card";
import { Cards, MainColumn } from "./Column.styled";
import { ColumnTitle } from "./Column.styled";
import { ColumnTitleP } from "./Column.styled";
import { format } from "date-fns";


function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            id={card._id}
            key={card._id}
            theme={card.topic}
            name={card.title}
            date={format(card.date , "dd/mm/yy")}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}

export default Column;
