import { useContext, useEffect } from "react";
import { AppContext } from "../../state/Context";
import { useNavigate, NavLink } from "react-router-dom";
import BlogList from "../../components/blogs/BlogList";
import classes from "./Admin.module.css";
import Button from "../../components/formControll/Button";

const Admin = () => {
  const { isAdmin, modalHandler, blogs } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.head}>
          <h2>All Blogs({blogs.length})</h2>
          <button className={classes.addBtn} onClick={() => modalHandler(true)}>
            Add blog
          </button>
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default Admin;
