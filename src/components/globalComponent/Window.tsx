import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropTypeTest, PropTypeText } from "./TitlePage";
import Radios from "./RadioButton";
import styled from "styled-components";

const AnswerBox = styled.div`
  display: flex;
  align-items: center;
`;

const sx = {
  box: { display: "flex", justifyContent: "space-between" },
  text: {
    marginTop: "15px",
    color: "#803700",
    fontSize: "18px",
  },
  closeIcon: { color: "var(--color-red)" },
};

const Window = ({
  open,
  handleClose,
  title,
  educationText,
  dataWind,
  educationTest,
}: {
  open: boolean;
  title: string;
  dataWind: number | undefined;
  educationText?: PropTypeText;
  educationTest?: PropTypeTest;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [scroll] = React.useState<DialogProps["scroll"]>("paper");

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box sx={sx.box}>
          <DialogTitle
            id="scroll-dialog-title"
            sx={{ color: "var(--color-yellow-title)" }}
          >
            {title}
          </DialogTitle>
          <DialogActions>
            <IconButton onClick={handleClose} aria-label="delete" size="small">
              <CloseIcon sx={sx.closeIcon} />
            </IconButton>
          </DialogActions>
        </Box>
        <DialogContent dividers={scroll === "paper"}>
          <>
            {dataWind === 1 ? (
              <>
                {educationText?.map(({ text, svg }, i) => (
                  <React.Fragment key={i}>
                    {text.split("|").map((t, i) => (
                      <DialogContentText
                        key={i}
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        sx={sx.text}
                      >
                        {t}
                      </DialogContentText>
                    ))}

                    <div dangerouslySetInnerHTML={{ __html: svg }} />
                  </React.Fragment>
                ))}
              </>
            ) : (
              <AnswerBox>
                <Radios data={educationTest} />
              </AnswerBox>
            )}
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Window;
