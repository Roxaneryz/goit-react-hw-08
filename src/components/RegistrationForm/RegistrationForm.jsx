import { Form, Field, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css"

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css["registration-form"]}>
          <label className={css.label}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`${css.input} ${
                errors.name && touched.name ? css.inputError : ""
              }`}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Email
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

//     <Formik
//       initialValues={{ name: "", email: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >   {({ errors, touched }) => {
//       <Form className={css.registrationForm}>
//         <label>
//           Name
//           <Field
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             className={`${css.input} ${errors.name && touched.name ? css.inputError : ""
//               }`}
//           />
//           <ErrorMessage name="name" component="div" className={css.error} />
//         </label>
//         <label>
//           Email
//           <Field
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//           />
//         </label>
//         <label>
//           Password
//           <Field
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             required
//           />
//         </label>
//         <button type="submit">Register</button>
//       </Form>
//   )}
//     </Formik>
// );
// };

export default RegistrationForm