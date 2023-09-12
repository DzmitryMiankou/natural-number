import * as React from "react";
import { Box, DialogTitle, Divider, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const SimpleDialog = ({
  open,
  handleClose,
}: {
  open: string;
  handleClose: any;
}) => {
  if (open === "err") {
    return (
      <Dialog onClose={handleClose} open={true}>
        <Box>
          <IconButton aria-label="delete" size="small">
            <CloseIcon onClick={handleClose} />
          </IconButton>
        </Box>
        <Divider />
        <DialogTitle>Неправильно</DialogTitle>
      </Dialog>
    );
  }
  if (open === "ok") {
    return (
      <Dialog onClose={handleClose} open={true}>
        <Box>
          <IconButton aria-label="delete" size="small">
            <CloseIcon onClick={handleClose} />
          </IconButton>
        </Box>
        <Divider />
        <DialogTitle>Правильно</DialogTitle>
      </Dialog>
    );
  }
  return <></>;
};

export default SimpleDialog;
