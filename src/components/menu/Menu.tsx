import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as RouterLink } from "react-router-dom";

type Anchor = "left";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250, bgcolor: "#ffdbae", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Начало", path: "/" },
          { text: "Что такое натуральные числа", path: "/numperNat" },
          { text: "Сравнение натуральных чисел", path: "/d" },
          { text: "Сложение натуральных чисел", path: "/s" },
          { text: "Вычитание натуральных чисел", path: "/f" },
          { text: "Умножение натуральных чисел", path: "/g" },
          { text: "Деление натуральных чисел", path: "/s" },
        ].map(({ text, path }, index) => (
          <ListItem
            sx={{
              bgcolor: "#ffe3c2",
              height: "100%",
              borderBottom: "2px solid #f7c68f",
            }}
            key={text}
            disablePadding
          >
            <ListItemButton
              component={RouterLink}
              to={`${path}`}
              sx={{
                color: "#9f5500",
                "&.active": {
                  color: "#d60005",
                  bgcolor: "#fff8ef",
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              sx={{
                color: "#e97b02",
                fontSize: "40px",
                transition: "0.2s",
                "&:hover": {
                  color: "#d60005",
                },
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
