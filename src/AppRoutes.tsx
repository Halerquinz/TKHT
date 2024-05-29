import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import CinemasPage from "./pages/CinemasPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import AuthenticationPage from "./pages/AuthenticationPage";
import TimeAndPositionBooking from "./pages/TimeAndPositionBooking";
import EventsPage from "./pages/EventsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      {/* <Route path="/drop-down" element={ <DropdownAddress/> }/> */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/authentication"
          element={
            <Layout>
              <AuthenticationPage />
            </Layout>
          }
        />
        <Route
          path="/time-and-position"
          element={
            <Layout>
              <TimeAndPositionBooking />
            </Layout>
          }
        />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
      <Route
        path="/cinema"
        element={
          <Layout>
            <CinemasPage />
          </Layout>
        }
      />
      <Route
        path="/event"
        element={
          <Layout>
            <EventsPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
