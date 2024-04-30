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
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import HdrWeakIcon from "@mui/icons-material/HdrWeak";

const sx: SxProps = {
  fontSize: "35px",
  cursor: "pointer",
  color: "var(--color-red-title-icon)",
  backgroundColor: "#fff1e8",
  borderRadius: "50px",
};

const FactorizationPage: React.FC = () => {
  const [getMod, setMod] = React.useState<boolean>(false);
  const factorizationState = useSelector(
    (store: RootState) => store.factorization
  );
  const dispatch: AppDispatch = useDispatch();
  const state = data[0].factorizationData;
  const keysObj = factorizationState && Object.keys(factorizationState);

  React.useEffect(() => {
    dispatch(
      FactorActions.setParamsAction({ min: 4, max: 40, length: getMod ? 2 : 1 })
    );
  }, [dispatch, getMod]);

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

  const setMode = () => {
    setMod(!getMod);
  };

  const restartNumber = () =>
    dispatch(
      FactorActions.setParamsAction({ min: 4, max: 40, length: getMod ? 2 : 1 })
    );

  return (
    <TitlePage
      alignMain={"space-between"}
      educationText={state.educationText}
      educationTest={state.educationTest}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <>
          <ST.PVariant2>{state.qvest}</ST.PVariant2>
          <ST.InputBlock>
            <TooltipButt
              text={"Обновить"}
              element={
                <RestartAltIcon onClick={() => restartNumber()} sx={sx} />
              }
            />
            <TooltipButt
              text={getMod ? "Учебный режим" : "Тренировка"}
              element={
                getMod ? (
                  <HdrStrongIcon onClick={() => setMode()} sx={sx} />
                ) : (
                  <HdrWeakIcon onClick={() => setMode()} sx={sx} />
                )
              }
            />
          </ST.InputBlock>
          <ST.Box
            $gridTemplateColumns={
              getMod ? "repeat(2, min(200px))" : "repeat(1, min(200px))"
            }
          >
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
                  <foreignObject x={10} y={0} width="25" height="130">
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
                  <foreignObject x={50} y={0} width="30" height="130">
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
