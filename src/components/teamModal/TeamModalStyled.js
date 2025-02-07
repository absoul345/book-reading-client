import styled from "styled-components";

const FooterStyled = styled.div`
  /* height: 100vh; */
  .TeamModalWrapper {
    overflow-y: scroll;
    padding: 10px;
    width: 300px;
    height: 500px;
    border-color: none;
    background-color: #ffffff;
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
    @media screen and (min-width: 768px) {
      width: 700px;
      height: 650px;
    }
    @media screen and (min-width: 1280px) {
      width: 1000px;
      height: 700px;
      overflow-y: hidden;
    }
  }
  .TeamName {
    margin-top: 5px;
    margin-bottom: 15px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: #6d7a8d;
    /* text-transform: uppercase; */
  }
  .TeamModalList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -10px;
    margin-left: -10px;
    @media screen and (min-width: 1280px) {
      margin-top: -20px;
      margin-left: -20px;
    }
  }
  .TeamModalListItem {
    height: 240px;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    transition: transform 250ms linear;
    &:hover,
    &:focus {
      transform: scale(1.03);
    }
    margin-top: 10px;
    margin-left: 10px;
    flex-basis: calc((100% / 2) - 10px);

    @media screen and (min-width: 768px) {
      height: 300px;
      flex-basis: calc((100% / 4) - 10px);
    }

    @media screen and (min-width: 1280px) {
      height: 300px;
      flex-basis: calc((100% / 6) - 20px);
      margin-top: 20px;
      margin-left: 20px;
    }
  }

  .TeamMemberPhoto {
    margin-bottom: 10px;
    /* width: 180px; */
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    @media screen and (min-width: 768px) {
      /* width: 200px; */
      height: 200px;
    }

    @media screen and (min-width: 1280px) {
      /* width: 150px; */
      height: 200px;
    }
  }
  .TeamMemberInfo {
    display: flex;
  }
  .TeamMemberName {
    margin-bottom: 5px;
    color: #6d7a8d;
    width: 60%;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .TeamMemberPosition {
    margin-bottom: 5px;
    text-align: center;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    color: #858598;
  }
  .SocialList {
    display: flex;
    justify-content: center;
    width: 80px;
    margin-right: auto;
    margin-left: auto;
  }

  .SocialListItem {
    margin-right: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .SocialListLinkIcon {
    fill: #a6abb9;
    animation-name: changeBookColor;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes changeBookColor {
    0% {
      fill: #a6abb9;
    }

    70% {
      fill: #6d7a8d;
    }

    100% {
      fill: #ff6b08;
    }
  }
`;
export default FooterStyled;
