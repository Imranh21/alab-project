import React, { useContext } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import AddForm from "../forms/AddForm";
import { AppContext } from "../../state/Context";
import EditForm from "../forms/EditForm";

const modal = document.getElementById("modal");

const Modal = () => {
  const { isEdit } = useContext(AppContext);

  return ReactDom.createPortal(
    <div className={classes.modalContainer}>
      {isEdit ? <EditForm /> : <AddForm />}
    </div>,
    modal
  );
};

export default Modal;
