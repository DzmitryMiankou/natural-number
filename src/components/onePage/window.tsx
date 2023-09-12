import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ScrollDialog({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
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
          <DialogTitle id="scroll-dialog-title">
            Вы правильно ответили
          </DialogTitle>
          <DialogActions>
            <IconButton onClick={handleClose} aria-label="delete" size="small">
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Box>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `Последовательность всех натуральных чисел называют натуральным рядом. Самое маленькое натуральное число - единица (1). Натуральный ряд бесконечен. Каждое последующее число в нём на 1 больше предыдущего. Нуль (0) не относится к натуральным числам.
Значение цифры в числе зависит не только от её начертания, но и от места, которое она занимает в числе. Такая запись чисел называется позиционной.
Место каждой цифры в числе называется разрядом. Разряды слева — старшие, а справа — младшие.
Цифра на один разряд левее обозначает число в десять раз больше, чем такая же цифра на один разряд правее неё. Самый младший (крайний справа) разряд — это единицы, следующий — десятки, третий справа — сотни и т.д.
Если запись натурального числа состоит из одного знака - одной цифры, то его называют однозначным. Если запись числа состоит из двух знаков - двух цифр, то его называют двузначным. Далее - трёхзначные, четырёхзначные и т.д. Двузначные, трёхзначные, четырёхзначные, пятизначные и т.д. числа называются многозначными.
Разряды группируются по три в классы. Классы слева — старшие, а справа — младшие.
Первый, самый младший класс, крайний справа — класс единиц.
Второй — класс тысяч.
Третий — класс миллионов.
Четвёртый — класс миллиардов.
Пятый — класс триллионов.
Миллион - это тысяча тысяч (1000 тыс.), его записывают: 1 млн или 1000000.
Миллиард - это 1000 миллионов. Его записывают: 1 млрд или 1000000000.
Чтобы прочитать число, называют слева по очереди число единиц каждого класса и добавляют название класса. Не произносят название класса единиц, а также класса, все три цифры которого - нули..`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
