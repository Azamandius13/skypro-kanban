import { Link } from "react-router-dom";
import {
  PopExitContainerMain,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitForm,
  PopExitFormGroup,
  PopExitExitYes,
  PopExitExitNo,
} from "./PopExit.styled";
import { PopExItTtlH2 } from "./PopExit.styled";
import { appRoutes } from "../../lib/approutes";

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
              <Link to={appRoutes.LOGIN}>
                <PopExitExitYes>Да, выйти</PopExitExitYes>
              </Link>
              <PopExitExitNo>Нет, остаться</PopExitExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitContainerMain>
  );
}

export default PopExit;
