import { Link } from "react-router-dom";
import {
  ContainerSignin,
  ContainerSigninModal,
  ContainerSigninModalBlock,
  ContainerSigninModalTtl,
  ContainerSigninModalTtlH2,
  LoginPageWrapper,
  ModalBtnEnter,
  ModalFormLogin,
  SignInModalFormGroup,
  SignInModalFormGroupA,
  SignInModalFormGroupP,
  SignIninput,
} from "./LoginPage.styled";
import { appRoutes } from "../../lib/approutes";

export default function LoginPage() {
  return (
    <>
      <LoginPageWrapper>
        <ContainerSignin>
          <ContainerSigninModal>
            <ContainerSigninModalBlock>
              <ContainerSigninModalTtl>
                <ContainerSigninModalTtlH2>Вход</ContainerSigninModalTtlH2>
              </ContainerSigninModalTtl>
              <ModalFormLogin>
                <SignIninput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <SignIninput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <ModalBtnEnter>Войти</ModalBtnEnter>
                <SignInModalFormGroup>
                  <SignInModalFormGroupP>
                    Нужно зарегистрироваться?
                  </SignInModalFormGroupP>
                  <SignInModalFormGroupA>
                    <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                  </SignInModalFormGroupA>
                </SignInModalFormGroup>
              </ModalFormLogin>
            </ContainerSigninModalBlock>
          </ContainerSigninModal>
        </ContainerSignin>
      </LoginPageWrapper>
    </>
  );
}
