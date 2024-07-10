import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import css from "./RegistrationPage.module.css";
const RegistraitionPage = () => {
  return (
    <div className={css.registrationPage}>
      <h1>Create your account</h1>
      <RegistrationForm />
    </div>
  );
}

export default RegistraitionPage