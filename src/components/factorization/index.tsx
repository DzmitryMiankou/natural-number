import React from "react";
import { ST } from "./style";
import TitlePage from "../globalComponent/TitlePage";
import data from "../../data/twoLevelData.json";
import { useRandomInt } from "../../hook/randomIntNum";

const FactorizationPage: React.FC = () => {
  const [get, set] = React.useState<{ val: number; ind: number }[]>([]);
  const state = data[0].factorizationData;
  const useRandomI = useRandomInt({ min: 4, max: 20, length: 2 });
  const keysObj = useRandomI && Object.keys(useRandomI);

  const setValue = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    set((el) => [
      ...el,
      {
        ind: +index,
        val: +event.target.value,
      },
    ]);
  };

  console.log(get);

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
            {keysObj?.map((dataKey) => (
              <ST.Block key={dataKey}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 82 141.7"
                  enableBackground="new 0 0 82 141.7"
                  xmlSpace="preserve"
                >
                  <foreignObject x={10} y={0} width="25" height="115">
                    {useRandomI &&
                      useRandomI[dataKey]?.quotient.map((data, i) =>
                        i === 0 ? (
                          <div key={"we$%fg" + i + data}>{data}</div>
                        ) : (
                          <ST.Input
                            $rightColor={get[i]?.val === +data}
                            key={"we$%fg" + i + data}
                            type="number"
                            placeholder="?"
                            onChange={(e) => setValue(data, e)}
                            value={get[i]?.ind === data ? get[i]?.val : ""}
                          />
                        )
                      )}
                  </foreignObject>
                  <foreignObject x={50} y={0} width="30" height="115">
                    {useRandomI &&
                      useRandomI[dataKey]?.multiplier.map((data, i) => (
                        <div key={"43ef" + i + data}>{data}</div>
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
