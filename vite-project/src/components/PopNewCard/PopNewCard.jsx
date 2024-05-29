import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import { addNewTaskApi } from "../../api";
import { useUser } from "../../hooks/useUser";
import { appRoutes } from "../../lib/approutes";
import { Link } from "react-router-dom";

function PopNewCard() {
  const {userData} = useUser();

  const [selected, setSelected] = useState();

  const [ newtask, setNewTask] = useState({
    title: "",
    topic : "",
    description : "",
  });

  const handleFormSubmit =async (e) => {
      e.preventDefault()
      const taskData = {
        ...newtask,
        date : selected,
      };

      console.log(taskData)

      try {
        await addNewTaskApi(userData.token , {taskData}).then(() => {
          alert("Добавляю задачу")
        })
      } catch (error) {
        alert(error.message);
      }
  }

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newtask,
      [name]: value,
    });
  };



  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to = {appRoutes.MAIN}>
            <a href="#" className="pop-new-card__close">
              ✖
            </a>
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    value={newtask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={newtask.description}
                    onChange={handleInputChange}
                    defaultValue={""}
                  />
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar selected = {selected} setSelected = {setSelected} />
              </div>
            </div>
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
            <Link  to = {appRoutes.MAIN}>
            <button onClick = {handleFormSubmit} className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
