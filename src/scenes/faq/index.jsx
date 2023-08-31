import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../context/ThemeContext";
import Header from "../../components/Header";
import { useState } from "react";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      summary: "An Important question",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti iusto repellat a laudantium laboriosam itaque ipsa error sunt eveniet. Ab ullam eveniet temporibus quasi eius inventore natus dolor quod?",
    },
    {
      id: 2,
      summary: "Another Important question",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti iusto repellat a laudantium laboriosam itaque ipsa error sunt eveniet. Ab ullam eveniet temporibus quasi eius inventore natus dolor quod?",
    },
    {
      id: 3,
      summary: "Your Favorite question",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti iusto repellat a laudantium laboriosam itaque ipsa error sunt eveniet. Ab ullam eveniet temporibus quasi eius inventore natus dolor quod?",
    },
    {
      id: 4,
      summary: "Some random question",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti iusto repellat a laudantium laboriosam itaque ipsa error sunt eveniet. Ab ullam eveniet temporibus quasi eius inventore natus dolor quod?",
    },
    {
      id: 4,
      summary: "Your Finale Question",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti iusto repellat a laudantium laboriosam itaque ipsa error sunt eveniet. Ab ullam eveniet temporibus quasi eius inventore natus dolor quod?",
    },
  ]);

  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page"}></Header>
      <Box>
        {questions && (
          <Box>
            {questions.map((question) => {
              return (
                <Accordion key={question.id} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography color={colors.greenAccent[500]} variant="h7">
                      {question.summary}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color={colors.grey[300]}>
                      {question.details}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        )}
        {!questions && (
          <Box display={"flex"} justifyContent={"center"}>
            <Typography color={colors.blueAccent[300]} variant="h5">
              No Questions
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FAQ;
