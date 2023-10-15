import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { StateMaimPageType } from "../../../routes/routes";
import { SxProps } from "@mui/material";
import { ReactComponent as ImgMain } from "../../../img/imgMain.svg";
import { ReactComponent as Comparison } from "../../../img/Comparison.svg";
import { ReactComponent as PlusImg } from "../../../img/plus.svg";
import { ReactComponent as Minus } from "../../../img/minus.svg";
import { ReactComponent as Multiplication } from "../../../img/multiplication.svg";
import { ReactComponent as Division } from "../../../img/Division .svg";

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
    transition: "var(--transition-prop-0_2s)",
    backgroundColor: "var(--color-yellow-card)",
    "&:hover": {
      backgroundColor: "var(--color-yellow-card-hover)",
    },
  },
  title: {
    color: "var(--color-orange-card-title)",
    textAlign: "center",
    height: 50,
  },
};

const MultiActionAreaCard = ({ state }: { state: StateMaimPageType }) => {
  const SVGArr: Array<{
    Img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }> = [
    { Img: ImgMain },
    { Img: Comparison },
    { Img: PlusImg },
    { Img: Minus },
    { Img: Multiplication },
    { Img: Division },
  ];

  const assignObj = () => {
    let newArr = [];
    for (let i in state.main[0].list) {
      const newObj = Object.assign(SVGArr[i], state.main[0].list[i]);
      newArr.push(newObj);
    }
    return newArr;
  };

  return (
    <Cards>
      {assignObj().map(({ text, path, Img }, i) => (
        <Card key={i} component={RouterLink} to={`${path}`} sx={sx.card}>
          <CardActionArea sx={sx.cardArea}>
            <CardMedia component="div">
              <Img
                width={"202%"}
                style={{ marginLeft: "-170px", minHeight: "140px" }}
              />
            </CardMedia>
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
