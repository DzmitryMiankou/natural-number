import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { StateMaimPageType } from "../../../routes/rotes";
import { SxProps } from "@mui/material";

const Cards = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fit, minmax(345px, 400px));
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
  @media (max-width: 1570px) {
    width: 92%;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(245px, 400px));
  }
`;

const sx: {
  card: SxProps;
  cardArea: SxProps;
  title: SxProps;
} = {
  card: {
    maxWidth: 345,
    textDecoration: "none",
    transition: "0.5s",
    margin: "auto",
    "&:hover": { transform: "translate(0, -5px)" },
  },
  cardArea: {
    transition: "0.2s",
    backgroundColor: "#ffefdf",
    "&:hover": {
      backgroundColor: "#ffe3c1",
    },
  },
  title: { color: "#9c7952", textAlign: "center", height: 50 },
};

const MultiActionAreaCard = ({ state }: { state: StateMaimPageType }) => {
  return (
    <Cards>
      {state.main[0].list.map(({ text, path, img }, i) => (
        <Card key={i} component={RouterLink} to={`${path}`} sx={sx.card}>
          <CardActionArea sx={sx.cardArea}>
            <CardMedia component="img" height="140" image={img} alt="image" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={sx.title}
              >
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Cards>
  );
};

export default MultiActionAreaCard;
