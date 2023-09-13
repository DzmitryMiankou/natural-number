import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const TooltipButt = ({
  text,
  element,
}: {
  text: string;
  element: JSX.Element;
}) => {
  return (
    <Tooltip
      sx={{
        "& .MuiTooltip-tooltip": {
          backgroundColor: "red",
        },
      }}
      title={text}
      enterDelay={500}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      {element}
    </Tooltip>
  );
};

export default TooltipButt;
