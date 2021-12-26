import classes from "./Address.module.css";
import { BsFillPhoneFill } from "react-icons/bs";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const Address = () => {
  return (
    <div className={classes.address}>
      <div className={classes.item}>
        <BsFillPhoneFill />
        <p>+8801884713839</p>
      </div>
      <div className={classes.item}>
        <HiMail />
        <p>ImranArafat221@gmail.com</p>
      </div>
      <div className={classes.item}>
        <HiLocationMarker />
        <p>Mirpur, Dhaka</p>
      </div>
    </div>
  );
};

export default Address;
