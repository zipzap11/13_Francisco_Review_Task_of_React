import React, { useState } from "react";
import classes from "./Contact.module.css";
import logo from "../Assets/logo-contact.png";
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
} from "../Validation/index";
import { useHistory } from "react-router";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    message: "",
  });
  const [error, setError] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const history = useHistory();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "fullName") {
      const valFullName = validateName(value);
      if (!valFullName.status) {
        setError((prev) => ({ ...prev, [name]: valFullName.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    if (name === "email") {
      const valEmail = validateEmail(value);
      console.log(valEmail);
      if (!valEmail.status) {
        console.log("masuk");
        setError((prev) => ({ ...prev, [name]: valEmail.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    if (name === "phoneNumber") {
      const valPhoneNumber = validatePhoneNumber(value);
      if (!valPhoneNumber.status) {
        setError((prev) => ({ ...prev, [name]: valPhoneNumber.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formIsValid = true;
    const valFullName = validateName(formData.fullName);
    if (!valFullName.status) {
      setError((prev) => ({ ...prev, fullName: valFullName.message }));
      formIsValid = false;
    }

    const valEmail = validateEmail(formData.email);
    console.log(valEmail);
    if (!valEmail.status) {
      setError((prev) => ({ ...prev, email: valEmail.message }));
      formIsValid = false;
    }

    const valPhoneNumber = validatePhoneNumber(formData.phoneNumber);
    if (!valPhoneNumber.status) {
      setError((prev) => ({ ...prev, phoneNumber: valPhoneNumber.message }));
      formIsValid = false;
    }

    if (formIsValid) {
      history.push("/review");
    }
  }

  return (
    <div className={classes.myContainer}>
      <div className={classes.left}>
        <div className={classes.inner}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={classes.right}>
        <form onSubmit={handleSubmit} action="">
          <h1>Contact Us</h1>
          <div className={classes["form-control"]}>
            <label className={classes.required}>Full Name</label>
            <input
              name="fullName"
              onChange={handleChange}
              placeholder="Your Full Name Here..."
              value={formData.fullName}
              type="text"
              required
            />
            <p className={classes.error}>{error.fullName}</p>
          </div>
          <div className={classes["form-control"]}>
            <label className={classes.required}>Email Address</label>
            <input
              name="email"
              onChange={handleChange}
              placeholder="example@domail.com"
              value={formData.email}
              type="text"
              required
            />
            <p className={classes.error}>{error.email}</p>
          </div>
          <div className={classes["form-control"]}>
            <label className={classes["required"]}>Phone Number</label>
            <input
              name="phoneNumber"
              onChange={handleChange}
              placeholder="08573890xxxxx"
              value={formData.phoneNumber}
              type="text"
              required
            />
            <p className={classes.error}>{error.phoneNumber}</p>
          </div>
          <div className={classes["form-control"]}>
            <label>Nationality</label>
            <select
              required
              name="nationality"
              onChange={handleChange}
              value={formData.nationality}
              id=""
            >
              <option value="">Selected</option>
              <option value="INA">Indonesia</option>
              <option value="FR">French</option>
              <option value="AUS">Australia</option>
            </select>
          </div>
          <div className={classes["form-control"]}>
            <label>Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your Full Name Here..."
            ></textarea>
          </div>
          <button className={classes["btn"]} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
