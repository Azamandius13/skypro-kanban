import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../lib/approutes";
import {
  BtnBrowseEdit,
  BtnBrowseEditSave,
  BtnDelete,
  BtnGroup,
  CatThemeGreen,
  CatThemeOrange,
  CatThemePurple,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseBlock,
  PopBrowseBtnEdit,
  PopBrowseCont,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseStatus,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  StatusP,
  StatusTheme,
  StatusThemeP,
  StatusThemes,
  Subttl,
} from "./PopBrowse.styled";
import { Calendar } from "../Calendar/Calendar";
import { useCardListContext } from "../../contexts/cardlist";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

function PopBrowse() {
  const { userData } = useUser();
  const { cards, onEdit, onDelete } = useCardListContext();

  const [isEdit, setIsEdit] = useState(false);

  function editSwitch() {
    setIsEdit(!isEdit);
  }

  const { cardId } = useParams();

  let cardtitle;
  let cardtopic;
  let cardstatus;
  let carddescription;
  let carddate;

  if (cards.length) {
    cardtitle = cards.find((card) => card._id === cardId).title;
    cardtopic = cards.find((card) => card._id === cardId).topic;
    cardstatus = cards.find((card) => card._id === cardId).status;
    carddescription = cards.find((card) => card._id === cardId).description;
    carddate = cards.find((card) => card._id === cardId).date;
  }

  const [newcardlist, SetNewCardList] = useState({
    title: cardtitle,
    topic: cardtopic,
    status: cardstatus,
    description: carddescription,
  });

  const [selected, setSelected] = useState(carddate);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetNewCardList({
      ...newcardlist,
      [name]: value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const newcardslistonedit = { ...newcardlist, date: selected };
    onEdit(cardId, userData.token, newcardslistonedit).then(() => editSwitch());
  };

  const deleteTask = () => {
    onDelete(cardId);
  };

  return (
    <PopBrowseCont>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи:{cardtitle}</PopBrowseTtl>
              {cardtopic === "Web Design" ? (
                <>
                  <CatThemeOrange>{cardtopic}</CatThemeOrange>
                </>
              ) : (
                <></>
              )}

              {cardtopic === "Copywriting" ? (
                <>
                  <CatThemePurple>{cardtopic}</CatThemePurple>
                </>
              ) : (
                <></>
              )}

              {cardtopic === "Research" ? (
                <>
                  <CatThemeGreen>{cardtopic}</CatThemeGreen>
                </>
              ) : (
                <></>
              )}
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                {isEdit ? (
                  <>
                    <div className="radio-toolbar_status">
                      <input
                        checked={newcardlist.status === "Без статуса"}
                        type="radio"
                        id="radio1"
                        name="status"
                        value="Без статуса"
                        onChange={handleInputChange}
                      />
                      <label className="radio1_status" htmlFor="radio1">
                        Без статуса
                      </label>

                      <input
                        checked={newcardlist.status === "Нужно сделать"}
                        type="radio"
                        id="radio2"
                        name="status"
                        value="Нужно сделать"
                        onChange={handleInputChange}
                      />
                      <label className="radio1_status" htmlFor="radio2">
                        Нужно сделать
                      </label>

                      <input
                        checked={newcardlist.status === "В работе"}
                        type="radio"
                        id="radio3"
                        name="status"
                        value="В работе"
                        onChange={handleInputChange}
                      />
                      <label className="radio1_status" htmlFor="radio3">
                        В работе
                      </label>

                      <input
                        checked={newcardlist.status === "Тестирование"}
                        type="radio"
                        id="radio4"
                        name="status"
                        value="Тестирование"
                        onChange={handleInputChange}
                      />
                      <label className="radio1_status" htmlFor="radio4">
                        Тестирование
                      </label>

                      <input
                        checked={newcardlist.status === "Готово"}
                        type="radio"
                        id="radio5"
                        name="status"
                        value="Готово"
                        onChange={handleInputChange}
                      />
                      <label className="radio1_status" htmlFor="radio5">
                        Готово
                      </label>
                    </div>
                  </>
                ) : (
                  <StatusTheme>
                    <StatusThemeP>{cardstatus}</StatusThemeP>
                  </StatusTheme>
                )}
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm
                id="formBrowseCard"
                action="#"
              >
                <FormBrowseBlock>
                  <Subttl>
                    Описание задачи
                  </Subttl>
                  <FormBrowseArea
                    name="description"
                    id="textArea01"
                    readOnly={!isEdit}
                    placeholder="Описание задачи"
                    defaultValue={carddescription}
                    onChange={handleInputChange}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>

              <Calendar selected={selected} setSelected={setSelected} />
            </PopBrowseWrap>
            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}
            {isEdit ? (
              <PopBrowseBtnEdit>
                <BtnGroup>
                  <BtnBrowseEditSave
                    onClick={handleEditSubmit}
                  >
                    Сохранить
                  </BtnBrowseEditSave>
                  <BtnBrowseEdit
                    onClick={editSwitch}
                  >
                    Отменить
                  </BtnBrowseEdit>
                  <Link to={appRoutes.MAIN}>
                    <BtnDelete onClick={deleteTask}>Удалить задачу</BtnDelete>
                  </Link>
                </BtnGroup>
                <Link to={appRoutes.MAIN}>
                  <BtnBrowseEditSave>Закрыть</BtnBrowseEditSave>
                </Link>
              </PopBrowseBtnEdit>
            ) : (
              <PopBrowseBtnEdit>
                <BtnGroup>
                  <BtnBrowseEdit
                    onClick={editSwitch}
                  >
                    Редактировать задачу
                  </BtnBrowseEdit>
                  <BtnBrowseEdit
                    onClick={deleteTask}
                  >
                    Удалить задачу
                  </BtnBrowseEdit>
                </BtnGroup>
                <Link to={appRoutes.MAIN}>
                  <BtnBrowseEditSave>
                    Закрыть
                  </BtnBrowseEditSave>
                </Link>
              </PopBrowseBtnEdit>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseCont>
  );
}

export default PopBrowse;
