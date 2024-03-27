import Card from "../Card/Card";
import { Cards, MainColumn } from "./Column.styled";
import { ColumnTitle } from "./Column.styled";
import { ColumnTitleP } from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            theme={card.topic}
            name={card.title}
            date={card.date}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}

export default Column;
