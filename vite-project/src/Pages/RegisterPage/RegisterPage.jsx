import { Link } from "react-router-dom";
import {
  ContainerSignup,
  ContainerSignupModal,
  ContainerSignupModalBlock,
  SignUpButton,
  SignUpInput,
  SignUpModalFormGroup,
  SignUpModalFormGroupA,
  SignUpModalFormGroupP,
  SignUpModalFormLogin,
  SignUpModalTtl,
  SignUpModalTtlH2,
  SignUpWrapper,
} from "./RegisterPage.styled";
import { appRoutes } from "../../lib/approutes";

export default function RegisterPage() {
  return (
    <>
      <SignUpWrapper>
        <ContainerSignup>
          <ContainerSignupModal>
            <ContainerSignupModalBlock>
              <SignUpModalTtl>
                <SignUpModalTtlH2>Регистрация</SignUpModalTtlH2>
              </SignUpModalTtl>
              <SignUpModalFormLogin>
                <SignUpInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <SignUpInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <SignUpInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <SignUpButton>Зарегистрироваться</SignUpButton>
                <SignUpModalFormGroup>
                  <SignUpModalFormGroupP>
                    Уже есть аккаунт?{" "}
                    <SignUpModalFormGroupA>
                      <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
                    </SignUpModalFormGroupA>
                  </SignUpModalFormGroupP>
                </SignUpModalFormGroup>
              </SignUpModalFormLogin>
            </ContainerSignupModalBlock>
          </ContainerSignupModal>
        </ContainerSignup>
      </SignUpWrapper>
    </>
  );
}
