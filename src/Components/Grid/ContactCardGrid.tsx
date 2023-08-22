import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { contactData } from "../../Data/ContactData";
import { Box, Button, Collapse, Grid } from "@mui/material";
import { useState } from "react";

const contactLiHeight = 24;
let maxSkills = 1;

export default function ContactCardGrid() {
  const [open, setOpen] = useState(true);

  return (
    <Box m={1}>
      <Button variant="contained" onClick={() => setOpen(!open)} sx={{ mb: 3 }}>
        Collapse
      </Button>
      <Grid container spacing={2} sx={{ width: 700 }}>
        {contactData.map((contact) => {
          maxSkills =
            contact.skills.length > maxSkills
              ? contact.skills.length
              : maxSkills;

          return (
            <Grid key={contact.name} item>
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  avatar={
                    <Avatar sx={{ backgroundColor: "primary.main" }}>
                      {contact.name?.[0] || "A"}
                    </Avatar>
                  }
                  sx={{
                    borderBottom: "1px solid",
                    borderBottomColor: "primary.main",
                  }}
                />
                <Collapse in={open} timeout={700}>
                  <CardContent
                    sx={{ height: 104 + maxSkills * contactLiHeight }}
                  >
                    <Typography>
                      <b>Start Date: {contact.startDate}</b>
                    </Typography>
                    <Typography>
                      <b>Work Preference: {contact.preference}</b>
                    </Typography>
                    <List
                      sx={{
                        listStyle: "list-item",
                        listStyleType: "circle",
                        paddingLeft: 2,
                      }}
                      subheader={
                        <ListSubheader
                          sx={{
                            right: 16,
                            position: "inherit",
                            fontSize: "1.25rem",
                            color: "black",
                            paddingLeft: 0,
                          }}
                        >
                          Skills:
                        </ListSubheader>
                      }
                    >
                      {contact.skills.map((skill, i) => (
                        <li key={skill + i} style={{ paddingBottom: "2px" }}>
                          {skill}
                        </li>
                      ))}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
