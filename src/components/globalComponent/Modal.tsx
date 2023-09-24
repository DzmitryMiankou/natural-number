import * as React from "react";
import { Box, DialogTitle, Divider, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

const sx = {
  color: { color: "var(--color-yellow-title)" },
};

const Modal = ({
  opens,
  text,
  handleClose,
}: {
  opens?: string;
  text: string;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Dialog onClose={handleClose} open={true}>
      <Box sx={{ marginLeft: "auto" }}>
        <IconButton onClick={handleClose} aria-label="delete" size="small">
          <CloseIcon sx={{ color: "var(--color-red)" }} />
        </IconButton>
      </Box>
      <Divider />
      <DialogTitle sx={sx.color}>{text}</DialogTitle>
    </Dialog>
  );
};

export default Modal;
