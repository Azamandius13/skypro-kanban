import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../lib/approutes";
import { BtnDelete, PopBrowseButtonExit } from "./PopBrowse.styled";
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

  let color;
  switch (cardtopic) {
    case "Web Design":
      color = "CatThemeOrange";
      break;

    case "Copywriting":
      color = "CatThemePurple";
      break;

    case "Research":
      color = "CatThemeGreen";
      break;
  }

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    SetNewCardList({
      ...newcardlist,
      [name]: value

    });
    console.log("Состояние " + newcardlist);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const newcardslistonedit = { ...newcardlist ,  date : selected  }
    onEdit(cardId, userData.token, newcardslistonedit ).then(() => editSwitch());
  };

  const deleteTask = () => {
    onDelete(cardId);
  };

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи:{cardtitle}</h3>
              <div className={color}>{cardtopic}</div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
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
                        checked={newcardlist.status  === "Нужно сделать"}
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
                        checked={newcardlist.status  === "В работе"}
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
                        checked={newcardlist.status  === "Тестирование"}
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
                        checked={newcardlist.status  === "Готово"}
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
                  <div className="status__theme ">
                    <p>{cardstatus}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    readOnly={!isEdit}
                    placeholder="Описание задачи"
                    defaultValue={carddescription}
                    onChange={handleInputChange}
                  />
                </div>
              </form>

              <Calendar selected={selected} setSelected={setSelected} />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            {isEdit ? (
              <div className="pop-browse__btn-edit ">
                <div className="btn-group">
                  <button
                    onClick={handleEditSubmit}
                    className="btn-edit__edit _btn-bg _hover01"
                  >
                    Сохранить
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={editSwitch}
                  >
                    Отменить
                  </button>
                  <Link to={appRoutes.MAIN}>
                    <BtnDelete onClick={deleteTask}>Удалить задачу</BtnDelete>
                  </Link>
                </div>
                <Link to={appRoutes.MAIN}>
                  <PopBrowseButtonExit>Закрыть</PopBrowseButtonExit>
                </Link>
              </div>
            ) : (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={editSwitch}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    onClick={deleteTask}
                    className="btn-browse__delete _btn-bor _hover03"
                  >
                    Удалить задачу
                  </button>
                </div>
                <Link to={appRoutes.MAIN}>
                  <button className="btn-browse__close _btn-bg _hover01">
                    Закрыть
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
