import React from "react";
import Maps from "../../components/maps/Maps";
import Address from "../../components/contact/Address";
import classes from "./Contact.module.css";
import Heading from "../../components/heading/Heading";
import Form from "../../components/contact/Form";

const Contact = () => {
  return (
    <div className={classes.section}>
      <div className={classes.wrapper}>
        <Heading
          title="Feel free to contact us"
          shortDescription="You have an idea? We handle all the rest. "
        />
        <div className={classes.content}>
          <Address />
          <div className={classes.box}>
            <div className={classes.left}>
              <Form />
            </div>
            <div className={classes.right}>
              <img src="/images/9.svg" alt="" />
            </div>
          </div>
          <div className={classes.map}>
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
