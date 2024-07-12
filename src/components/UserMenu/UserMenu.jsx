import css from "./UserMenu.module.css"
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { Flex } from "antd";
import { Typography } from "antd";


const { Title } = Typography;

const UserMenu = () => {
  const dispatch = useDispatch();
    const user = useSelector(selectUser);
  return (
    <Flex gap="20px" color="#00000">
      <Title className={css.userName} level={3}>Welcome, {user.name}</Title>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </Flex>
  );
}
export default UserMenu;