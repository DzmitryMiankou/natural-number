import React from "react";
import Style from "./MultiStyle.module.css";
import styled from "styled-components";
import SimpleDialog from "../../onePage/dialog";

const Svg = styled.svg`
  position: absolute;
  left: 0;
`;

const MultiSVG = () => {
  const [get, set] = React.useState<string>(" ");

  const handleClose = () => {
    set(" ");
  };

  return (
    <>
      <SimpleDialog handleClose={handleClose} opens={get} />
      <Svg version="1.1" x="0px" y="0px" viewBox="0 0 1920 529.3">
        <g>
          <g>
            <g>
              <path
                id="XMLID_00000127752590278476237590000018075309898832136613_"
                className={Style.st0}
                d="M458.4,161.3c-1.5,31-28.3,54.8-59.7,53.3
				s-55.7-27.9-54.2-58.7s39.4-93.2,58.6-90.5C425.9,68.3,459.9,130.3,458.4,161.3z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                id="XMLID_00000049926285907025701030000013979788625214219182_"
                className={Style.st1}
                d="M450,333.8c0,0-43,4.8-57.3,4.1
				c-14.2-0.7-56.6-9.6-56.6-9.6l8.4-175.1c0,0,19.6-18.7,61.5-16.6s52.5,22.2,52.5,22.2L450,333.8z"
              />
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <defs>
                          <path
                            id="SVGID_1_"
                            d="M450,333.8c0,0-43,4.8-57.3,4.1c-14.2-0.7-56.6-9.6-56.6-9.6l8.4-175.1c0,0,19.6-18.7,61.5-16.6
										s52.5,22.2,52.5,22.2L450,333.8z"
                          />
                        </defs>
                        <clipPath id="SVGID_00000001643705174841480810000007129739370800769955_">
                          <use
                            xlinkHref="#SVGID_1_"
                            className={Style.overUse}
                          />
                        </clipPath>
                        <polygon
                          style={{
                            clipPath:
                              "url(#SVGID_00000001643705174841480810000007129739370800769955_)",
                            fill: "#577DAA",
                          }}
                          points="
									432.4,138.6 419.1,351.6 470.3,343.5 472.9,130.3 								"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <defs>
                          <path
                            id="SVGID_00000088850241292450487870000005809143795227737250_"
                            d="M450,333.8c0,0-43,4.8-57.3,4.1
										c-14.2-0.7-56.6-9.6-56.6-9.6l8.4-175.1c0,0,19.6-18.7,61.5-16.6s52.5,22.2,52.5,22.2L450,333.8z"
                          />
                        </defs>
                        <clipPath id="SVGID_00000054963725489513877810000002583626597829238930_">
                          <use
                            xlinkHref="#SVGID_00000088850241292450487870000005809143795227737250_"
                            className={Style.overUse}
                          />
                        </clipPath>
                        <polygon
                          style={{
                            clipPath:
                              "url(#SVGID_00000054963725489513877810000002583626597829238930_)",
                            fill: "#97A5AA",
                          }}
                          points="
									325.8,131.1 312.6,344 363.9,336.1 366.4,122.8 								"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <defs>
                          <path
                            id="SVGID_00000063627820374263350050000007762300912083354791_"
                            d="M450,333.8c0,0-43,4.8-57.3,4.1
										c-14.2-0.7-56.6-9.6-56.6-9.6l8.4-175.1c0,0,19.6-18.7,61.5-16.6s52.5,22.2,52.5,22.2L450,333.8z"
                          />
                        </defs>
                        <clipPath id="SVGID_00000021105475709105933570000014588469820259332748_">
                          <use
                            xlinkHref="#SVGID_00000063627820374263350050000007762300912083354791_"
                            className={Style.overUse}
                          />
                        </clipPath>
                        <polygon
                          style={{
                            clipPath:
                              "url(#SVGID_00000021105475709105933570000014588469820259332748_)",
                            fill: "#577DAA",
                          }}
                          points="
									419.6,143.2 406.2,355.4 411.2,340.8 423.7,129.7 								"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <polygon
            className={Style.st0}
            points="343.9,286.1 307.6,319.1 295.8,389.4 339.2,384.6 	"
          />
          <polygon
            className={Style.st0}
            points="439.8,287.4 470.9,323.7 475.4,394.7 435,386.1 	"
          />
          <polygon
            className={Style.st0}
            points="395.1,290 407.6,325.4 407.7,396.4 390.3,388.7 	"
          />
          <circle className={Style.st5} cx="403.5" cy="198.1" r="15" />
        </g>
        <text
          transform="matrix(2 0 0 2 890.1094 104.4595)"
          onClick={() => set("err")}
          className={Style.st6}
        >
          (2 + 2) • 1 =
        </text>
        <text
          transform="matrix(2 0 0 2 890.1094 258.4595)"
          className={Style.st7}
          onClick={() => set("err")}
        >
          (2 + 3) • 2 =
        </text>
        <text
          transform="matrix(2 0 0 2 890.1094 404.4595)"
          className={Style.st8}
          onClick={() => set("ok")}
        >
          (2 + 2) • 2 =
        </text>
      </Svg>
    </>
  );
};

export default MultiSVG;
