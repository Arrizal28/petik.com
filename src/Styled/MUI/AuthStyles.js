import { styled } from "@mui/material/styles";
import { Button, Card, TextField, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";
import imgbg from "../../assets/images/bg.png";

export const BoxAuth = styled(Box)({
  justifyContent: "center",
  margin: "auto",
  maxWidth: 1024,
});

export const Cardss = styled(Card)({
  maxwidth: 425,
  height: 540,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
});

export const Cards = styled(Card)({
  maxwidth: 400,
  height: 560,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#3596e7",
  borderRadius: 20,
  marginTop: 50,
  backgroundImage: `url(${imgbg})`,
});

export const TextFields = styled(TextField)({
  maxwidth: 425,
  marginTop: 20,
  borderRadius: 20,
  marginBottom: 20,
  display: "flex",
});

export const Buttons = styled(Button)({
  width: 300,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export const Buttonx = styled(Button)({
  width: 200,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export const Buttonz = styled(Button)({
  width: 150,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export const Links = styled(Link)({
  textDecoration: "none",
});

export const Dividers = styled(Divider)({
  margin: 10,
});
