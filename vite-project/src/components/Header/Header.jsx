import { useState } from "react";
import { Container } from "../Common/Common.styled";
import {
  ExitButtonHeader,
  ExitButtonHeaderA,
  HeaderM,
  PopUserSetTheme,
} from "./Header.styled";
import { HeaderBlock } from "./Header.styled";
import { HeaderLogo } from "./Header.styled";
import { HeaderNav } from "./Header.styled";
import { ButtonHeader } from "./Header.styled";
import { HeaderUser } from "./Header.styled";
import { HeaderPopUserSet } from "./Header.styled";
import { PopUserSetName } from "./Header.styled";
import { HeaderLogoImg } from "./Header.styled";
import { PopUserSetMail } from "./Header.styled";
import { PopUserSetThemeInput } from "./Header.styled";

function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);

  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }

  return (
    <HeaderM>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <ButtonHeader onClick={addCard}>Создать новую задачу</ButtonHeader>
            <HeaderUser onClick={togglePopUp}>Ivan Ivanov</HeaderUser>
            {isOpened && (
              <HeaderPopUserSet>
                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <PopUserSetTheme>
                  <p>Темная тема</p>
                  <PopUserSetThemeInput type="checkbox" name="checkbox" />
                </PopUserSetTheme>
                <ExitButtonHeader>
                  <ExitButtonHeaderA href="#popExit">Выйти</ExitButtonHeaderA>
                </ExitButtonHeader>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderM>
  );
}

export default Header;
