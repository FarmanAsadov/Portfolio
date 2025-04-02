import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

import "./connection.scss";

function Connection() {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textAreaError, setTextAreaError] = useState("");

  const { t } = useTranslation();

  const onNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3 && e.target.value.length > 0) {
      setNameError("Name must be at least 3 characters long");
      setDisabled(true);
    } else {
      setNameError("");
      setDisabled(false);
    }
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/\S+@\S+\.\S+/.test(e.target.value) && e.target.value.length > 0) {
      setEmailError("Invalid email address");
      setDisabled(true);
    } else {
      setEmailError("");
      setDisabled(false);
    }
  };

  const onTextAreaChange = (e) => {
    setTextArea(e.target.value);
    if (e.target.value.length < 10 && e.target.value.length > 0) {
      setTextAreaError("Message must be at least 10 characters long");
      setDisabled(true);
    } else {
      setTextAreaError("");
      setDisabled(false);
    }
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current.name.value === "" ||
      form.current.email.value === "" ||
      form.current.message.value === ""
    ) {
      // setShowPopup(true);
      console.log("Please fill all the fields");
    } else {
      emailjs
        .sendForm("service_r01nksi", "template_pjc73w8", form.current, {
          publicKey: "JtJ4VNH5kmdEwS7hy",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.name.value = "";
            form.current.email.value = "";
            form.current.message.value = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  useEffect(() => {
    const btn = document.querySelector(".connection-form-btn");
    if (
      name == "" ||
      email == "" ||
      textArea == "" ||
      nameError ||
      emailError ||
      textAreaError
    ) {
      setDisabled(true);
      btn.style.backgroundColor = "gray";
      btn.style.cursor = "not-allowed";
    } else {
      setDisabled(false);
      btn.style.backgroundColor = "#000";
      btn.style.cursor = "pointer";
    }
  }, [name, email, textArea, disabled]);

  return (
    <>
      <div className="connection">
        <h1 className="connection-title">
          {t("Get in touch")}
          <span className="connection-title-point">.</span>
        </h1>
        <p className="connection-description">
          {t(
            "We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Please use the form below to get in touch with us, and we will respond as soon as possible."
          )}
        </p>
        <form onSubmit={sendEmail} ref={form} className="connection-form">
          <input
            className="connection-form-inp"
            type="text"
            value={name}
            name="name"
            onChange={onNameChange}
            id="name"
            placeholder={t("Enter a name")}
          />
          <div className="validations">
            <p className="validations-validation">{t(nameError)}</p>
          </div>
          <input
            className="connection-form-inp"
            type="email"
            value={email}
            name="email"
            id="email"
            onChange={onEmailChange}
            placeholder={t("Enter an email")}
          />
          <div className="validations">
            <p className="validations-validation">{t(emailError)}</p>
          </div>
          <textarea
            className="connection-form-inp textarea"
            name="message"
            value={textArea}
            onChange={onTextAreaChange}
            id="message"
            placeholder={t("Enter a message")}
          />
          <div className="validations">
            <p className="validations-validation">{t(textAreaError)}</p>
          </div>
          <button
            disabled={disabled}
            type="submit"
            className="connection-form-btn"
          >
            {t("SUBMIT")}
          </button>
        </form>
      </div>
    </>
  );
}

export default Connection;
