import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import OnePage from "../components/onePage/OnePage";

const PageRoute = () => {
  const arrToElem: Array<{ element: JSX.Element; path: string }> = [
    { element: <MainPage />, path: "/" },
    { element: <OnePage />, path: "/numperNat" },
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
