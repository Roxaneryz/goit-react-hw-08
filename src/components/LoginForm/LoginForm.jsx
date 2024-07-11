import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css"
import * as Yup from "yup";
// import "./LoginForm.css"; // Додаємо підключення стилів

const LoginForm = () => {
  const dispatch = useDispatch();
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});



  const handleSubmit = (values,actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.loginForm} autoComplete="off">
        <label>
          Email
          <Field
            type="email"
            name="email"
            placeholder="Enter you email"
            required
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter you password"
            required
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
