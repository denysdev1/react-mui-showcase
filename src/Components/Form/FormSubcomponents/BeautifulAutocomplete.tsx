import { Autocomplete, TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

export default function BeautifulAutocomplete(props: any) {
  return (
    <Autocomplete
      {...props}
      sx={{ minWidth: minWidth }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                color: "primary.dark",
              },
            }}
            {...params}
          />
        );
      }}
      renderOption={(props, option, state) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      ListboxProps={{
        sx: {
          height: 100,
          color: "primary.dark",
          "& li.MuiAutocomplete-option:nth-child(even)": {
            backgroundColor: "green",
          },
          "& li.MuiAutocomplete-option:nth-child:hover": {
            backgroundColor: "gold",
          },
          "& li.MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
            backgroundColor: "gold",
          },
        },
      }}
    />
  );
}
