import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';  
import Specification from './Specification';
import Details from './Details';
import ReviewCon from './Review';
import QuestionAndAnswer from './QuestionAndAnswer'; 

export default function DetailsTabs({infos}) {
  const [value, setValue] = React.useState(0);
  const [showChild, setShowChild] = React.useState(false);

    React.useEffect(()=>{
        setShowChild(true)
    },[])

  const handleChange = (e,n) => { 
    setValue(n);
  }; 

  let {specification, review, details, QAA} = infos;




  return (
    <Box className='product__details__tabs'>
        <Box bgcolor={'white'} className='header__box'>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                textColor='secondary'
                indicatorColor='secondary'
            >
                <Tab label="SPECIFICATION" />
                <Tab label="DETAILS" />
                <Tab label="REVIEW" />
                <Tab label="QUESTION & ANSWER" /> 
            </Tabs>
        </Box>


            {
                 showChild && value === 0? <Specification specification={specification}/> :''
            } 
            {
                 showChild && value === 1? <Details details={details}/> :''
            } 
            {
                 showChild && value === 2? <ReviewCon review={review}/> :''
            } 
            {
                 showChild && value === 3? <QuestionAndAnswer info={QAA}/> :''
            }  
    </Box>
  );
}