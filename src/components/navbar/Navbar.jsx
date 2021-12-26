import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useContext } from "react";
import { AppContext } from "../../state/Context";
const Navbar = () => {
  const { isAdmin } = useContext(AppContext);
  return (
    <div className={classes.container}>
      <nav>
        <div className={classes.logo}>
          <img src="/images/39.svg" alt="" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.inactive}`
              }
            >
              Contact
            </NavLink>
          </li>
          {isAdmin ? (
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
              >
                Admin
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.inactive}`
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
