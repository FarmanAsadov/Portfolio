import { Link } from "react-router-dom";
import "./footer.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer id="footer">
        <div className="content">
          <p className="content-text">
            &copy; {t("Made by")} Farman Asadov 2024
          </p>
          <ul className="content-direction">
            <Link
              className="content-direction-link"
              to="https://www.linkedin.com/in/farmanasadov"
              target="_blank"
            >
              Linkedin
            </Link>
            /
            <Link
              className="content-direction-link"
              to="https://github.com/FarmanAsadov"
              target="_blank"
            >
              GitHub
            </Link>
            /
            <Link
              className="content-direction-link"
              target="_blank"
              to="https://www.instagram.com/f.esedovv/"
            >
              Instagram
            </Link>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
