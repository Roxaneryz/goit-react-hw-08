import css from "./UserMenu.nodule.css"
import { userSelector } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";


export const UserMenu = () => {
  const dispatch = useDispatch();
    const user = userSelector(selectUser);
  return (
    <div className={css.UserMenu}>
      <p>Welocme, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}
