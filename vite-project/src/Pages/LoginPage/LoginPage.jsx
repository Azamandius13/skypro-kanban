import { Link, useNavigate } from "react-router-dom";
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
import { login } from "../../api";
import { useState } from "react";

export default function LoginPage({ setUserData }) {
  let navigate = useNavigate();

  const loginForm = {
    login: "",
    password: "",
  };


  const [loginData, setLoginData] = useState(loginForm);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginData)
        .then((data) => {
          setUserData(data.user);
        })
        .then(() => {
          navigate(appRoutes.MAIN);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

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
                  value={loginData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <SignIninput
                  value={loginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <ModalBtnEnter onClick={handleLogin}>Войти</ModalBtnEnter>
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
