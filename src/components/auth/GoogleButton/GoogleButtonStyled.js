import styled from "styled-components";

export const GoogleButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  .googleButton {
    position: relative;
    padding: 11px 14px;
    width: 150px;
    height: 40px;
    color: #707375;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    background-color: #f5f7fa;
    box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
    border: none;
    cursor: pointer;
  }

  .googleIcon {
    position: absolute;
    top: 11px;
    left: 14px;
  }
`;
