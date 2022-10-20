import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ImageStepper({infos}) {
  let {imgSrc, setImgSrc, images} = infos;
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setImgSrc(() => images[activeStep+1]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setImgSrc(() => images[activeStep - 1]);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  
  return (
    <MobileStepper
      variant="dots"
      steps={images.length}
      position="static"
      activeStep={activeStep}
      sx={{ width: '100%'}}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}