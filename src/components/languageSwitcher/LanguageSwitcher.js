import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcherStyled } from "./LanguageSwitcherStyled";
import { ThemeContext } from "../App";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <LanguageSwitcherStyled colors={theme.colors}>
        {i18n.language === "en" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("ru")}>
            EN
          </button>
        )}
        {i18n.language === "ru" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("ua")}>
            RU
          </button>
        )}
        {i18n.language === "ua" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("en")}>
            UA
          </button>
        )}
      </LanguageSwitcherStyled>
    </>
  );
};

export default LanguageSwitcher;
