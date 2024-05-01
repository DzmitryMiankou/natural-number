import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const TooltipButt: React.FC<{ text: string; element: JSX.Element }> = ({
  text,
  element,
}) => {
  return (
    <Tooltip
      title={text}
      enterDelay={800}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 500 }}
    >
      {element}
    </Tooltip>
  );
};

export default TooltipButt;
