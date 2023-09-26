import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import OnePage from "../components/onePage/OnePage";
import ComparisonPage from "../components/comparisonPage/ComparisonPage";
import PlusPage from "../components/plusPage/PlusPage";
import MinusPage from "../components/minusPage/MinusPage";
import MultiplicationPage from "../components/multiplicationPage/MultiplicationPage";
import DivisionPage from "../components/divisionPage/DivisionPage";

export interface StateMaimPageType {
  main: Array<{
    title: string;
    list: Array<{ text: string; path: string; img: string }>;
    footer: string;
  }>;
}

const PageRoute = ({ state }: { state: StateMaimPageType }) => {
  const arrToElem: Array<{ element: JSX.Element; path: string }> = [
    { element: <MainPage state={state} />, path: "/" },
    { element: <OnePage />, path: "/numperNat" },
    { element: <ComparisonPage />, path: "/comparisonNumb" },
    { element: <PlusPage />, path: "/plusNumber" },
    { element: <MinusPage />, path: "/minusNumber" },
    { element: <MultiplicationPage />, path: "/multiplicationNumber" },
    { element: <DivisionPage />, path: "/divisionNumber" },
  ];

  return (
    <Routes>
      {arrToElem.map(({ element, path }, i) => (
        <Route key={i} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default PageRoute;
