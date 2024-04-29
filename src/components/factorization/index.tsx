import React from "react";
import { ST } from "./style";
import TitlePage from "../globalComponent/TitlePage";
import data from "../../data/twoLevelData.json";
import { useRandomInt } from "../../hook/randomIntNum";

const FactorizationPage: React.FC = () => {
  const state = data[0].factorizationData;
  const useRandomI = useRandomInt({ min: 4, max: 20, length: 2 });
  const k = useRandomI && Object.keys(useRandomI);

  return (
    <TitlePage
      alignMain={"space-between"}
      educationText={state.educationText}
      educationTest={state.educationTest}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <>
          <ST.PVariant2>{state.qvest}</ST.PVariant2>
          <ST.Box>
            {k?.map((data) => (
              <ST.Block key={data}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 82 141.7"
                  enableBackground="new 0 0 82 141.7"
                  xmlSpace="preserve"
                >
                  <foreignObject x={50} y={0} width="50" height="100">
                    {useRandomI &&
                      useRandomI[data].multiplier.map((data, i) => (
                        <div key={"43ef" + i + data}>{data}</div>
                      ))}
                  </foreignObject>
                  <foreignObject x={10} y={0} width="50" height="100">
                    {useRandomI &&
                      useRandomI[data].quotient.map((data, i) => (
                        <div key={"we$%fg" + i + data}>{data}</div>
                      ))}
                  </foreignObject>
                  <line
                    fill="none"
                    stroke="#1D1D1B"
                    strokeMiterlimit="10"
                    x1="39.5"
                    y1="10.1"
                    x2="39.5"
                    y2="133.6"
                  />
                </svg>
              </ST.Block>
            ))}
          </ST.Box>
        </>
      }
    />
  );
};

export default FactorizationPage;
