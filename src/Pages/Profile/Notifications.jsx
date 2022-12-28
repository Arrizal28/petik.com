import React, { useEffect, useState } from "react";
import { Badge, Grid, Stack } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { CardNotif } from "../../Styled/MUI/TransactionStyle";
import { FontBlue } from "../../Styled/ComponentUI/Styles";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { notif } from "../../Redux/Actions/userAction";
import CampaignIcon from "@mui/icons-material/Campaign";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

const socket = io(process.env.REACT_APP_SOCKET_API);

function Notifications() {
  const dispatch = useDispatch();
  const [userid, setUserid] = useState();
  const { wai } = useSelector((state) => state.auth);

  useEffect(() => {
    setUserid(wai?.data?.id);
    console.log(userid);
  }, [userid]);

  useEffect(() => {
    socket.on("connect", () => {});
    socket.emit("LOAD_NOTIFICATIONS", 3);
    socket.on(`NOTIFICATIONS-3`, (data) => {
      dispatch(notif(data));
      console.log(data);
      console.log("success");
    });
  }, [dispatch]);

  return (
    <>
      <NavBar socket={socket} wai={wai} />
      <TopPanels />
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          maxWidth: 1024,
          margin: "auto",
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Grid item xs={9}>
            <Grid>
              <CardNotif variant="outlined">
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" style={{ margin: 15 }}>
                  <FontBlue>Notifications</FontBlue>
                  <FontBlue style={{ margin: 10, cursor: "pointer" }}>Mark All Read</FontBlue>
                </Stack>
              </CardNotif>
            </Grid>
            <List sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper", marginBottom: 15 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Badge color="red" variant="dot">
                    <CampaignIcon color="gray" />
                  </Badge>
                </ListItemAvatar>
                <ListItemText>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Ali Connors I'll be in your neighborhood doing errands this…
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Badge color="red" variant="dot">
                    <CampaignIcon color="gray" />
                  </Badge>
                </ListItemAvatar>
                <ListItemText>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Ali Connors I'll be in your neighborhood doing errands this…
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Badge color="red" variant="dot">
                    <CampaignIcon color="gray" />
                  </Badge>
                </ListItemAvatar>
                <ListItemText>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Ali Connors I'll be in your neighborhood doing errands this…
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Badge color="red" variant="dot">
                    <CampaignIcon color="gray" />
                  </Badge>
                </ListItemAvatar>
                <ListItemText>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Ali Connors I'll be in your neighborhood doing errands this…
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Notifications;
