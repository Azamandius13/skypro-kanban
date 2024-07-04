import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const PopBrowseButtonExit = styled.button`
  width: 86px;
  height: 30px;
  border-radius: 4px;
  padding: 10px, 14px, 10px, 14px;
  background-color: #565eef;
  color: #ffffff;
`;

export const BtnDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
`;

export const PopBrowseCont = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  @media (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media (max-width: ${breakpoints.lg}px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media (max-width: ${breakpoints.lg}px) {
    border-radius: 0;
  }
  @media (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
  }
`;
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CatThemeOrange = styled.div`
  background-color: #ffe4c2;
  color: #ff6d00;
  padding: 8px 20px 8px 20px;
  font-size: 14px;
  border-radius: 24px;
`;

export const CatThemePurple = styled.div`
  background-color: #e9d4ff;
  color: #9a48f1;
  padding: 8px 20px 8px 20px;
  font-size: 14px;
  border-radius: 24px;
`;

export const CatThemeGreen = styled.div`
  background-color: #b4fdd1;
  color: #06b16e;
  padding: 8px 20px 8px 20px;
  font-size: 14px;
  border-radius: 24px;
`;
export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const StatusP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #fff;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: #94a6be;
`;

export const StatusThemeP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;
export const PopBrowseWrap = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.md}px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const BtnGroup = styled.div`
  margin-right: 8px;
  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const BtnBrowseEdit = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right:10px;
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const BtnBrowseEditSave = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background-color: #565eef;
  color: #ffffff;
  margin-right:10px;
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: #000;
  &::-moz-placeholder {
    font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
  }
  @media (max-width: ${breakpoints.md}px) {
    max-width: 100%;    
    height: 37px;
  }
`

