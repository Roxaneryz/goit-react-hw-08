import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import css from "./LoginPage.module.css"

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <h2>Please, log in</h2>
      <LoginForm />
      <p>
        or <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
export default LoginPage;