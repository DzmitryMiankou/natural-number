import React from "react";
import { ST } from "./style";
import TitlePage from "../globalComponent/TitlePage";
import data from "../../data/twoLevelData.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  FactorActions,
  ResultName,
  NameEnum,
} from "../../redux/factorizationReducer/factorizationReducer";
import TooltipButt from "../globalComponent/Tooltip";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { SxProps } from "@mui/material";

const sx: SxProps = {
  fontSize: "35px",
  cursor: "pointer",
  color: "var(--color-red-title-icon)",
  backgroundColor: "#fff1e8",
  borderRadius: "50px",
};

const FactorizationPage: React.FC = () => {
  const factorizationState = useSelector(
    (store: RootState) => store.factorization
  );
  const dispatch: AppDispatch = useDispatch();
  const state = data[0].factorizationData;
  const keysObj = factorizationState && Object.keys(factorizationState);

  React.useEffect(() => {
    dispatch(FactorActions.setParamsAction({ min: 4, max: 40, length: 2 }));
  }, [dispatch]);

  const setValue = (
    nameNumb: number,
    ind: number,
    event: React.ChangeEvent<HTMLInputElement>,
    resultDiv: ResultName,
    i: number
  ) => {
    const val: number = +event.target.value;
    const index = `${i}-` + ind;
    if (String(val).length <= 2)
      dispatch(
        FactorActions.setValueAction({ nameNumb, index, val, resultDiv })
      );
  };

  const restartNumber = () =>
    dispatch(FactorActions.setParamsAction({ min: 4, max: 40, length: 2 }));

  return (
    <TitlePage
      alignMain={"space-between"}
      educationText={state.educationText}
      educationTest={state.educationTest}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <>
          <ST.PVariant2>{state.qvest}</ST.PVariant2>
          <TooltipButt
            text={"Обновить"}
            element={<RestartAltIcon onClick={() => restartNumber()} sx={sx} />}
          />
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
                            {Object.keys(data)[0].split("-")[1]}
                          </div>
                        ) : (
                          <ST.Input
                            $rightColor={
                              data[Object.keys(data)[0]] ===
                              Object.keys(data)[0].split("-")[1]
                            }
                            key={"we$%fg" + i + Object.keys(data)[0]}
                            type="number"
                            placeholder="?"
                            maxLength={2}
                            onChange={(e) =>
                              setValue(
                                +dataKey,
                                +Object.keys(data)[0].split("-")[1],
                                e,
                                NameEnum.quotient,
                                i
                              )
                            }
                            value={data[Object.keys(data)[0]]}
                          />
                        )
                      )}
                  </foreignObject>
                  <foreignObject x={50} y={0} width="30" height="115">
                    {factorizationState &&
                      factorizationState[dataKey]?.multiplier.map((data, i) => (
                        <ST.Input
                          $rightColor={
                            data[Object.keys(data)[0]] ===
                            Object.keys(data)[0].split("-")[1]
                          }
                          key={"we$g" + i + Object.keys(data)[0]}
                          type="number"
                          placeholder="?"
                          maxLength={2}
                          onChange={(e) =>
                            setValue(
                              +dataKey,
                              +Object.keys(data)[0].split("-")[1],
                              e,
                              NameEnum.multiplier,
                              i
                            )
                          }
                          value={data[Object.keys(data)[0]]}
                        />
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
