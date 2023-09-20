import * as React from "react";
import Radio from "@mui/material/Radio";

export default function ColorRadioButtons({ data }: { data: string }) {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      <Radio disableRipple color="success" {...controlProps(data)} />
    </div>
  );
}
