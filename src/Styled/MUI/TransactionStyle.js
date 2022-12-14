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

export const CardContainer = styled(Card)({
  height: 100,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 25,
});

export const CardNotif = styled(Card)({
  minHeight: 80,
  justifyContent: "center",
  textAlign: "left",
  alignItems: "center",
  marginTop: 25,
  borderRadius: 10,
  marginBottom: 25,
});

export const CardOrder = styled(Card)({
  maxHeight: "100%",
  justifyContent: "center",
  marginBottom: 25,
  alignItems: "center",
  marginTop: 25,
  borderRadius: 10,
});

export const CardTab = styled(Card)({
  height: 80,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginTop: 5,
});

export const CardPanel = styled(Card)({
  height: 700,
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

export const AirlinesCard = styled(Card)({
  height: 100,
  maxWidth: 150,
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginLeft: 10,
  display: "flex",
  borderRadius: 10,
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
  width: 250,
  marginTop: 20,
  borderRadius: 20,
  display: "flex",
  margin: 10,
});

export const ButtonData = styled(Button)({
  width: 250,
  marginTop: 20,
  borderRadius: 10,
  display: "flex",
  margin: 10,
  marginBottom: 20,
  textAlign: "center",
});

export const FormClass = styled(FormControl)({
  maxWidth: 600,
  width: 250,
  marginTop: 20,
  borderRadius: 20,
  display: "flex",
  margin: 10,
  justifyContent: "center",
});

export const Links = styled(Link)({
  textDecoration: "none",
});

export const Dividers = styled(Divider)({
  border: "solid 1px gray",
});
