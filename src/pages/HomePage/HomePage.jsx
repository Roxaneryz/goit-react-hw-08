// import { useSelector } from "react-redux"
// import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { Link } from "react-router-dom";

const HomePage = () => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h2>Welcome to your Personal Contact Book!</h2>
      <h3>
        Keep your contacts organized. <Link to="/login">Login</Link>
        or <Link to="/register">register</Link> to start now.
      </h3>
    </div>
  );
}

export default HomePage