import React, {
  useCallback,
  ChangeEvent,
  useState,
  useEffect,
  memo,
} from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  clearDivisionAction,
  divisionAction,
} from "../../../redux/divisionReducer/DivisionReducer";
import svgstyle from "./herosvg.module.css";
import PortalSVG from "./portal/Portal";
import TooltipButt from "../../globalComponent/Tooltip";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const opacityAnimation = keyframes`
  0% {  opacity: 0.8;
  transform: translate3d(0px, 0px, 0px)  }
  30% {   opacity: 1;  }
  50% {   opacity: 1;
  transform: translate3d(8px, -8px, -8px) }
  100% {  opacity: 0.8;    transform: translate3d(0px, 0px, 0px)}
`;

const eyeAnimation = keyframes`
  0% {transform: translate3d(0, 0, 0)  }
  50% { transform: translate3d(1.5px, 1.5px, 1.5px)}
  100% {transform: translate3d(0, 0, 0)  }
`;

const PortAnimation = keyframes`
  0% {opacity: 1 }
  100% {opacity: 0  }
`;

const SVG = styled.svg`
  position: absolute;
  left: 0;
`;

interface TypeHeroStyle<T> {
  $x?: T;
  $time?: T;
  $anim: boolean;
}

const Hero = styled.g<TypeHeroStyle<string>>`
  transition: ${(prop) => (prop.$anim ? "0.7s" : prop.$time)};
  transform: ${(prop) => prop.$x};
  opacity: ${(prop) => (prop.$anim ? 0 : 100)};
`;

const Portal = styled.g<TypeHeroStyle<string>>`
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation: ${opacityAnimation} 2s infinite;
`;

const Portal2 = styled.g<TypeHeroStyle<string>>`
  animation: ${PortAnimation} 0.7s;
  opacity: 0;
`;

const Eye1 = styled.circle`
  animation: ${eyeAnimation} 1s linear infinite;
`;

const Path = styled.path`
  clip-path: url(#SVGID_00000006670544894118556010000001297253296958155939_);
  fill: #c36800;
`;

const Path2 = styled.path`
  clip-path: url(#SVGID_00000022540486214558732640000001355661067425773990_);
  fill: #534964;
`;

const Path3 = styled.path`
  clip-path: url(#XMLID_00000120527149396981333900000002289385343773982366_);
  fill: #459d00;
`;

const Polyline = styled.polyline`
  clip-path: url(#SVGID_00000168083766855577259950000010481559206585807260_);
  fill: #fbffc3;
`;

const Polyline2 = styled(Polyline)`
  clip-path: url(#SVGID_00000064338344440511096070000007231384928155956652_);
`;

const Polyline3 = styled(Polyline)`
  clip-path: url(#SVGID_00000176740521752885825450000007010337187735720095_);
`;

const Input = styled.input`
  height: 100%;
  background-color: #b56c6c;
  border: none;
  outline: none;
  text-align: center;
  padding: 5px;
  font-size: 70px;
  width: 100%;
  transition: 0.2s;
  &:hover {
    background: #e3b9b9;
  }
`;

const positionY = 291;
const gapeAnim = 450;

interface TypeInpArr<T> {
  x: T;
  y: T;
  matrix: T;
}

const inpArr: Array<TypeInpArr<number>> = [
  { x: 617, y: positionY, matrix: 382 },
  { x: 1016, y: positionY, matrix: 775 },
  { x: 1433, y: positionY, matrix: 1180 },
];

