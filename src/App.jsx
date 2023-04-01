import ImageSlider from "./components/ImageSlider.jsx";
import maldives from "./assets/maldives.webp";
import paris from "./assets/paris.jpg";
import mumbai from "./assets/mumbai.jpg";
import beijing from "./assets/beijing.jpg";
import italy from "./assets/italy.jpg";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: maldives,
      title: "Maldives",
      details: "Lorem ",
    },
    {
      url: paris,
      title: "Paris",
      details: "Lorem ",
    },
    {
      url: mumbai,
      title: "Mumbai",
      details: "Lorem ",
    },
    {
      url: beijing,
      title: "Beijing",
      details: "Lorem ",
    },
    {
      url: italy,
      title: "Italy",
      details: "Lorem ",
    },
  ];
 
  return (
    <Box p={2}>
      <Typography variant="h3">Catalogue viewer</Typography>
      <Stack direction="row" sx={{width:"80vw",height:"80vh",margin:"5px auto"}}>
        <ImageSlider slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      </Stack>
    </Box>
  );
};

export default App;
