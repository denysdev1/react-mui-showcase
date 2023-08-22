import { TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

export default function BeautifulTextField(props: any) {
  return (
    <TextField
      {...props}
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth,
        marginBottom: {
          xs: 2,
          md: 0,
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "primary.dark",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
        },
      }}
    />
  );
}
