import { PopExitContainerMain , PopExitContainer ,PopExitBlock , PopExitTtl } from "./PopExit.styled";
import { PopExItTtlH2 } from "./PopExit.styled";


function PopExit() {
    return (
        <PopExitContainerMain>
        <PopExitContainer>
          <PopExitBlock>
            <PopExitTtl>
              <PopExItTtlH2>Выйти из аккаунта?</PopExItTtlH2>
            </PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo">
                  <a href="main.html">Нет, остаться</a>{" "}
                </button>
              </div>
            </form>
          </PopExitBlock>
        </PopExitContainer>
      </PopExitContainerMain>
    )
}

export default PopExit;