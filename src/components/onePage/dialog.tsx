import * as React from "react";
import { Box, DialogTitle, Divider, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import ScrollDialog from "./window";

const SimpleDialog = ({
  opens,
  handleClose,
}: {
  opens: string;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  if (opens === "err") {
    return (
      <Dialog onClose={handleClose} open={true}>
        <Box>
          <IconButton onClick={handleClose} aria-label="delete" size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <DialogTitle>Неправильно</DialogTitle>
      </Dialog>
    );
  }
  if (opens === "ok") {
    return <ScrollDialog open={true} handleClose={handleClose} />;
  }
  return <></>;
};

export default SimpleDialog;
