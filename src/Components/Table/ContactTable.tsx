import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import { contactData } from "../../Data/ContactData";

const borderColor = {
  borderBottomColor: "primary.main",
};

export default function ContactTable() {
  return (
    <TableContainer
      sx={{
        borderRadius: 1,
        boxShadow: 4,
        margin: 1,
        width: "calc(100% - 16px)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{ backgroundColor: "grid.main", borderColor: "primary.main" }}
          >
            <TableCell sx={{ ...borderColor, width: "30%" }}>Name</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Role</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Skills</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>
              Start Date
            </TableCell>
            <TableCell sx={{ ...borderColor, width: "19%" }}>
              Preference
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => (
            <TableRow key={contact.id}>
              {Object.entries(contact).map(([key, value]) => {
                if (key !== "id") {
                  return (
                    <TableCell
                      key={contact.id + key}
                      sx={{
                        ...borderColor,
                        backgroundColor: key === "name" ? "primary.light" : "",
                      }}
                    >
                      {key === "skills" ? value.join(", ") : value}
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
