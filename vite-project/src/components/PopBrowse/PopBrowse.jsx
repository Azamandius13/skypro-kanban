import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../lib/approutes";
import { PopBrowseButtonExit } from "./PopBrowse.styled";
import { Calendar } from "../Calendar/Calendar";  
import { useCardListContext } from "../../contexts/cardlist";

function PopBrowse() {

 const cardlist = useCardListContext();

  let { cardId } = useParams();
  let cardtitle = cardlist.find(card => card._id === cardId).title;
  let cardtopic = cardlist.find(card => card._id === cardId).topic;
  let cardstatus =  cardlist.find(card => card._id === cardId).status;
  let carddescription = cardlist.find(card => card._id === cardId).description;
  let carddate = cardlist.find(card => card._id === cardId).date;
 
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


  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи:{cardtitle}</h3>         
                <div className={color}>
                  {cardtopic}
                </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">{cardstatus}</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
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
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder={carddescription}
                    defaultValue={carddescription}
                  />
                </div>
              </form>

              <Calendar selected={carddate}/>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse 1231231">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <Link to={appRoutes.MAIN}>
                <button className="btn-browse__close _btn-bg _hover01">
                  Закрыть
                </button>
              </Link>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <Link to={appRoutes.MAIN}>
                <PopBrowseButtonExit>Закрыть</PopBrowseButtonExit>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
