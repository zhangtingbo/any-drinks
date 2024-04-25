import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import {
  Container,
  Box,
  FormControl,
  OutlinedInput,
  Button,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const drinks = {
  coffee: {},
  coffeeC: {},
  tehO: {},
  coffeeO: {},
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          // paddingLeft: "5px",
          padding: "0px",
          // backgroundColor: "red",
          "@media (min-width:500px)": {
            maxWidth: "500px",
          },
          "@media (min-width:900px)": {
            maxWidth: "900px",
          },
          "@media (min-width:1200px)": {
            maxWidth: "1200px",
          },
        }}
      >
        <Box sx={{ height: "fix-content" }}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {Object.keys(drinks).map((each) => (
              <Box>
                <ListItem alignItems="center">
                  <ListItemAvatar sx={{ minWidth: "48px" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    // primary="Brunch this weekend?"
                    sx={{ minWidth: "120px" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {each}
                        </Typography>
                        {/* {" — I'll be in your neighborhood doing errands this…"} */}
                      </React.Fragment>
                    }
                  />
                  <Stack direction="row" spacing={0}>
                    <IconButton size="small" aria-label="remove">
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <FormControl
                      sx={{
                        width: "80px",
                        // height: "100%",
                      }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        size="small"
                        sx={{ alignContent: "center" }}
                      />
                    </FormControl>
                    <IconButton size="small" aria-label="add">
                      <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                  </Stack>
                </ListItem>
                <Divider variant="inset" component="li" />
              </Box>
            ))}
          </List>

          <Button variant="contained">Submit</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
