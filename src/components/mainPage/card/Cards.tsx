import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import ImgMain from "../../../img/imgMain.svg";
import ImgMain2 from "../../../img/imgMain2.svg";

const Cards = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fit, minmax(345px, 400px));
  justify-content: center;
  gap: 16px;
  @media (max-width: 1570px) {
    width: 92%;
  }
`;

const sx = {
  card: { maxWidth: 345, textDecoration: "none", margin: "auto" },
  cardArea: {
    transition: "0.2s",
    backgroundColor: "#ffefdf",
    "&:hover": {
      backgroundColor: "#ffe3c1",
    },
  },
  title: { color: "#9c7952", textAlign: "center" },
};

type arrCardType<T> = Array<{
  text: T;
  path: T;
  img: T;
}>;

const arr: arrCardType<string> = [
  { text: "Что такое натуральные числа", path: "/numperNat", img: ImgMain },
  { text: "Сравнение натуральных чисел", path: "/d", img: ImgMain2 },
  { text: "Сложение натуральных чисел", path: "/s", img: ImgMain2 },
  { text: "Вычитание натуральных чисел", path: "/f", img: ImgMain2 },
  { text: "Умножение натуральных чисел", path: "/g", img: ImgMain2 },
  { text: "Деление натуральных чисел", path: "/s", img: ImgMain2 },
];

const MultiActionAreaCard = () => {
  return (
    <Cards>
      {arr.map(({ text, path, img }, i) => (
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
