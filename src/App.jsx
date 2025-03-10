import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactPage")
);

const App = () => {
    const dispatch = useDispatch();
  
  const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
      dispatch(refreshUser()).unwrap()
        // .then(() => Toaster.success("You are successfully login!")).catch()
    }, [dispatch]);
 

  return isRefreshing ? (
    
    <b>Refreshing user, please wait...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
            // <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
