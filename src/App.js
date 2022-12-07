import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Succes from "./Pages/Verify/Succes";
import Failed from "./Pages/Verify/Failed";
import Notifications from "./Pages/Account/Profile/Notifications";
import MyOrders from "./Pages/Account/Profile/MyOrders";
import store from "./Redux/store";
import Buyers from "./Pages/Account/Profile/Buyers";
import Settings from "./Pages/Account/Settings/Settings";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NavbarBottom from "./Mobile/Layout/NavbarMobile";
import Account from "./Pages/Account/Profile/Account";
import Protected from "./Components/Protected/Protected";
import EditProfile from "./Pages/Account/Profile/EditProfile";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/auth/verify/succes" element={<Succes />} />
              <Route path="/auth/verify/failed" element={<Failed />} />
              <Route
                path="/account"
                element={
                  <Protected>
                    <Account />
                  </Protected>
                }
              />
              <Route
                path="/account/profile"
                element={
                  <Protected>
                    <Buyers />
                  </Protected>
                }
              />
              <Route
                path="/account/profile/edit"
                element={
                  <Protected>
                    <EditProfile />
                  </Protected>
                }
              />
              <Route
                path="/orders"
                element={
                  <Protected>
                    <MyOrders />
                  </Protected>
                }
              />
              <Route
                path="/notification"
                element={
                  <Protected>
                    <Notifications />
                  </Protected>
                }
              />
              <Route
                path="/account/settings"
                element={
                  <Protected>
                    <Settings />
                  </Protected>
                }
              />
            </Routes>
            <NavbarBottom />
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
