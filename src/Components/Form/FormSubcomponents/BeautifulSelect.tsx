import { useEffect, useRef, useState } from "react";
import { minWidth } from "../ContactForm";
import { Select } from "@mui/material";

export default function BeautifulSelect(props: any) {
  const selectInputComponent = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const { current } = selectInputComponent;
    setPosition(current ? current.getBoundingClientRect().left + 20 : 0);
  }, [selectInputComponent]);

  return (
    <Select
      ref={selectInputComponent}
      {...props}
      id="skill-select"
      labelId="skill-select-label"
      sx={{
        minWidth: minWidth,
        marginBottom: { xs: 2, md: 0 },
        marginRight: { md: 2 },
      }}
      renderValue={(select: string[]) => select.join(", ")}
      multiple
      MenuProps={{
        PaperProps: {
          sx: {
            left: position + "px !important",
            maxHeight: 180,
          },
        },
      }}
    >
      {props.children}
    </Select>
  );
}