const DivisionSVG = () => {
  const state = useSelector((store: RootState) => store.division);
  const dispatch: AppDispatch = useDispatch();
  const [get, set] = useState<Array<number>>([]);

  const onChangeCommit = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: number) => {
      e.preventDefault();
      const text = (e.target as HTMLInputElement).value;
      dispatch(
        divisionAction({
          key: id,
          value: text,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    let arr: number[] = [];
    arr.push(state.startData[0].result);
    for (let i in state.obj) {
      const index: number = +i;
      const plusIndex = index + 1;
      if (plusIndex === state.startData.length) break;
      if (+state.obj[index].value === arr[index])
        arr.push(state.startData[plusIndex].result);
    }
    set(arr);
  }, [state]);

  const actualInputData = (id: number): string =>
    state.obj.find((n) => n.key === id)?.value ?? "";

  const endInputData = (): boolean =>
    +state.obj[state.obj.length - 1]?.value ===
      +state.startData[state.startData.length - 1].result &&
    +state.obj?.length === +state.startData.length
      ? true
      : false;

  const assignObj = () => {
    let newArr = [];
    for (let i in inpArr) {
      const newObj = Object.assign(inpArr[i], state.startData[i]);
      newArr.push(newObj);
    }
    return newArr;
  };

  const restartNumber = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(clearDivisionAction());
  };

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1920 529.3"
    >
      {assignObj().map(({ x, y, result, a, b, matrix }) => (
        <React.Fragment key={x}>
          <text
            transform={`matrix(1 0 0 1 ${matrix} 390)`}
            className={svgstyle.text}
          >
            {`${a} : ${b} = `}
          </text>
          <foreignObject x={x} y={y} width="147" height="147">
            {get.find((e) => e === +result) ||
            +result === +state.startData[0].result ? (
              <Input
                maxLength={2}
                onChange={(e) => onChangeCommit(e, result)}
                value={actualInputData(result)}
                placeholder="?"
              />
            ) : (
              <></>
            )}
          </foreignObject>
        </React.Fragment>
      ))}
      <>
        {endInputData() ? (
          <Portal2 $anim={endInputData()}>
            <PortalSVG />
          </Portal2>
        ) : (
          <Portal $anim={endInputData()}>
            <PortalSVG />
          </Portal>
        )}
      </>
      <foreignObject x="940" y="0" width="35" height="35">
        <TooltipButt
          text={"Обновить"}
          element={
            <RestartAltIcon
              onClick={(e) => restartNumber(e)}
              sx={{
                fontSize: "35px",
                cursor: "pointer",
                color: "var(--color-red-title-icon)",
                backgroundColor: "#fff1e8",
                borderRadius: "50px",
              }}
            />
          }
        />
      </foreignObject>
      <Hero
        $x={`translateX(${
          endInputData()
            ? get.length * gapeAnim
            : get.length * gapeAnim - gapeAnim
        }px)`}
        $time={`${get.length === 1 ? 0 : 1}s`}
        $anim={endInputData()}
      >
        <g>
          <g>
            <path
              id="XMLID_00000062165301448942784280000012332559302885620128_"
              className={svgstyle.st1}
              d="M493.6,251.4c0-86.9-40.1-157.3-89.6-157.3
				s-89.6,70.4-89.6,157.3H493.6z"
            />
          </g>
          <g>
            <g>
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M493.6,251.4c0-86.9-40.1-157.3-89.6-157.3s-89.6,70.4-89.6,157.3H493.6z"
                    />
                  </defs>
                  <clipPath id="SVGID_00000006670544894118556010000001297253296958155939_">
                    <use xlinkHref="#SVGID_1_" className={svgstyle.use} />
                  </clipPath>
                  <Path
                    d="M297.7,106.2
							l-13.9,173.9c0,0,87.4-28.7,87.4-37.3s9.5-40.7,18.5-50.6c9-10,12.5-28.1,9.6-42.5s-9.1-11.7-11.5-23.9s11.4-24.2,26.1-43.1
							L297.7,106.2z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <circle className={svgstyle.st3} cx="434.4" cy="159.2" r="25.1" />
        <circle className={svgstyle.st3} cx="368" cy="155.1" r="21.6" />
        <Eye1 className={svgstyle.st10} cx="429.6" cy="157.5" r="9.2" />
        <Eye1 className={svgstyle.st10} cx="368" cy="155.6" r="9.2" />
        <g>
          <g>
            <path
              id="XMLID_00000011742463554499203880000015212842669988366216_"
              className={svgstyle.st4}
              d="M400.5,241.6
				c-38.8-9.1-40.1-41.1-40.1-41.1s42.5,21.5,61.5,16c6.4-1.9,12.6-3.9,18-5.7c10.7-3.6,18.4-6.6,18.4-6.6S439.4,250.7,400.5,241.6z
				"
            />
          </g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_00000092421617579668893970000003769758537691165093_"
                        d="M400.5,241.6c-38.8-9.1-40.1-41.1-40.1-41.1
									s42.5,21.5,61.5,16c6.4-1.9,12.6-3.9,18-5.7c10.7-3.6,18.4-6.6,18.4-6.6S439.4,250.7,400.5,241.6z"
                      />
                    </defs>
                    <clipPath id="SVGID_00000168083766855577259950000010481559206585807260_">
                      <use
                        xlinkHref="#SVGID_00000092421617579668893970000003769758537691165093_"
                        className={svgstyle.use}
                      />
                    </clipPath>
                    <Polyline
                      points="
								439.9,208.3 432.2,212.5 430.6,221.6 439.9,221.6 							"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_00000071519909930061405660000017105149037034402718_"
                        d="M400.5,241.6c-38.8-9.1-40.1-41.1-40.1-41.1
									s42.5,21.5,61.5,16c6.4-1.9,12.6-3.9,18-5.7c10.7-3.6,18.4-6.6,18.4-6.6S439.4,250.7,400.5,241.6z"
                      />
                    </defs>
                    <clipPath id="SVGID_00000064338344440511096070000007231384928155956652_">
                      <use
                        xlinkHref="#SVGID_00000071519909930061405660000017105149037034402718_"
                        className={svgstyle.use}
                      />
                    </clipPath>
                    <Polyline2
                      points="
								375.8,238 384.3,235.5 387.8,226.9 378.7,224.9 							"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_00000153705286449282166910000002690130834291100819_"
                        d="M400.5,241.6c-38.8-9.1-40.1-41.1-40.1-41.1
									s42.5,21.5,61.5,16c6.4-1.9,12.6-3.9,18-5.7c10.7-3.6,18.4-6.6,18.4-6.6S439.4,250.7,400.5,241.6z"
                      />
                    </defs>
                    <clipPath id="SVGID_00000176740521752885825450000007010337187735720095_">
                      <use
                        xlinkHref="#SVGID_00000153705286449282166910000002690130834291100819_"
                        className={svgstyle.use}
                      />
                    </clipPath>
                    <Polyline3
                      points="
								365.1,234.7 373.6,232.2 377.1,223.6 368,221.6 							"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <polygon
          className={svgstyle.st1}
          points="345,138.1 348.5,135.6 334.4,95.3 	"
        />
        <polygon
          className={svgstyle.st1}
          points="381.8,251.4 375.4,286.9 381.8,298.3 373.3,298.3 360.4,293.4 373.3,251.4 	"
        />
        <rect
          x="483.7"
          y="137"
          transform="matrix(0.1231 -0.9924 0.9924 0.1231 313.0841 631.4349)"
          className={svgstyle.st8}
          width="60.3"
          height="3.1"
        />
        <polygon
          className={svgstyle.st1}
          points="429.3,248.6 433.8,284.5 443.3,293.5 435.1,296 421.4,295.1 421.2,251.2 	"
        />
        <ellipse
          className={svgstyle.st1}
          cx="334.4"
          cy="95.7"
          rx="14"
          ry="10.2"
        />
        <ellipse
          className={svgstyle.st9}
          cx="334.4"
          cy="95.3"
          rx="10.1"
          ry="7.3"
        />
        <polygon
          className={svgstyle.st1}
          points="451.6,133.7 455.9,133.7 467.9,92.7 	"
        />
        <ellipse
          transform="matrix(0.5814 -0.8136 0.8136 0.5814 120.088 419.4117)"
          className={svgstyle.st1}
          cx="467.6"
          cy="93"
          rx="10.2"
          ry="14"
        />
        <ellipse
          transform="matrix(0.5814 -0.8136 0.8136 0.5814 120.3042 419.5277)"
          className={svgstyle.st9}
          cx="467.9"
          cy="92.8"
          rx="7.3"
          ry="10.1"
        />
        <polygon
          className={svgstyle.st1}
          points="485.2,184.3 506.3,174.1 506.6,165.1 483,176.7 	"
        />
        <rect
          x="506.5"
          y="157.5"
          className={svgstyle.st1}
          width="11.6"
          height="19.1"
        />
        <polygon
          className={svgstyle.st1}
          points="327.6,197.1 306.9,208.1 299.5,203 322.8,190.8 	"
        />
        <rect
          x="292.1"
          y="199.4"
          transform="matrix(0.5891 -0.808 0.808 0.5891 -46.4641 326.55)"
          className={svgstyle.st1}
          width="11.6"
          height="19.1"
        />
        <g>
          <g>
            <rect
              id="XMLID_00000016043823093394449270000009189175112191339441_"
              x="311.5"
              y="248.6"
              className={svgstyle.st11}
              width="184.9"
              height="13.4"
            />
          </g>
          <g>
            <g>
              <g>
                <g>
                  <defs>
                    <rect
                      id="SVGID_00000093897511412539343200000012828256262191082631_"
                      x="311.5"
                      y="248.6"
                      width="184.9"
                      height="13.4"
                    />
                  </defs>
                  <clipPath id="SVGID_00000022540486214558732640000001355661067425773990_">
                    <use
                      xlinkHref="#SVGID_00000093897511412539343200000012828256262191082631_"
                      className={svgstyle.use}
                    />
                  </clipPath>
                  <Path2
                    d="M504,266.7
							l-208.5-1.1l4-6.4c0,0,93.3-4.6,109.8-3.8s91.6,5.2,91.6,5.2L504,266.7z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <defs>
            <path
              id="XMLID_00000093150771132453795790000002894000662242650505_"
              d="M518.1,87.8c-1,0-1.9,0.1-2.8,0.3
				c0.6,0.7,1.1,1.6,1,2.6c-0.2,2.8-1.1,2.5-2.4,2.5s-3,0-3,0s0,1.8,0,3.3c0,1.5-0.6,2-1.8,2c-1,0-3.2,1.2-3.6,1.5
				c0.1,0,0.1,0.3-0.1,1.4c-0.3,1.8-2.5,0.4-2.5,0.4c0,0.4-0.1,0.9-0.1,1.4c0,8.4,6.9,15.3,15.3,15.3s15.3-6.9,15.3-15.3
				C533.4,94.7,526.5,87.8,518.1,87.8z"
            />
          </defs>
          <use
            xlinkHref="#XMLID_00000093150771132453795790000002894000662242650505_"
            className={svgstyle.use2}
          />
          <clipPath id="XMLID_00000120527149396981333900000002289385343773982366_">
            <use
              xlinkHref="#XMLID_00000093150771132453795790000002894000662242650505_"
              className={svgstyle.use}
            />
          </clipPath>
          <Path3
            d="M523.6,84.5
			c0,0,0.2,3.4,0.7,11.2c0.5,7.8-2.8,16.6-6.2,20c-3.4,3.4-5.8,5.5-5.8,5.5l29.1,2.9l0.2-33L523.6,84.5z"
          />
        </g>
      </Hero>
    </SVG>
  );
};

export default memo(DivisionSVG);
