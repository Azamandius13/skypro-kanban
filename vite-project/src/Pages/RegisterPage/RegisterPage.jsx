import { Link, useNavigate } from "react-router-dom";
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
import { useState } from "react";
import { Registration } from "../../api";

export default function RegisterPage() {
  let navigate = useNavigate();

  const registerForm = {
    login: "",
    name: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(registerForm);

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      await Registration(registerData)
        .then((data) => {
          console.log(data);
        })
        .then(() => {
          navigate(appRoutes.LOGIN);
        });
    } catch (error) {
      alert(error.message);
    }
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

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
                  value={registerData.name}
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  onChange={handleInputChange}
                />
                <SignUpInput
                  value={registerData.login}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  onChange={handleInputChange}
                />
                <SignUpInput
                  value={registerData.password}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  onChange={handleInputChange}
                />
                <SignUpButton onClick={handleRegister}>
                  Зарегистрироваться
                </SignUpButton>
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
