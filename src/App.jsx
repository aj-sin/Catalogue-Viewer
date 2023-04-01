import ImageSlider from "./components/ImageSlider.jsx";
import maldives from "./assets/maldives.webp";
import paris from "./assets/paris.jpg";
import mumbai from "./assets/mumbai.jpg";
import beijing from "./assets/beijing.jpg";
import italy from "./assets/italy.jpg";
import { Box, Stack, Typography } from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useEffect, useState } from "react";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
 useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex) => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          return newIndex;
        });
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying, currentIndex]);
 

  const slides = [
    {
      url: maldives,
      title: "Maldives",
      details:
        "The Maldives is a tropical island nation located in the Indian Ocean, famous for its pristine beaches, crystal-clear waters, and luxurious resorts. With over 1,000 islands to explore, the Maldives is a popular destination for honeymooners and anyone seeking a relaxing beach vacation. Visitors can enjoy snorkeling, scuba diving, or simply lounging on the white-sand beaches while sipping on a refreshing coconut drink.The Maldives is a tropical island nation located in the Indian Ocean, famous for its pristine beaches, crystal-clear waters, and luxurious resorts. With over 1,000 islands to explore, the Maldives is a popular destination for honeymooners and anyone seeking a relaxing beach vacation. Visitors can enjoy snorkeling, scuba diving, or simply lounging on the white-sand beaches while sipping on a refreshing coconut drink.The Maldives is a tropical island nation located in the Indian Ocean, famous for its pristine beaches, crystal-clear waters, and luxurious resorts. With over 1,000 islands to explore, the Maldives is a popular destination for honeymooners and anyone seeking a relaxing beach vacation. Visitors can enjoy snorkeling, scuba diving, or simply lounging on the white-sand beaches while sipping on a refreshing coconut drink.",
    },
    {
      url: paris,
      title: "Paris",
      details:
        "Paris is the capital city of France and a hub of art, culture, and fashion. The city is home to world-famous landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. Paris is also known for its delicious cuisine, including its famous pastries and bread, as well as its fashion industry, with many renowned designers calling the city home. Visitors to Paris can also enjoy strolling along the Seine River or exploring the charming neighborhoods and picturesque gardens scattered throughout the city.Paris is the capital city of France and a hub of art, culture, and fashion. The city is home to world-famous landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. Paris is also known for its delicious cuisine, including its famous pastries and bread, as well as its fashion industry, with many renowned designers calling the city home. Visitors to Paris can also enjoy strolling along the Seine River or exploring the charming neighborhoods and picturesque gardens scattered throughout the city.Paris is the capital city of France and a hub of art, culture, and fashion. The city is home to world-famous landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. Paris is also known for its delicious cuisine. ",
    },
    {
      url: mumbai,
      title: "Mumbai",
      details:
        "Mumbai is a bustling metropolis on the west coast of India, known for its vibrant street life, delicious food, and impressive architecture. With a population of over 20 million people, Mumbai is the financial, commercial, and entertainment capital of India. The city is also famous for its beaches, historic landmarks, and the iconic Gateway of India monument.Mumbai is a bustling metropolis on the west coast of India, known for its vibrant street life, delicious food, and impressive architecture. With a population of over 20 million people, Mumbai is the financial, commercial, and entertainment capital of India. The city is also famous for its beaches, historic landmarks, and the iconic Gateway of India monument.Mumbai is a bustling metropolis on the west coast of India, known for its vibrant street life, delicious food, and impressive architecture. With a population of over 20 million people, Mumbai is the financial, commercial, and entertainment capital of India. The city is also famous for its beaches, historic landmarks, and the iconic Gateway of India monument.Mumbai is a bustling metropolis on the west coast of India, known for its vibrant street life, delicious food.",
    },
    {
      url: beijing,
      title: "Beijing",
      details:
        "Beijing is the capital city of China and a hub of Chinese culture and history. With over 3,000 years of history, Beijing is home to numerous landmarks and attractions, including the iconic Great Wall of China, the Forbidden City, and the Temple of Heaven. The city is also known for its delicious cuisine, vibrant markets, and impressive architecture, blending traditional Chinese designs with modern influences.Beijing is the capital city of China and a hub of Chinese culture and history. With over 3,000 years of history, Beijing is home to numerous landmarks and attractions, including the iconic Great Wall of China, the Forbidden City, and the Temple of Heaven. The city is also known for its delicious cuisine, vibrant markets, and impressive architecture, blending traditional Chinese designs with modern influences.Beijing is the capital city of China and a hub of Chinese culture and history. With over 3,000 years of history, Beijing is home to numerous landmarks and attractions, including the iconic Great Wall of China, the Forbidden City, and the Temple of Heaven. The city is also known for its delicious cuisine, vibrant markets, and impressive architecture, blending traditional Chinese designs with modern influences. ",
    },
    {
      url: italy,
      title: "Italy",
      details:
        "Italy is a country located in southern Europe, known for its rich history, stunning art, and delicious cuisine. Italy is home to world-famous cities like Rome, Florence, and Venice, each with its own unique character and attractions. The country is also renowned for its picturesque landscapes, including the stunning Amalfi Coast, the rolling hills of Tuscany, and the snow-capped peaks of the Italian Alps.Italy is a country located in southern Europe, known for its rich history, stunning art, and delicious cuisine. Italy is home to world-famous cities like Rome, Florence, and Venice, each with its own unique character and attractions. The country is also renowned for its picturesque landscapes, including the stunning Amalfi Coast, the rolling hills of Tuscany, and the snow-capped peaks of the Italian Alps.Italy is a country located in southern Europe, known for its rich history, stunning art, and delicious cuisine. Italy is home to world-famous cities like Rome, Florence, and Venice, each with its own unique character and attractions. The country is also renowned for its picturesque landscapes, including the stunning Amalfi Coast, the rolling hills of Tuscany, and the snow-capped peaks of the Italian Alps.",
    },
  ];

  return (
    <Box p={2}>
      <Typography variant="h3" sx={{textAlign:'center',fontFamily:"fantasy",color:"#63aeff"}}>Catalogue Viewer</Typography>
      <Stack
        direction={{md:"row"}}
        sx={{ width: {md:"800px", lg:"1024px"}, height: "80vh",margin:"auto" }}
      >
        <ImageSlider
          slides={slides}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Stack p={{sm: '0', md: '1rem'}}>
          <Box>
            <Typography variant="h4" sx={{ color: "GrayText" }}>
              {slides[currentIndex].title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                width: {md:"360px", lg:"410px"},
                height: {md:"340px", lg:"305px"},
                lineHeight: "0.9rem",
                color: "grey",
              }}
            >
              {slides[currentIndex].details}
            </Typography>
            <Stack alignItems="center" sx={{mt:"25px"}}>
              {isPlaying ? <PauseCircleIcon  sx={{color:"#63aeff",fontSize:"3rem"}} onClick={()=>setIsPlaying(false)}/> : <PlayCircleFilledWhiteIcon sx={{color:"#63aeff",fontSize:"3rem"}} onClick={()=>setIsPlaying(true)}/>}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default App;
