import { styled } from "@mui/material/styles";
import { Box, Button, ButtonGroup, Card, Divider, FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const BoxContainer = styled(Box)({
  maxWidth: 1024,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  margin: "auto",
});

export const CardFlight = styled(Card)({
  height: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 25,
  marginBottom: 120,
  borderRadius: 20,
});

export const CardTab = styled(Card)({
  height: 80,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 5,
});

export const CardSearch = styled(Card)({
  height: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 30,
  display: "flex",
  marginBottom: 30,
});

export const CardTic = styled(Card)({
  height: 100,
  maxWidth: 600,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 5,
  margin: "auto",
  display: "flex",
});

export const CardTick = styled(Card)({
  height: 320,
  maxWidth: 600,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 5,
  margin: "auto",
  display: "flex",
});

export const CardTicket = styled(Card)({
  height: 200,
  maxWidth: 600,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 5,
  margin: "auto",
  display: "flex",
});

export const QRCard = styled(Card)({
  height: 100,
  width: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  margin: "auto",
  display: "flex",
});

export const CardPass = styled(Card)({
  maxHeight: "100%",
  justifyContent: "left",
  textAlign: "left",
  alignItems: "center",
  marginTop: 30,
  display: "flex",
  marginBottom: 30,
});

export const ButtonGroups = styled(ButtonGroup)({
  flexGrow: 1,
  justifyContent: "center",
  display: "flex",
  marginTop: 10,
});

export const ButtonOrder = styled(Button)({
  flexGrow: 1,
  justifyContent: "center",
  display: "flex",
  height: 25,
});

export const FieldData = styled(TextField)({
  maxWidth: 600,
  marginTop: 20,
  borderRadius: 20,
  display: "flex",
  margin: 20,
});

export const ButtonData = styled(Button)({
  width: 300,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  marginLeft: 20,
  marginBottom: 20,
  textAlign: "center",
});

export const FormClass = styled(FormControl)({
  maxWidth: 900,
  marginTop: 20,
  borderRadius: 20,
  display: "flex",
  margin: 20,
  justifyContent: "center",
});

export const Links = styled(Link)({
  textDecoration: "none",
});

export const Dividers = styled(Divider)({
  border: "solid 1px gray",
});
