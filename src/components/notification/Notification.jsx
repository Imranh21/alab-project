import React from "react";
import ReactDOM from "react-dom";
import classes from "./Notification.module.css";

const notif = document.getElementById("notification");

const Notification = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={classes.notif}>{children}</div>,
    notif
  );
};

export default Notification;
