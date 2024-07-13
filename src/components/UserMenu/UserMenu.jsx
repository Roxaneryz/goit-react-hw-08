import css from "./UserMenu.module.css"
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { Flex } from "antd";
import { Typography } from "antd";


const { Title } = Typography;

// const TypographyWrapper = styled.div`
//   color: white;
// `;

const UserMenu = () => {
  const dispatch = useDispatch();
    const user = useSelector(selectUser);
  return ( 
    <Flex gap="20px" className={css.userName}>
      <Title level={3}>Welcome, {user.name}</Title>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Flex>
  );
}
export default UserMenu;