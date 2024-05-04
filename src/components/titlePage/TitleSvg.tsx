import React from "react";
import { styled, keyframes } from "styled-components";

const move = keyframes`
  0% { stroke-dashoffset: 2500;}
  50% { stroke-dashoffset: 0;}
  100% { stroke-dashoffset: 2500;}
`;

const move2 = keyframes`
  0% { stroke-dashoffset: 2500;}
  50% { stroke-dashoffset: 0;}
  100% { stroke-dashoffset: 2500;}
`;

const movePatch = keyframes`
  0% { stroke-dashoffset: 2500;}
  30% { stroke-dashoffset: 2500;}
  70% { stroke-dashoffset: 0;}
  100% { stroke-dashoffset: 2500;}
`;

const MainSVG = styled.div`
  display: block;
  max-width: 1000px;
  width: 100%;
  margin: auto;
`;

const Poly = styled.polygon`
  stroke-dasharray: 2500;
  animation: ${move} 8s linear infinite;
`;

const Line = styled.line`
  stroke-dasharray: 2500;
  animation: ${move2} 8s ease-in-out infinite;
`;

const Patch = styled.path`
  stroke-dasharray: 2500;
  animation: ${movePatch} 10s ease-in-out infinite;
`;

const TitleSvg: React.FC = () => {
  return (
    <MainSVG>
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 1067 500"
        enableBackground="new 0 0 1067 500"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <Poly
              fill="none"
              stroke="#808080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="480.5,439.2 
			62.1,439.2 199.1,196.2 340.6,196.2 		"
            />

            <circle
              fill="none"
              stroke="#808080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeMiterlimit="10"
              cx="271.3"
              cy="317.1"
              r="120.7"
            />

            <Line
              fill="none"
              stroke="#5571ff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="271.4"
              y1="317.8"
              x2="62.2"
              y2="439"
            />

            <line
              fill="none"
              stroke="#808080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="271.5"
              y1="437.7"
              x2="272.1"
              y2="317.8"
            />
          </g>
          <circle fill="#808080" cx="271.7" cy="317.8" r="3" />
          <text
            transform="matrix(1 0 0 1 261.4751 310.3281)"
            fill="#808080"
            fontSize="30.2617px"
          >
            O
          </text>
          <text
            transform="matrix(1 0 0 1 49.6484 468.9297)"
            fontSize="30.2617px"
          >
            A
          </text>
          <text
            transform="matrix(1 0 0 1 49.6484 468.9297)"
            fill="#808080"
            fontSize="30.2617px"
          >
            A
          </text>
          <text
            transform="matrix(1 0 0 1 174.3359 196.3291)"
            fill="#808080"
            fontSize="30.2617px"
          >
            B
          </text>
          <text
            transform="matrix(1 0 0 1 349.5566 196.3291)"
            fill="#808080"
            fontSize="30.2617px"
          >
            C
          </text>
          <text
            transform="matrix(1 0 0 1 478.2852 465.1436)"
            fill="#808080"
            fontSize="30.2617px"
          >
            D
          </text>
          <text
            transform="matrix(1 0 0 1 259.9673 465.1436)"
            fill="#808080"
            fontSize="30.2617px"
          >
            M
          </text>
        </g>
        <line
          fill="none"
          stroke="#999999"
          strokeWidth="3"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="497.5"
          y1="363.4"
          x2="497.5"
          y2="370.5"
        />
        <line
          fill="none"
          stroke="#999999"
          strokeWidth="3"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="1093.5"
          y1="362.5"
          x2="1093.5"
          y2="353.5"
        />
        <g>
          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="669.9"
            y1="-13.9"
            x2="669.9"
            y2="541.1"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="481"
            y1="362.5"
            x2="1141.5"
            y2="362.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="700.5"
            y1="362.5"
            x2="700.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="747.5"
            y1="362.5"
            x2="747.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="794.5"
            y1="362.5"
            x2="794.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="841.5"
            y1="362.5"
            x2="841.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="888.5"
            y1="362.5"
            x2="888.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="935.5"
            y1="362.5"
            x2="935.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="982.5"
            y1="362.5"
            x2="982.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="1029.5"
            y1="362.5"
            x2="1029.5"
            y2="369.6"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="544.5"
            y1="363.4"
            x2="544.5"
            y2="370.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="591.5"
            y1="363.4"
            x2="591.5"
            y2="370.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="638.5"
            y1="363.4"
            x2="638.5"
            y2="370.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="675"
            y1="327.5"
            x2="670.5"
            y2="327.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="292.5"
            x2="675"
            y2="292.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="257.5"
            x2="675"
            y2="257.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="222.5"
            x2="675"
            y2="222.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="187.5"
            x2="675"
            y2="187.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="152.5"
            x2="675"
            y2="152.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="117.5"
            x2="675"
            y2="117.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="607.5"
            x2="675"
            y2="607.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="572.5"
            x2="675"
            y2="572.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="537.5"
            x2="675"
            y2="537.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="502.5"
            x2="675"
            y2="502.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="467.5"
            x2="675"
            y2="467.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="432.5"
            x2="675"
            y2="432.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="397.5"
            x2="675"
            y2="397.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="82.5"
            x2="675"
            y2="82.5"
          />

          <line
            fill="none"
            stroke="#999999"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            x1="670.5"
            y1="47.5"
            x2="675"
            y2="47.5"
          />
          <Patch
            fill="none"
            stroke="#ff8000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M496.5,355.5
		c0,0,70,2,174-28c280.5-80.9,304-301,304-301"
          />
          <polyline
            fill="none"
            stroke="#808080"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            points="
	1049,349.8 1066.5,361.8 1049,374.5 "
          />
          <polyline
            fill="none"
            stroke="#808080"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            points="
	657.3,17.8 669.4,0.3 682.1,17.8 "
          />
          <g>
            <text
              transform="matrix(1 0 0 1 427.5454 135.0322)"
              fill="#808080"
              fontSize="81.8138px"
            >
              y = e
            </text>
            <text
              transform="matrix(1 0 0 1 610 96)"
              fill="#808080"
              fontSize="50px"
            >
              x
            </text>
          </g>
        </g>
      </svg>
    </MainSVG>
  );
};

export default TitleSvg;
