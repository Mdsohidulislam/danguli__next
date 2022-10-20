import * as React from 'react'; 
import Box from '@mui/material/Box';   
import SingleHeaderButton from '../HeaderButton/SingleHeaderButton'; 
import productsDatabase from '../../utils/database/products';

export default function ReferSlider() {
  const [value, setValue] = React.useState(0);
  const [showChild, setShowChild] = React.useState(false);

    React.useEffect(()=>{
        setShowChild(true)
    },[])

  const handleChange = (e,n) => { 
    setValue(n);
  }; 

  let product = productsDatabase.products.sort(()=> Math.random() - 0.5); 


  return (
    <Box >
        


            {
              showChild && <SingleHeaderButton infos={{sameBrandProducts:  product.slice(0,50), similarProducts :  product.slice(50, 100)}}/>
            }
    </Box>
  );
}