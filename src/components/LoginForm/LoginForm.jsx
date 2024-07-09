import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { logIn } from "../redux/auth/operations";
// import "./LoginForm.css"; // Додаємо підключення стилів

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values,actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className="login-form" autoComplete="off">
        <label>
          Email
          <Field
            type="email"
            name="email"
            placeholder="Enter you email"
            required
          />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter you password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
