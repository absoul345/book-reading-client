import styled from "styled-components";

const TargetReadStyled = styled.div`
  margin: 0 auto;
  width: 270px;

  background-color: ${({ colors }) => colors.lightColors.secondaryBg};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  .titleWrapper {
    display: flex;
    align-items: center;
    height: 60px;
    background: ${({ colors }) => colors.lightColors.trainingLabel};
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }

  .targetReadTitle {
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.9;
    color: ${({ colors }) => colors.lightColors.secondaryBg};
  }

  .targetReadlist {
    display: flex;
    padding: ${({ state }) =>
      !state ? "55px 25px 55px 25px" : "30px 25px 30px 25px"};
  }

  .targetReadItem {
    text-align: center;
  }

  .targetReadItem:not(:last-child) {
    margin-right: ${({ state }) => (!state ? "20px" : "12px")};
  }

  .targetReadDig {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    width: ${({ state }) => (!state ? "100px" : "63px")};
    height: ${({ state }) => (!state ? "100px" : "63px")};

    font-family: Open Sans;
    font-weight: 700;
    font-size: ${({ state }) => (!state ? "45px" : "35px")};
    line-height: 0.84;

    color: ${({ colors }) => colors.lightColors.digits};
    background: ${({ colors }) => colors.lightColors.iconsActive};
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  }

  .targetReadDigRemain {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 14px;
    width: ${({ state }) => (!state ? "100px" : "63px")};
    height: ${({ state }) => (!state ? "100px" : "63px")};

    font-family: Open Sans;
    font-weight: 700;
    font-size: ${({ state }) => (!state ? "45px" : "35px")};
    line-height: 0.84;

    color: ${({ colors }) => colors.lightColors.accent};
    background: ${({ colors }) => colors.lightColors.iconsActive};
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  }

  .targetReadItemDescription {
    font-weight: 500;
    font-size: ${({ state }) => (!state ? "14px" : "11px")};
    line-height: ${({ state }) => (!state ? "1.21" : "1.18")};

    color: ${({ colors }) => colors.lightColors.secondaryText};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: ${({ state }) => (!state ? "0 45px 0 45px" : "0 30px 0 30px")};
    width: 678px;

    .titleWrapper {
      width: 275px;
      margin-right: ${({ state }) => (!state ? "0" : "19px")};
    }

    .targetReadlist {
      padding: ${({ state }) => (!state ? "20px 0 8px 0" : "20px 0 15px 0")};
    }

    .targetReadItem:not(:last-child) {
      margin-right: ${({ state }) => (!state ? "35px" : "12px")};
    }

    .targetReadDig {
      margin-bottom: 4px;
      font-size: 40px;
      width: 100px;
      height: 60px;
    }

    .targetReadDigRemain {
      margin-bottom: 4px;
      font-size: 40px;
      width: 100px;
      height: 60px;
    }

    .targetReadItemDescription {
      font-size: 11px;
      line-height: 1.18;
    }

    .tabletWrapperStyled {
      padding: ${({ state }) => (!state ? "23px 0 22px 0" : "23px 0 42px 0")};
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 275px;

    .titleWrapper {
      margin-right: 0;
    }

    .targetReadlist {
      padding: ${({ state }) =>
        !state ? "55px 27px 55px 28px" : "72px 9px 76px 17px"};
    }

    .targetReadItem:not(:last-child) {
      margin-right: ${({ state }) => (!state ? "20px" : "12px")};
    }

    .targetReadDig {
      margin-bottom: 14px;
      font-size: 45px;
      width: ${({ state }) => (!state ? "100px" : "66px")};
      height: ${({ state }) => (!state ? "100px" : "66px")};
    }

    .targetReadDigRemain {
      margin-bottom: 14px;
      font-size: 45px;
      width: ${({ state }) => (!state ? "100px" : "66px")};
      height: ${({ state }) => (!state ? "100px" : "66px")};
    }

    .targetReadItemDescription {
      font-size: ${({ state }) => (!state ? "14px" : "12px")};
      line-height: ${({ state }) => (!state ? "1.21" : "1.25")};
    }

    .tabletWrapperStyled {
      padding: 0;
    }
  } ;
`;

export default TargetReadStyled;
