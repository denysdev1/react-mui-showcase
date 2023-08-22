import { useState } from "react";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack,
  Checkbox,
} from "@mui/material";
import { contactData, FormValues } from "../../Data/ContactData";
import BeautifulAutocomplete from "./FormSubcomponents/BeautifulAutocomplete";
import BeautifulDesktopDatePicker from "./FormSubcomponents/BeautifulDesktopDatePicker";
import BeautifulSelect from "./FormSubcomponents/BeautifulSelect";
import BeautifulRadios from "./FormSubcomponents/BeautifulRadios";
import BeautifulTextField from "./FormSubcomponents/BeautifulTextField";
import { StyledFormGroup } from "./FormSubcomponents/StyledFormGroup";

export const minWidth = 300;
const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const defaultPreference = "Work From Home";

const paperInputsStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
    "&:hover": {
      "& > fieldset": {
        borderColor: "primary.light",
      },
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
  display: "flex",
  justifyContent: "center",
};

export default function ContactForm() {
  const today = new Date();
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      role: "",
      skills: [],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setFormValues({
      ...formValues,
      role: value || "",
    });
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleDatePickerChange = (
    value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null
  ) => {
    const startDate = value as unknown as {
      month: () => string;
      date: () => string;
      year: () => string;
    };
    setFormValues({
      ...formValues,
      startDate: `${
        startDate.month() + 1
      }/${startDate.date()}/${startDate.year()}`,
    });
  };

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const handleClearClick = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  };

  const handleAlertClick = () => {
    setAlertOpen(!alertOpen);
  };

  return (
    <>
      <Paper sx={{ ...paperInputsStyle}}>
        <form>
          <FormControl>
            <StyledFormGroup row paddingtop={10}>
              <BeautifulTextField
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeautifulAutocomplete
                options={roles}
                value={formValues.role || ""}
                onInputChange={handleAutoCompleteChange}
              />
            </StyledFormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulSelect
                value={formValues.skills || ""}
                onChange={handleSelectChange}
              >
                {skills.map((skillName) => (
                  <MenuItem key={skillName} value={skillName}>
                    <Checkbox checked={formValues.skills.includes(skillName)} />
                    <ListItemText primary={skillName} />
                  </MenuItem>
                ))}
              </BeautifulSelect>
              <BeautifulDesktopDatePicker
                value={formValues.startDate}
                onChange={handleDatePickerChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulRadios
                preference={formValues.preference}
                handleRadioChange={handleRadioChange}
                defaultPreference={""}
              />
              <Stack justifyContent="space-between">
                <Button variant="contained" sx={{ height: 56, width: 109 }} onClick={handleSubmit}>Submit</Button>
                <Button variant="beautiful" sx={{ height: 56, width: 109 }} onClick={handleClearClick}>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
}
