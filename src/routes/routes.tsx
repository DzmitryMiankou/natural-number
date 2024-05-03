import React, { Suspense, useEffect } from "react";
import ScrollToTop from "../ScrollTop";
import NProgress from "nprogress";
import { Routes, Route } from "react-router-dom";
import TitlePage from "../components/titlePage/TitlePage";
import LoadingPage from "../components/loadingPage/LoadingPage";
const MainPage = React.lazy(() => import("../components/mainPage/MainPage"));
const OnePage = React.lazy(() => import("../components/onePage/OnePage"));
const PlusPage = React.lazy(() => import("../components/plusPage/PlusPage"));
const MinusPage = React.lazy(() => import("../components/minusPage/MinusPage"));
const MultiplicationPage = React.lazy(
  () => import("../components/multiplicationPage/MultiplicationPage")
);
const DivisionPage = React.lazy(
  () => import("../components/divisionPage/DivisionPage")
);
const ComparisonPage = React.lazy(
  () => import("../components/comparisonPage/ComparisonPage")
);
const FactorizationPage = React.lazy(
  () => import("../components/factorization/index")
);

export interface StateMaimPageType {
  main: Array<{
    title: string;
    list: Array<{ text: string; path: string }>;
    footer: string;
  }>;
}

const PageRoute: React.FC<{ state: StateMaimPageType }> = ({ state }) => {
  const arrToElem: Array<{ element: JSX.Element; path: string }> = [
    { element: <OnePage />, path: "numperNat" },
    { element: <ComparisonPage />, path: "comparisonNumb" },
    { element: <PlusPage />, path: "plusNumber" },
    { element: <MinusPage />, path: "minusNumber" },
    { element: <MultiplicationPage />, path: "multiplicationNumber" },
    { element: <DivisionPage />, path: "divisionNumber" },
    { element: <FactorizationPage />, path: "factorization" },
  ];

  const LazyLoad = () => {
    useEffect(() => {
      NProgress.start();

      return () => {
        NProgress.done();
      };
    });

    return <LoadingPage />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ScrollToTop />
            <TitlePage />
          </>
        }
      ></Route>
      <Route path="five_class">
        <Route
          index
          element={
            <Suspense fallback={<LazyLoad />}>
              <ScrollToTop />
              <MainPage state={state} />
            </Suspense>
          }
        ></Route>
        {arrToElem.map(({ element, path }, i) => (
          <Route
            key={i}
            path={path}
            element={
              <Suspense fallback={<LazyLoad />}>
                {
                  <>
                    <ScrollToTop />
                    <>{element}</>
                  </>
                }
              </Suspense>
            }
          />
        ))}
      </Route>

      <Route
        path="*"
        element={<div>Уппс! Страница не найдена (404-я ошибка)</div>}
      ></Route>
    </Routes>
  );
};

export default PageRoute;
