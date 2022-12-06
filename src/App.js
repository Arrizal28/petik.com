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
import AccountMobile from "./Mobile/Account/AccountMobile";
import Settings from "./Pages/Account/Settings/Settings";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NavbarBottom from "./Mobile/Layout/NavbarMobile";
import NotificationMobile from "./Mobile/Notification/NotificationMobile";
import Protected from "./Components/Protected/Protected";

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
              <Route path="/profile" element={
              <Protected>
                <Buyers />
              </Protected>
              } />
              <Route path="/orders" element={
              <Protected>
                <MyOrders />
              </Protected>
              } />
              <Route path="/notification" element={
              <Protected>
                <Notifications />
              </Protected>
              } />
              <Route path="/settings" element={
              <Protected>
                <Settings />
              </Protected>
              } />
              <Route path="/m/account" element={
              <Protected>
                <AccountMobile />
              </Protected>
              } />
              <Route path="/m/notification" element={
              <Protected>
                <NotificationMobile />
              </Protected>
              } />
              <Route path="/m/orders" element={
              <Protected>
                <NotificationMobile />
              </Protected>
              } />
              <Route path="/m/settings" element={
              <Protected>
                <NotificationMobile />
              </Protected>
              } />
              <Route path="profile" element={
              <Protected>
                <NotificationMobile />
              </Protected>
              } />
            </Routes>
            <NavbarBottom />
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
