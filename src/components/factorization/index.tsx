import React from "react";
import { ST } from "./style";
import TitlePage from "../globalComponent/TitlePage";
import data from "../../data/twoLevelData.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { FactorActions } from "../../redux/factorizationReducer/factorizationReducer";

const FactorizationPage: React.FC = () => {
  const factorizationState = useSelector(
    (store: RootState) => store.factorization
  );
  const dispatch: AppDispatch = useDispatch();
  const state = data[0].factorizationData;
  const keysObj = factorizationState && Object.keys(factorizationState);

  React.useEffect(() => {
    dispatch(FactorActions.setParamsAction({ min: 4, max: 20, length: 2 }));
  }, [dispatch]);

  console.log(factorizationState);

  const setValue = (
    nameNumb: number,
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val: number = +event.target.value;
    dispatch(FactorActions.setValueAction({ nameNumb, index, val }));
  };

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
                  <line
                    fill="none"
                    stroke="#1D1D1B"
                    strokeMiterlimit="10"
                    x1="39.5"
                    y1="10.1"
                    x2="39.5"
                    y2="133.6"
                  />
                  <foreignObject x={10} y={0} width="25" height="115">
                    {factorizationState &&
                      factorizationState[dataKey]?.quotient.map((data, i) =>
                        i === 0 ? (
                          <div key={"we$%fg" + i + data}>
                            {Object.keys(data)[0]}
                          </div>
                        ) : (
                          <ST.Input
                            $rightColor={3 === +Object.keys(data)[0]}
                            key={"we$%fg" + i + Object.keys(data)[0]}
                            type="number"
                            placeholder="?"
                            onChange={(e) =>
                              setValue(+dataKey, +Object.keys(data)[0], e)
                            }
                            value={data[+Object.keys(data)[0]]}
                          />
                        )
                      )}
                  </foreignObject>
                  <foreignObject x={50} y={0} width="30" height="115">
                    {factorizationState &&
                      factorizationState[dataKey]?.multiplier.map((data, i) => (
                        <div key={"43ef" + i + Object.keys(data)[0]}>
                          {Object.keys(data)[0]}
                        </div>
                      ))}
                  </foreignObject>
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
