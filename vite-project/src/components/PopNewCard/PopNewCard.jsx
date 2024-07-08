import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import { appRoutes } from "../../lib/approutes";
import { Link, useOutletContext } from "react-router-dom";
import { CalendarTtl, FormNewArea, FormNewBlock, FormNewCreate, FormNewInput, PopNewCardBlock, PopNewCardCalendar, PopNewCardClose, PopNewCardContainer, PopNewCardContent, PopNewCardForm, PopNewCardS, PopNewCardTtl, PopNewCardWrap, Subttl } from "./PopNewCard.styled";


function PopNewCard() {

  const onCreate = useOutletContext()
  const [selected, setSelected] = useState();
  const [newtask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      ...newtask,
      date: selected,
    };

    onCreate(taskData);

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newtask,
      [name]: value,
    });
  };

  return (
    <PopNewCardS>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
              <PopNewCardTtl>Создание задачи</PopNewCardTtl>
              <Link to={appRoutes.MAIN}>
              <PopNewCardClose>
                ✖
              </PopNewCardClose>
            </Link>
            <PopNewCardWrap>
              <PopNewCardForm>
                <FormNewBlock>
                  <Subttl>
                    Название задачи
                  </Subttl>
                  <FormNewInput
                    type="text"
                    name="title"
                    value={newtask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl>
                    Описание задачи
                  </Subttl>
                  <FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={newtask.description}
                    onChange={handleInputChange}
                    defaultValue={""}
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <PopNewCardCalendar>
                <CalendarTtl>Даты</CalendarTtl>
                <Calendar selected={selected} setSelected={setSelected} />
              </PopNewCardCalendar>
            </PopNewCardWrap>
            {/* <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p className="_green">Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p className="_purple">Copywriting</p>
                  </div>
                </div>
              </div> */}
            <div>
              <div className="radio-toolbar">
                <p className="categories__p subttl">Категория</p>
                <input
                  type="radio"
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <label className="radio1" htmlFor="radio1">
                  Web Design
                </label>

                <input
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange}
                />
                <label className="radio2" htmlFor="radio2">
                  Research
                </label>

                <input
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange}
                />
                <label className="radio3" htmlFor="radio3">
                  Copywriting
                </label>
              </div>
            </div>
            <Link to={appRoutes.MAIN}>
              <FormNewCreate
                onClick={handleFormSubmit}
                id="btnCreate"
              >
                Создать задачу
              </FormNewCreate>
            </Link>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardS>
  );
}

export default PopNewCard;
