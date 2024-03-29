import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SvgStyle from "./HeroSVGStyle.module.css";

const posAnimation = keyframes`
  0% {  transform: translateY(0px);  }
  50% {transform: translateY(10px);}
  100% {  transform: translateY(0px);  }
`;

const posAnimation2 = keyframes`
  0% {  transform: translateY(0px);   }
  50% {transform: translateY(6px); }
  100% {  transform: translateY(0px); rotate: 0deg }
`;

interface EyeStyleType {
  $logic: boolean;
}

interface Hero1StyleType {
  $logic: string | any;
}

interface VisabiliType<T> {
  $bgcolor: T;
}

const SVG = styled.svg`
  position: absolute;
  bottom: 0;
  display: inline-block;
`;

const Path0 = styled.path`
  clip-path: url(#SVGID_00000040569316231092944620000005445735015344012984_);
  fill: #c36800;
`;

const Hero2 = styled.g`
  cursor: pointer;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: wheat;
  font-size: 40px;
`;

const ForObg = styled.foreignObject<VisabiliType<string>>`
  background-color: ${(prop) => prop.$bgcolor};
  width: 230px;
  height: 61px;
  rotate: 5.5deg;
`;

const Eye1 = styled.circle<EyeStyleType>`
  transition: 0.5s;
  transform: ${(prop) =>
    prop.$logic ? "translateX(10px)" : "translateX(0px)"};
`;

const Chere1 = styled.g<Hero1StyleType>`
  animation: ${(prop) => prop.$logic} 0.8s linear infinite;
`;

const Chere2 = styled(Chere1)<Hero1StyleType>``;

const Gg = styled.g`
  @media (max-width: 1000px) {
    transform: translate(-280px, 25px);
  }
`;

