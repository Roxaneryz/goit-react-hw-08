import css from "./UserMenu.nodule.css"
import { useSelector } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";


const UserMenu = () => {
  const dispatch = useDispatch();
    const user = useSelector(selectUser);
  return (
    <div className={css.usemenu}>
      <p>Welocme, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}
export default UserMenu;