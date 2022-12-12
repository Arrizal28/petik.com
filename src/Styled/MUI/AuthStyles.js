import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";
import imgbg from "../../assets/images/bg.png";

export const BoxAuth = styled(Box)({
  justifyContent: "center",
  margin: "auto",
  // maxWidth: 1024,
});

export const Cardss = styled(Card)({
  maxWidth: 800,
  maxHeight: 540,
  justifyContent: "center",
  margin: "10px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: "none",
  // border: "1px solid #3596e7",
});

export const CardLogo = styled(Card)({
  width: 360,
  maxHeight: 540,
  justifyContent: "center",
  margin: "10px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: "none",
  // backgroundColor: "whitesmoke",
  // border: "1px solid #3596e7",
});

export const CardLogin = styled(Card)({
  width: 360,
  height: 250,
  justifyContent: "center",
  margin: "10px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: "none",
  // border: "1px solid #3596e7",
});

export const Cards = styled(Card)({
  maxWidth: 1300,
  maxHeigth: 560,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  backgroundColor: "whitesmoke",
  borderRadius: 20,
  marginTop: 50,
  backgroundImage: `url(${imgbg})`,
});

export const TextFields = styled(TextField)({
  width: 250,
  marginTop: 20,
  borderRadius: 20,
  marginBottom: 20,
  display: "flex",
  margin: 10,
});

export const Buttons = styled(Button)({
  width: 250,
  marginTop: 20,
  marginBottom: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export const Buttonx = styled(Button)({
  width: 250,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginBottom: 20,
});

export const Buttonz = styled(Button)({
  width: 250,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginBottom: 20,
});

export const Links = styled(Link)({
  textDecoration: "none",
});

export const Dividers = styled(Divider)({
  marginTop: 20,
  marginBottom: 17,
});
