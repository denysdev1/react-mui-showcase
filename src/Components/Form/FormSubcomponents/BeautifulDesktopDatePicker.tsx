import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { minWidth } from "../ContactForm";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const popperSx = {
  "& .MuiPaper-root": {
    color: "primary.dark",
  },
  "& [role=grid]": {
    backgroundColor: "primary.dark",
    "& button": {
      backgroundColor: "primary.main",
    },
  },
};

export default function BeautifulDesktopDatePicker(props: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label="Date"
        inputFormat="MM/DD/YYYY"
        views={["day"]}
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />;
        }}
        components={{
          OpenPickerIcon: CalendarTodayIcon,
        }}
        InputProps={{
          sx: {
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
          },
        }}
        PopperProps={{
          sx: popperSx,
        }}
      />
    </LocalizationProvider>
  );
}
