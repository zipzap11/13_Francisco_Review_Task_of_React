import React from "react";
import classes from "./Contact.module.css";
import logo from "../Assets/logo-contact.png";
function Contact() {
  return (
    <div className={classes.myContainer}>
      <div className={classes.left}>
        <div className={classes.inner}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={classes.right}>
        <form action="">
          <h1>Contact Us</h1>
          <div className={classes["form-control"]}>
            <label className={classes.required} for="">
              Full Name
            </label>
            <input placeholder="Your Full Name Here..." type="text" required />
          </div>
          <div className={classes["form-control"]}>
            <label className={classes.required} for="">
              Email Address
            </label>
            <input placeholder="example@domail.com" type="text" required />
          </div>
          <div className={classes["form-control"]}>
            <label className={classes["required"]} for="">
              Phone Number
            </label>
            <input placeholder="08573890xxxxx" type="text" required />
          </div>
          <div className={classes["form-control"]}>
            <label for="">Nationality</label>
            <select name="" id="">
              <option value="">Selected</option>
              <option value="">Indonesia</option>
              <option value="">French</option>
              <option value="">Australia</option>
              <img src="assets/arrow-down.png" alt="img" />
            </select>
          </div>
          <div className={classes["form-control"]}>
            <label for="">Message</label>
            <textarea placeholder="Your Full Name Here..."></textarea>
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
