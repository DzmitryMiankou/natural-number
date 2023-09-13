import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as RouterLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

type menuArrType<T> = Array<{ text: T; path: T }>;

const menuArr: menuArrType<string> = [
  { text: "Главная", path: "/" },
  { text: "Что такое натуральные числа", path: "/numperNat" },
  { text: "Сравнение натуральных чисел", path: "/comparisonNumb" },
  { text: "Сложение натуральных чисел", path: "/s" },
  { text: "Вычитание натуральных чисел", path: "/f" },
  { text: "Умножение натуральных чисел", path: "/g" },
  { text: "Деление натуральных чисел", path: "/s" },
];

const sx = {
  drawer: { width: 250, bgcolor: "var(--color-white)", height: "100%" },
  listItem: {
    bgcolor: "var(--color-white)",
    height: "100%",
    borderBottom: "2px solid var(--color-yellow-border)",
  },
  listBoot: {
    color: "#9f5500",
    "&.active": {
      color: "var(--color-red)",
      bgcolor: "#ffdfb5",
    },
  },
  icon: {
    color: "#e97b02",
    fontSize: "40px",
    transition: "0.2s",
    "&:hover": {
      color: "var(--color-red)",
    },
  },
};

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
      sx={sx.drawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuArr.map(({ text, path }, index) => (
          <ListItem sx={sx.listItem} key={text} disablePadding title="button">
            <ListItemButton
              component={RouterLink}
              to={`${path}`}
              sx={sx.listBoot}
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
          <Tooltip
            title="Меню"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            enterDelay={1500}
          >
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon sx={sx.icon} />
            </Button>
          </Tooltip>

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
