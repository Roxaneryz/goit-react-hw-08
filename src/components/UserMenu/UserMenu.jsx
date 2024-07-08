import css from "./UserMenu.nodule.css"
import { userSelector } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";


export const UserMenu = () => {
    const user = userSelector(selectUser);
  return (
    <div>
      <p>Welocme, {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
}
