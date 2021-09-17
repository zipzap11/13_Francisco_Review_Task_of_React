import React from "react";
import classes from "./Review.module.css";
function News() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <ul>
          <li className={classes.data}>
            <p>Full Name</p>
            <p>: data.fullname</p>
          </li>
          <li className={classes.data}>
            <p>Email Address</p>
            <p>: data.email</p>
          </li>
          <li className={classes.data}>
            <p>Phone Number</p>
            <p>: data.phone</p>
          </li>
          <li className={classes.data}>
            <p>Nationality</p>
            <p>: data.nationality</p>
          </li>
          <li className={classes.data}>
            <p>data.message</p>
          </li>
        </ul>
        <div className={classes.divider}>
          <img src="assets/line.png" alt="img" />
        </div>
        <div className={`${classes.feedback} ${classes.fullwidth}`}>
          Thanks for contacting us!
          <br />
          We will be in touch with you shortly.
        </div>
        <div className={classes.fullwidth}>
          <a href="/">
            <button className={classes.btn}>Home</button>
          </a>
        </div>
      </div>
      <footer class={classes.footer}>
        <img src="assets/footerl.png" alt="img" />
      </footer>
    </div>
  );
}

export default News;
