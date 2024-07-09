import Navigation from "../Navigation/Navigation.jsx"
import UserMenu from "../UserMenu/UserMenu.jsx"
import AuthNav from "../AuthNav/AuthNav.jsx"
import css from "./AppBar.module.css"
import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors.js"
// import { NavLink } from "react-router-dom"

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    return (
      <header className={css.header}>
        <Navigation />
        {/* { isLoggedIn && (<NavLink to="/contacts"> Contacts</NavLink>)} */}
        {!isRefreshing && <div> {isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
      </header>
    );
}


export default AppBar;