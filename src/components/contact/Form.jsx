import classes from "./Form.module.css";
import Input from "../formControll/Input";
import Button from "../formControll/Button";
import Textarea from "../formControll/Textarea";

const Form = () => {
  return (
    <div className={classes.formContainer}>
      <form>
        <Input label="First name" placeholder="First name" />
        <Input label="Last name" placeholder="Last name" />
        <Input label="Email" placeholder="Email" />
        <Textarea label="Your message" />
        <Button text="submit" />
      </form>
    </div>
  );
};

export default Form;
