import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropTypeTest, PropTypeText } from "./TitlePage";
import ColorRadioButtons from "./RadioButton";
import styled from "styled-components";

const AnswerBox = styled.div`
  display: flex;
  align-items: center;
`;

const Window = ({
  open,
  handleClose,
  title,
  educationData,
}: {
  open: boolean;
  title: string;
  educationData?: PropTypeTest | PropTypeText;
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
        onClose={handleClose}
        open={open}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle
            id="scroll-dialog-title"
            sx={{ color: "var(--color-yellow-title)" }}
          >
            {title}
          </DialogTitle>
          <DialogActions>
            <IconButton onClick={handleClose} aria-label="delete" size="small">
              <CloseIcon sx={{ color: "var(--color-yellow-title)" }} />
            </IconButton>
          </DialogActions>
        </Box>
        <DialogContent dividers={scroll === "paper"}>
          {educationData?.map(({ text, qvest, answer }: any, i: number) => (
            <React.Fragment key={i}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
                sx={{ marginTop: "15px", color: "#803700" }}
              >
                {text || `${i + 1}) ${qvest}`}
              </DialogContentText>
              <>
                {answer ? (
                  <>
                    {answer
                      .split("|")
                      .sort(() => Math.random() - 0.5)
                      .map((data: string, i: number) => (
                        <AnswerBox key={i}>
                          <ColorRadioButtons data={data} />
                          <p>{data}</p>
                        </AnswerBox>
                      ))}
                  </>
                ) : (
                  <></>
                )}
              </>
            </React.Fragment>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Window;
