import { PopExitContainerMain , PopExitContainer ,PopExitBlock , PopExitTtl, PopExitForm, PopExitFormGroup, PopExitExitYes, PopExitExitNo } from "./PopExit.styled";
import { PopExItTtlH2 } from "./PopExit.styled";


function PopExit() {
    return (
        <PopExitContainerMain>
        <PopExitContainer>
          <PopExitBlock>
            <PopExitTtl>
              <PopExItTtlH2>Выйти из аккаунта?</PopExItTtlH2>
            </PopExitTtl>
            <PopExitForm>
              <PopExitFormGroup>
                <PopExitExitYes>
                  Да, выйти
                </PopExitExitYes>
                <PopExitExitNo>
                  Нет, остаться
                </PopExitExitNo>
              </PopExitFormGroup>
            </PopExitForm>
          </PopExitBlock>
        </PopExitContainer>
      </PopExitContainerMain>
    )
}

export default PopExit;