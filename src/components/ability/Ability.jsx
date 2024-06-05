import "./ability.scss";
import html from "../../assets/icon/html.svg";
import css from "../../assets/icon/css.svg";
import js from "../../assets/icon/javascript.svg";
import c from "../../assets/icon/c.svg";
import cPlus from "../../assets/icon/c++.svg";
import react from "../../assets/icon/react.svg";
import redux from "../../assets/icon/redux.svg";
import angular from "../../assets/icon/angular-icon.svg";
import ts from "../../assets/icon/typescript-icon.svg";
import git from "../../assets/icon/git-icon.svg";
import github from "../../assets/icon/github-icon.svg";
import sass from "../../assets/icon/sass.svg";
import bootstrap from "../../assets/icon/bootstrap-5.svg";

function Ability() {
  return (
    <>
      <div className="ability">
        <div className="ability-first">
          <div className="hexagon">
            <img src={html} alt="html" />
          </div>
          <div className="hexagon">
            <img src={css} alt="css" />
          </div>
          <div className="hexagon">
            <img src={js} alt="js" />
          </div>
        </div>
        <div className="ability-second">
          <div className="hexagon">
            <img src={c} alt="c" />
          </div>
          <div className="hexagon">
            <img src={cPlus} alt="cplus" />
          </div>
          <div className="hexagon">
            <img src={react} alt="react" />
          </div>
          <div className="hexagon">
            <img src={angular} alt="angular" />
          </div>
        </div>
        <div className="ability-third">
          <div className="hexagon">
            <img src={redux} alt="redux" />
          </div>
          <div className="hexagon">
            <img src={ts} alt="ts" />
          </div>
          <div className="hexagon">
            <img src={bootstrap} alt="bootstrap" />
          </div>
        </div>
        <div className="ability-fourth">
          <div className="hexagon">
            <img src={git} alt="git" />
          </div>
          <div className="hexagon">
            <img src={github} alt="github" />
          </div>
        </div>
        <div className="ability-fifth">
          <div className="hexagon">
            <img src={sass} alt="sass" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Ability;
