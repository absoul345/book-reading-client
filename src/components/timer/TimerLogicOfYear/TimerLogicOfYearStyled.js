import styled from "styled-components";

export const TimerLogicOfYearStyled = styled.div`
  position: relative;
  display: flex;
  min-width: 270px;
  height: 60px;

  background-color: ${(props) => props.colors.secondaryBg};
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);

  @media (max-width: 767px) {
    margin-bottom: 46px;
  }

  @media (min-width: 768px) {
    width: 290px;
    margin-right: 30px;
  }

  @media (min-width: 1280px) {
    margin-right: 68px;
  }

  .upText {
    position: absolute;
    top: -38px;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translateX(-50%);

    line-height: 2.71;
    font-size: 14px;
    font-weight: 500;

    color: ${(props) => props.colors.secondaryText};
  }

  .time {
    position: relative;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 1.52;
    margin-left: 10px;

    color: ${(props) => props.colors.digits};
  }

  .time:first-child {
    margin-left: auto;
  }
  .time:last-child {
    margin-right: auto;
  }

  .text {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);

    font-family: Montserrat;
    font-weight: 500;
    font-size: 10px;
    line-height: 3.8;

    color: ${(props) => props.colors.secondaryText};
  }
`;
