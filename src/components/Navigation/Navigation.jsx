import selectIsLoggedIn from "../../redux/auth/selectors"
import { useSelector } from 'react-redux'
import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={css.navlink}>
        Home
      </NavLink>
          {isLoggedIn && (<NavLink to="/contacts" className={css.navlink}>
              Your Contacts
          </NavLink>)}
    </nav>
  );
}

export default Navigation