const HeroSVG: React.FC = () => {
  const [get, set] = useState<boolean>(false);
  const [get1, set1] = useState<boolean>(false);
  const [getQv, setQV] = useState<boolean>(false);
  const [getQv2, setQV2] = useState<boolean>(false);

  const handleClickHero = (id: number) => {
    const timerId1 = setTimeout(() => setQV(false), 2000);
    const timerId2 = setTimeout(() => setQV2(false), 2000);
    if (id === 1) {
      clearTimeout(timerId2);
      setQV2(false);
      return setQV(true);
    }
    if (id === 2) {
      clearTimeout(timerId1);
      setQV(false);
      return setQV2(true);
    }
    return;
  };

  return (
    <SVG x="0px" y="0px" viewBox="0 0 1920 529.3">
      <>
        {getQv || getQv2 === true ? (
          <ForObg x="320" y="173" $bgcolor={getQv2 ? "green" : "red"}>
            <Text>{getQv2 ? "Верно" : "Неверно"}</Text>
          </ForObg>
        ) : (
          <></>
        )}
      </>
      <polygon
        className={SvgStyle.st0}
        points="901.1,348.4 914,390.4 901.1,395.3 892.6,395.3 899,383.9 892.6,348.4 "
      />
      <polygon
        className={SvgStyle.st0}
        points="853.2,348.2 853,392.1 839.3,393 831.1,390.5 840.6,381.5 845.1,345.6 "
      />
      <Chere1 $logic={get ? posAnimation : false}>
        <polygon
          className={SvgStyle.st0}
          points="940,192.3 925.9,232.6 929.4,235.1 "
        />
        <ellipse
          className={SvgStyle.st0}
          cx="940"
          cy="192.7"
          rx="14"
          ry="10.2"
        />
        <ellipse
          className={SvgStyle.st7}
          cx="940"
          cy="192.3"
          rx="10.1"
          ry="7.3"
        />
        <polygon
          className={SvgStyle.st0}
          points="806.5,189.7 818.5,230.7 822.8,230.7 "
        />
        <ellipse
          transform="matrix(0.8136 -0.5814 0.5814 0.8136 39.8925 504.4978)"
          className={SvgStyle.st0}
          cx="806.8"
          cy="190"
          rx="14"
          ry="10.2"
        />
        <ellipse
          transform="matrix(0.8136 -0.5814 0.5814 0.8136 39.996 504.2898)"
          className={SvgStyle.st7}
          cx="806.5"
          cy="189.8"
          rx="10.1"
          ry="7.3"
        />
        <polygon
          className={SvgStyle.st9}
          points="768.1,271.1 766.4,272.3 712.5,199 714,197.9 "
        />
        <Hero2
          onMouseEnter={() => set(!get)}
          onMouseLeave={() => set(!get)}
          onClick={() => handleClickHero(1)}
        >
          <path
            id="XMLID_00000062165301448942784280000012332559302885620128_"
            className={SvgStyle.st0}
            d="M960,348.4c0-86.9-40.1-157.3-89.6-157.3
			s-89.6,70.4-89.6,157.3H960z"
          />
          <defs>
            <path
              id="SVGID_1_"
              d="M960,348.4c0-86.9-40.1-157.3-89.6-157.3s-89.6,70.4-89.6,157.3H960z"
            />
          </defs>
          <clipPath id="SVGID_00000040569316231092944620000005445735015344012984_">
            <use xlinkHref="#SVGID_1_" className={SvgStyle.useStyle} />
          </clipPath>
          <Path0
            d="M860.5,179.7
				c14.7,18.9,28.5,30.9,26.1,43.1s-8.6,9.5-11.5,23.9s0.6,32.5,9.6,42.5c9,9.9,18.5,42,18.5,50.6s87.4,37.3,87.4,37.3l-13.9-173.9
				L860.5,179.7z"
          />
          <circle className={SvgStyle.st2} cx="840" cy="256.2" r="25.1" />
          <circle className={SvgStyle.st2} cx="906.4" cy="252.1" r="21.6" />
          <path
            id="XMLID_00000011742463554499203880000015212842669988366216_"
            className={SvgStyle.st3}
            d="M816.1,301.2c0,0,7.7,3,18.4,6.6
			c5.4,1.8,11.6,3.8,18,5.7c19,5.5,61.5-16,61.5-16s-1.3,32-40.1,41.1C835,347.7,816.1,301.2,816.1,301.2z"
          />
          <defs>
            <path
              id="SVGID_00000019658212616479865930000016576359054924555920_"
              d="M816.1,301.2c0,0,7.7,3,18.4,6.6
						c5.4,1.8,11.6,3.8,18,5.7c19,5.5,61.5-16,61.5-16s-1.3,32-40.1,41.1C835,347.7,816.1,301.2,816.1,301.2z"
            />
          </defs>
          <clipPath id="SVGID_00000082345602861333509080000017255493794221779627_">
            <use
              xlinkHref="#SVGID_00000019658212616479865930000016576359054924555920_"
              className={SvgStyle.useStyle}
            />
          </clipPath>
          <polyline
            className={SvgStyle.polyline1}
            points="
					834.5,318.6 843.8,318.6 842.2,309.5 834.5,305.3 				"
          />
          <defs>
            <path
              id="SVGID_00000090294655736790898530000017404614214311739274_"
              d="M816.1,301.2c0,0,7.7,3,18.4,6.6
						c5.4,1.8,11.6,3.8,18,5.7c19,5.5,61.5-16,61.5-16s-1.3,32-40.1,41.1C835,347.7,816.1,301.2,816.1,301.2z"
            />
          </defs>
          <clipPath id="SVGID_00000018958686396590104700000005010137129950897280_">
            <use
              xlinkHref="#SVGID_00000090294655736790898530000017404614214311739274_"
              className={SvgStyle.useStyle}
            />
          </clipPath>
          <polyline
            className={SvgStyle.polyline2}
            points="
					895.7,321.9 886.6,323.9 890.1,332.5 898.6,335 				"
          />
          <defs>
            <path
              id="SVGID_00000080203581319407085410000009585658993742108812_"
              d="M816.1,301.2c0,0,7.7,3,18.4,6.6
						c5.4,1.8,11.6,3.8,18,5.7c19,5.5,61.5-16,61.5-16s-1.3,32-40.1,41.1C835,347.7,816.1,301.2,816.1,301.2z"
            />
          </defs>
          <clipPath id="SVGID_00000092446780817465790100000017144739487967930508_">
            <use
              xlinkHref="#SVGID_00000090294655736790898530000017404614214311739274_"
              className={SvgStyle.useStyle}
            />
          </clipPath>
          <polyline
            className={SvgStyle.polyline3}
            points="
					906.4,318.6 897.3,320.6 900.8,329.2 909.3,331.7 				"
          />
          <Eye1
            $logic={get}
            className={SvgStyle.st8}
            cx="844.8"
            cy="254.5"
            r="9.2"
          />
          <Eye1
            $logic={get}
            className={SvgStyle.st8}
            cx="906.4"
            cy="252.6"
            r="9.2"
          />
          <circle className={SvgStyle.st10} cx="709.4" cy="191" r="48.8" />
          <path
            className={SvgStyle.st8}
            d="M710,219.4v-14.8h-25.2v-4.8l24.2-34.7h7.9v33.8h7.6v5.8h-7.6v14.8H710V219.4z M710,198.9v-18.2
		c0-2.8,0.1-5.7,0.3-8.5H710c-1.7,3.2-3,5.5-4.5,8l-13.3,18.5v0.2H710z"
          />
        </Hero2>
        <polygon
          className={SvgStyle.st0}
          points="791.4,273.7 767.8,262.1 768.1,271.1 789.2,281.3 "
        />
        <rect
          x="756.3"
          y="254.5"
          className={SvgStyle.st0}
          width="11.6"
          height="19.1"
        />
        <polygon
          className={SvgStyle.st0}
          points="951.6,287.8 974.9,300 967.5,305.1 946.8,294.1 "
        />
        <rect
          x="967"
          y="300.1"
          transform="matrix(0.808 -0.5891 0.5891 0.808 7.2804 634.0479)"
          className={SvgStyle.st0}
          width="19.1"
          height="11.6"
        />
        <rect
          id="XMLID_00000016043823093394449270000009189175112191339441_"
          x="778"
          y="345.6"
          className={SvgStyle.st11}
          width="184.9"
          height="13.4"
        />
        <defs>
          <rect
            id="SVGID_00000098902171199937653310000011277531931130492606_"
            x="778"
            y="345.6"
            width="184.9"
            height="13.4"
          />
        </defs>
        <clipPath id="SVGID_00000158716676284452875990000006638439357790038146_">
          <use className={SvgStyle.useStyle} />
        </clipPath>
        <path
          className={SvgStyle.polyline4}
          d="M773.5,357.6
				c0,0,75.1-4.4,91.6-5.2s109.8,3.8,109.8,3.8l4,6.4l-208.5,1.1L773.5,357.6z"
        />
      </Chere1>

      <Gg>
        <g>
          <polygon
            className={SvgStyle.st02}
            points="1603.4,435.3 1607.5,471.7 1596.3,473.8 1589.3,472.5 1596.3,464.2 1596.5,433.8 				"
          />
          <polygon
            className={SvgStyle.st02}
            points="1646.3,434.2 1650.4,470.6 1639.2,472.7 1632.1,471.5 1639.1,463.1 1639.4,432.8 				"
          />
        </g>

        <Chere2 $logic={get1 ? posAnimation2 : false}>
          <polygon
            fill="#DE8800"
            points="1660.1,286.4 1646,326.7 1649.5,329.2 "
          />
          <ellipse fill="#DE8800" cx="1660.1" cy="286.8" rx="14" ry="10.2" />
          <ellipse fill="#B37200" cx="1660.1" cy="286.4" rx="10.1" ry="7.3" />
          <polygon
            fill="#DE8800"
            points="1552,291.6 1574.2,328.1 1578.3,327 "
          />
          <ellipse
            transform="matrix(0.6341 -0.7732 0.7732 0.6341 342.2336 1307.0428)"
            fill="#DE8800"
            cx="1552.3"
            cy="291.9"
            rx="14"
            ry="10.2"
          />
          <ellipse
            transform="matrix(0.6341 -0.7732 0.7732 0.6341 342.3166 1306.7109)"
            fill="#B37200"
            cx="1552"
            cy="291.6"
            rx="10.1"
            ry="7.3"
          />
          <polygon
            className={SvgStyle.st9}
            points="1525.4,379.5 1524,380.7 1472.2,325 1473.3,324 		"
          />
          <polygon
            className={SvgStyle.st0}
            points="1545,379.4 1524.2,372.1 1525.4,379.5 1543.8,385.9 				"
          />
          <rect
            x="1514.9"
            y="366.3"
            transform="matrix(0.9932 -0.1162 0.1162 0.9932 -33.1998 179.1303)"
            className={SvgStyle.st0}
            width="9.7"
            height="16"
          />
          <polygon
            className={SvgStyle.st0}
            points="1679.3,375.5 1699.8,383.4 1694.1,388.3 1676,381.3 				"
          />
          <rect
            x="1694"
            y="383.3"
            transform="matrix(0.7341 -0.679 0.679 0.7341 188.939 1258.8827)"
            className={SvgStyle.st0}
            width="16"
            height="9.7"
          />
          <polygon
            className={SvgStyle.st17}
            points="1543.4,442.4 1536.7,461.3 1701.2,441.7 1692.1,425 				"
          />
          <Hero2
            onClick={() => handleClickHero(2)}
            onMouseEnter={() => set1(!get1)}
            onMouseLeave={() => set1(!get1)}
          >
            <path
              id="XMLID_00000183971108852983643050000015031458085189013915_"
              className={SvgStyle.st0}
              d="M1692.1,425
									c-8.5-72.1-48.6-126.7-89.7-121.8c-41.1,4.8-67.6,67.2-59.1,139.3L1692.1,425z"
            />
            <defs>
              <path
                id="SVGID_00000167396979344414128100000006418156710506828468_"
                d="M1692.1,425c-8.5-72.1-48.6-126.7-89.7-121.8
											c-41.1,4.8-67.6,67.2-59.1,139.3L1692.1,425z"
              />
            </defs>
            <clipPath id="SVGID_00000047751731353927735400000005009473937519451290_">
              <use
                xlinkHref="#SVGID_00000167396979344414128100000006418156710506828468_"
                className={SvgStyle.useStyle}
              />
            </clipPath>
            <path
              style={{
                clipPath:
                  "url(#SVGID_00000047751731353927735400000005009473937519451290_)",
                fill: "#C36800",
              }}
              d="M1588.3,286.5
										c14.1,14.3,31.5,31,30.7,41.4c-0.7,10.3-6.3,8.8-7.2,21c-0.9,12.2-14.9,37.3-6.5,44.7c8.4,7.4-1.3,44.6-0.5,51.8
										c0.9,7.2,115.5,0.5,115.5,0.5L1691.8,303L1588.3,286.5z"
            />
            <ellipse
              className={SvgStyle.st2}
              cx="1583.7"
              cy="360.1"
              rx="21"
              ry="21"
            />
            <ellipse
              transform="matrix(0.9932 -0.1162 0.1162 0.9932 -29.6086 192.7434)"
              className={SvgStyle.st2}
              cx="1638.3"
              cy="350.3"
              rx="18.1"
              ry="18.1"
            />
            <ellipse
              transform="matrix(0.9997 -2.442132e-02 2.442132e-02 0.9997 -8.3978 38.7575)"
              className={SvgStyle.st16}
              cx="1582.6"
              cy="363.2"
              rx="7.7"
              ry="7.7"
            />
            <ellipse
              transform="matrix(0.9932 -0.1162 0.1162 0.9932 -35 200)"
              className={SvgStyle.st8}
              cx="1646"
              cy="347.3"
              rx="7.7"
              ry="7.7"
            />
            <path
              id="XMLID_00000005968229845401618830000012768252352051386250_"
              className={SvgStyle.st3}
              d="M1616.7,410.8c-9.6,0.6-51.5-7.6-49-5.8
						c2.5,1.8,39.1,23,49.3,21.9c10-1.1,48.2-29,48.2-29S1626.9,410.2,1616.7,410.8z"
            />
            <defs>
              <path
                id="SVGID_00000106118758344501369990000003812345483335351962_"
                d="M1616.7,410.8c-9.6,0.6-51.5-7.6-49-5.8
								c2.5,1.8,39.1,23,49.3,21.9c10-1.1,48.2-29,48.2-29S1626.9,410.2,1616.7,410.8z"
              />
            </defs>
            <clipPath id="SVGID_00000049903431977776816390000003771809011713004209_">
              <use
                xlinkHref="#SVGID_00000106118758344501369990000003812345483335351962_"
                className={SvgStyle.useStyle}
              />
            </clipPath>
            <polyline
              style={{
                clipPath:
                  "url(#SVGID_00000049903431977776816390000003771809011713004209_)",
                fill: "#FBFFC3",
              }}
              points="
							1592.3,412.5 1601.6,413.3 1600.8,404 1593.5,399.2 						"
            />
            <defs>
              <path
                id="SVGID_00000049216694494443498850000007641232603422274492_"
                d="M1616.7,410.8c-9.6,0.6-51.5-7.6-49-5.8
								c2.5,1.8,39.1,23,49.3,21.9c10-1.1,48.2-29,48.2-29S1626.9,410.2,1616.7,410.8z"
              />
            </defs>
            <clipPath id="SVGID_00000110462562695184824620000015318880800612314040_">
              <use
                xlinkHref="#SVGID_00000049216694494443498850000007641232603422274492_"
                className={SvgStyle.useStyle}
              />
            </clipPath>
            <polyline
              style={{
                clipPath:
                  "url(#SVGID_00000110462562695184824620000015318880800612314040_)",
                fill: "#FBFFC3",
              }}
              points="
							1644.9,409.2 1636.1,412.2 1640.6,420.4 1649.2,421.8 						"
            />
            <ellipse
              transform="matrix(0.9932 -0.1162 0.1162 0.9932 -27.0838 172.8447)"
              className={SvgStyle.st13}
              cx="1468.9"
              cy="318.7"
              rx="40.8"
              ry="40.8"
            />
            <path
              className={SvgStyle.st8}
              d="M1461.7,297.9h-0.2l-9,7.4l-2.7-5.7l11.4-9.3l6.7-1.4l11.4,58l-7.6,1.5L1461.7,297.9z"
            />
          </Hero2>
        </Chere2>
      </Gg>
    </SVG>
  );
};

export default HeroSVG;
