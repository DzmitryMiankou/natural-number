import React, {
  useCallback,
  ChangeEvent,
  useState,
  useEffect,
  memo,
} from "react";
import {
  Path,
  Path2,
  Path3,
  Polyline,
  Polyline2,
  Polyline3,
  Input,
  Eye1,
  Portal2,
  Portal,
  SVG,
} from "./style";
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
import { SxProps } from "@mui/material";

const sx: SxProps = {
  fontSize: "35px",
  cursor: "pointer",
  color: "var(--color-red-title-icon)",
  backgroundColor: "#fff1e8",
  borderRadius: "50px",
};

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

const move = keyframes`
  0% { stroke-dashoffset: 300;}
  100% { stroke-dashoffset: 0;}
`;

const PathAnim = styled.path`
  fill: none;
  stroke-dasharray: 300;
  animation: ${move} 4s linear;
  stroke: #2a8200;
  stroke-width: 2;
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

const DivisionSVG: React.FC = () => {
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

  const restartNumber = () => dispatch(clearDivisionAction());

  return (
    <SVG x="0px" y="0px" viewBox="0 0 1920 529.3">
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
                type="text"
                autoFocus
              />
            ) : (
              <></>
            )}
          </foreignObject>
        </React.Fragment>
      ))}
      <>
        {endInputData() ? (
          <Portal2>
            <PortalSVG />
          </Portal2>
        ) : (
          <Portal>
            <PortalSVG />
          </Portal>
        )}
      </>
      <foreignObject x="940" y="0" width="35" height="35">
        <TooltipButt
          text={"Обновить"}
          element={<RestartAltIcon onClick={() => restartNumber()} sx={sx} />}
        />
      </foreignObject>
      {endInputData() ? (
        <g>
          <PathAnim
            strokeMiterlimit="10"
            d="M798.6,113.4c2.7-0.6,6.9-1,11.1-1c6.1,0,10,1,12.9,3.4
		c2.4,1.8,3.9,4.6,3.9,8.3c0,4.5-3,8.5-8,10.4v0.1c4.5,1.1,9.7,4.8,9.7,11.8c0,4.1-1.6,7.1-4,9.4c-3.3,3-8.6,4.4-16.3,4.4
		c-4.2,0-7.4-0.3-9.4-0.6V113.4z M804.7,132.7h5.5c6.4,0,10.2-3.4,10.2-7.9c0-5.5-4.2-7.7-10.4-7.7c-2.8,0-4.4,0.2-5.4,0.4V132.7z
		 M804.7,155.3c1.2,0.2,2.9,0.3,5.1,0.3c6.3,0,12.1-2.3,12.1-9.2c0-6.4-5.5-9.1-12.2-9.1h-5V155.3z"
          />
          <PathAnim
            strokeMiterlimit="10"
            d="M869,158.4c-2.2,1.1-6.7,2.2-12.5,2.2c-13.3,0-23.3-8.4-23.3-23.9
		c0-14.8,10-24.8,24.6-24.8c5.9,0,9.6,1.3,11.2,2.1l-1.5,5c-2.3-1.1-5.6-2-9.5-2c-11.1,0-18.4,7.1-18.4,19.5c0,11.5,6.6,19,18.1,19
		c3.7,0,7.5-0.8,9.9-2L869,158.4z"
          />
          <PathAnim
            strokeMiterlimit="10"
            d="M902.4,137.5h-19.2v17.8h21.4v5.3h-27.7v-49.3h26.6v5.3h-20.3v15.6
			h19.2V137.5z M879.6,104.2c0-2,1.6-3.7,3.7-3.7c2,0,3.5,1.6,3.5,3.7s-1.4,3.7-3.5,3.7C881.1,107.9,879.6,106.2,879.6,104.2z
			 M893.2,104.2c0-2,1.5-3.7,3.6-3.7c2.1,0,3.6,1.6,3.6,3.7s-1.4,3.7-3.6,3.7C894.7,107.9,893.2,106.2,893.2,104.2z"
          />
          <PathAnim
            strokeMiterlimit="10"
            d="M925.8,113.4c2.7-0.6,6.9-1,11.1-1c6.1,0,10,1,12.9,3.4
		c2.4,1.8,3.9,4.6,3.9,8.3c0,4.5-3,8.5-8,10.4v0.1c4.5,1.1,9.7,4.8,9.7,11.8c0,4.1-1.6,7.1-4,9.4c-3.3,3-8.6,4.4-16.3,4.4
		c-4.2,0-7.4-0.3-9.4-0.6V113.4z M931.9,132.7h5.5c6.4,0,10.2-3.4,10.2-7.9c0-5.5-4.2-7.7-10.4-7.7c-2.8,0-4.4,0.2-5.4,0.4V132.7z
		 M931.9,155.3c1.2,0.2,2.9,0.3,5.1,0.3c6.3,0,12.1-2.3,12.1-9.2c0-6.4-5.5-9.1-12.2-9.1h-5V155.3z"
          />
          <PathAnim
            strokeMiterlimit="10"
            d="M988.2,137.8h-18.3v17h20.4v5.1h-26.5v-47.2h25.5v5.1h-19.4v14.9
		h18.3V137.8z"
          />
          <PathAnim
            strokeMiterlimit="10"
            d="M998.2,113.3c2.9-0.5,6.8-0.9,11.7-0.9c6,0,10.4,1.4,13.2,3.9
		c2.6,2.2,4.1,5.7,4.1,9.9c0,4.3-1.3,7.6-3.6,10.1c-3.2,3.4-8.5,5.2-14.4,5.2c-1.8,0-3.5-0.1-4.9-0.4v18.9h-6.1V113.3z M1004.3,136
		c1.3,0.3,3,0.5,5,0.5c7.3,0,11.8-3.6,11.8-10.1c0-6.2-4.4-9.2-11.1-9.2c-2.7,0-4.7,0.2-5.7,0.5V136z"
          />
          <PathAnim
            strokeMiterlimit="10"
            d="M1041.5,112.7v19.7h22.8v-19.7h6.2v47.2h-6.2v-22.1h-22.8v22.1h-6.1
		v-47.2H1041.5z"
          />
          <PathAnim
            strokeMiterlimit="10"
            d="M1121.4,135.8c0,16.2-9.9,24.8-21.9,24.8c-12.5,0-21.2-9.7-21.2-23.9
		c0-15,9.3-24.8,21.9-24.8C1113.1,112,1121.4,121.8,1121.4,135.8z M1084.8,136.6c0,10.1,5.5,19.1,15,19.1c9.7,0,15.1-8.9,15.1-19.6
		c0-9.4-4.9-19.2-15-19.2C1089.8,116.9,1084.8,126.2,1084.8,136.6z"
          />
        </g>
      ) : (
        <></>
      )}

      <Hero
        $x={`translateX(${
          endInputData()
            ? get.length * gapeAnim
            : get.length * gapeAnim - gapeAnim
        }px)`}
        $time={`${get.length === 1 ? 0 : 1}s`}
        $anim={endInputData()}
      >
        <path
          id="XMLID_00000062165301448942784280000012332559302885620128_"
          className={svgstyle.st1}
          d="M493.6,251.4c0-86.9-40.1-157.3-89.6-157.3
				s-89.6,70.4-89.6,157.3H493.6z"
        />
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
        <circle className={svgstyle.st3} cx="434.4" cy="159.2" r="25.1" />
        <circle className={svgstyle.st3} cx="368" cy="155.1" r="21.6" />
        <Eye1 className={svgstyle.st10} cx="429.6" cy="157.5" r="9.2" />
        <Eye1 className={svgstyle.st10} cx="368" cy="155.6" r="9.2" />
        <path
          id="XMLID_00000011742463554499203880000015212842669988366216_"
          className={svgstyle.st4}
          d="M400.5,241.6
				c-38.8-9.1-40.1-41.1-40.1-41.1s42.5,21.5,61.5,16c6.4-1.9,12.6-3.9,18-5.7c10.7-3.6,18.4-6.6,18.4-6.6S439.4,250.7,400.5,241.6z
				"
        />
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

        <rect
          id="XMLID_00000016043823093394449270000009189175112191339441_"
          x="311.5"
          y="248.6"
          className={svgstyle.st11}
          width="184.9"
          height="13.4"
        />
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
      </Hero>
    </SVG>
  );
};

export default memo(DivisionSVG);
