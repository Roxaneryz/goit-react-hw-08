import { Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className="registration-form">
        <label>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Email
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm