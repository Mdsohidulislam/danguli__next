

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// export default function NextPrev({infos}) {

    // let {currentPageAllProducts, setViewProducts,  showCount, setShowCount, viewCount} = infos;

//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);

//     setViewProducts(currentPageAllProducts.slice(showCount, showCount+viewCount));
//     setShowCount(showCount+viewCount);
  //   window.scroll({
  //       top:0,
  //       behavior: 'smooth'
  //   })
  // };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     setViewProducts(currentPageAllProducts.slice( showCount-viewCount*2   ,showCount-viewCount));
//     setShowCount(showCount - viewCount);
//     window.scroll({
//         top:0,
//         behavior: 'smooth'
//     })
//   };

//   return (
//     <MobileStepper
//       variant="dots"
//       steps={Math.ceil(currentPageAllProducts.length / viewCount)}
//       position="static"
//       activeStep={activeStep} 
//       nextButton={
//         <Button size="small" onClick={handleNext} disabled={activeStep === Math.ceil(currentPageAllProducts.length / viewCount) - 1}>
//           Next
//           {theme.direction === 'rtl' ? (
//             <KeyboardArrowLeft />
//           ) : (
//             <KeyboardArrowRight />
//           )}
//         </Button>
//       }
//       backButton={
//         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//           {theme.direction === 'rtl' ? (
//             <KeyboardArrowRight />
//           ) : (
//             <KeyboardArrowLeft />
//           )}
//           Back
//         </Button>
//       }
//     />
//   );
// }


import { Pagination } from '@mui/material';
import React from 'react';

const NextPrev = ({infos}) => {
  let {currentPageAllProducts, setViewProducts,  viewCount} = infos;
  const handlePaginationChange = (event, value) => {
    let toView = viewCount * value;
    let sView = toView - viewCount;
    setViewProducts(currentPageAllProducts.slice(sView, toView))

      window.scroll({
          top:0,
          behavior: 'smooth'
      }) 

  }
  return (
    <div className='pagination__next__container'>
      <Pagination boundaryCount={5} color='secondary' count={Math.ceil(currentPageAllProducts.length / viewCount)} onChange={handlePaginationChange}/>
    </div>
  );
};

export default NextPrev;