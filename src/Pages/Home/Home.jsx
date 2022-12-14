import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MediaPromo from "../Media/MediaPromo";
import MediaTag from "../Media/MediaTag";
import MediaPartner from "../Media/MediaPartner";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Components/Header/Header";
import PanelSearch from "../../Components/Panel/PanelSearch";
import Content from "./Content";
import { getwhoami } from "../../Redux/Actions/authaction";
import { useNavigate } from "react-router-dom";
import NavbarBottom from "../../Mobile/Layout/NavbarMobile";
import Domestics from "../Media/Domestic";
import Foreign from "../Media/Foreign";

function Home() {
  const { token, wai } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (token) {
        dispatch(
          getwhoami((status) => {
            if (status === 500) {
              navigate("/login");
            }
          })
        );
      }
    })();
  }, [token, navigate, dispatch]);

  useEffect(() => {
    if (wai?.data?.role === "ADMIN") {
      navigate("/adminhome");
    }
  }, [wai?.data?.role, navigate]);

  return (
    <>
      <Navbar />
      {!token ? (
        <>
          <Header />
          <PanelSearch />
        </>
      ) : (
        <>
          <Content />
        </>
      )}

      <MediaPromo />
      <Domestics />
      <Foreign />
      <MediaTag />
      <MediaPartner />
      <Footer />
      <NavbarBottom />
    </>
  );
}

export default Home;
