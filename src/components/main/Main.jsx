// import { ReactTyped } from "react-typed";
import user from "../../assets/images/myPhoto.png";
import "./main.scss";
import TypeWriter from "../typewriter/TypeWriter";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div id="main">
      <div className="words">
        <h1 className="words-content">{t("Hello")}</h1>
        <h1 className="words-name">
          {t("I am")} <TypeWriter />
        </h1>
        <p className="words-info">
          {t("As a")}{" "}
          <span className="words-info-text">{t("Front-End Developer")}</span>,{" "}
          {t(
            "I create interactive, user-friendly, and visually appealing web experiences using modern technologies."
          )}
        </p>
      </div>
      <div className="container">
        <img className="container-image" src={user} alt="user" />
      </div>
    </div>
  );
}

export default Main;
