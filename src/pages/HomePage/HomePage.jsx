// import { useSelector } from "react-redux"
// import { selectIsLoggedIn } from "../../redux/auth/selectors"
// import { Link } from "react-router-dom";
import css from "./HomePage.module.css"

const HomePage = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.homePage}>
      <h1 className={css.welcomeMessage}>
        Welcome to your <br />Personal Contact Book!
        
      </h1>
      <h3 className={css.subMessage}>
        Keep your contacts organized.
        <br />
        Login or register to start now.
      </h3>
    </div>
  );
}


export default HomePage