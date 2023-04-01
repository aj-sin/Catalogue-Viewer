import { Card, CardMedia, Stack } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
const ImageSlider = ({ slides,currentIndex,setCurrentIndex }) => {
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
 

  return (
    <Stack p={2} sx={{width:"550px",height:"450px"}} >
      
      <Card >
        <CardMedia
         component="img"
         image={slides[currentIndex].url}
         alt={slides[currentIndex].title}
         sx={{width:"550px",height:"300px"}}
        />
      </Card>
      <Stack direction="row" gap={1} justifyContent="center" alignItems="center" sx={{mt:"5px"}}>
        <ArrowLeftIcon fontSize="large" onClick={goToPrevious}/>
        {slides.map((slide, slideIndex) => (
          <Card
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            
                <CardMedia
                 component="img"
                 image={slide.url}
                 alt={slide.title}
                 sx={{curson:"pointer",width:"100px",height:"100px"}}
                />

          </Card>
        ))}
        <ArrowRightIcon fontSize="large" onClick={goToNext}/>
      </Stack>
    </Stack>
  );
};

export default ImageSlider;
