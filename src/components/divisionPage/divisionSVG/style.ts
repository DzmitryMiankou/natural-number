import styled, { keyframes } from "styled-components";

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

const Eye1 = styled.circle`
  animation: ${eyeAnimation} 1s linear infinite;
`;

const Portal2 = styled.g`
  animation: ${PortAnimation} 0.7s;
  opacity: 0;
`;

const Portal = styled.g`
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation: ${opacityAnimation} 2s infinite;
`;

export {
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
};
