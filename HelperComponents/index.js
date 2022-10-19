 
import axios from 'axios';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';  
import AppContext from '../Components/AppContext';  
import Navbar from '../Components/Navbar/Navbar'; 


const Home = () => {

  const [products, setProducts] = useState([]);
  const {serverPort} = useContext(AppContext);
  const [buttonState, setButtonState] = useState();


  const setLoading = () => {

  }

  const setSuccess = () => {
    
  }

  const setError = () => {
    
  }

  let infosArray = ['best__rated', 'everyday__essentials', 'featured__products', 'flash__sale', 'high__light__of__the__week', 'innovated__gadget', 'pre__order', 'recently__added', 'recommended','upgrade__your__gaming__station', 'clearance', 'free__shipping', 'my__deals','work__from__anywhere'];

  let count = 0;
  const handleStartPost = () => {

    let postProduct = products[count];
    let postData = {};
        let promotion  = infosArray[Math.floor(Math.random()*14)] 
        postData.product__ides = postProduct._id;
        postData.promotion__name = promotion
        postData.user__key = localStorage.getItem('user__key');
        handleProductPostHandler(postData);

        count++;
  };

  const handleProductPostHandler = (data) => {
    axios.post(serverPort+'/api/promotion/post__single',data).then(res => {
      if(res.status === 200){
        handleStartPost(); 
        document.getElementById('insert__count__id').innerHTML = count;

      }
      
    }).catch(err => { 
      if(err.response.status === 400){
        handleStartPost(); 
        document.getElementById('insert__count__id').innerHTML = count;
      }
    })
  }

  // const postFilterNavbar = () => {
  //   axios.post( serverPort+'/api/product/multiple',products).then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err.message);
  //   })
  // }



// const handlePostMultipleProduct = () => {
//   axios.get('http://localhost:3009/getallfilterNavbarforchangedatabase')
//   .then(res => { 
//     setProducts(res.data.data);
//   }).catch(err => {
//     console.log(err);
//   })

  const handlePostMultipleProduct = () => {
    axios.get(serverPort+'/api/product/getTopFatherProduct',{headers:{top__father:'Computer & Accessories'}})
    .then(res => {   
      setProducts(res.data.products.slice(0,5000));
      
    }).catch(err => {
      console.log(err);
    }) 
  }


  return (
    <div>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital@1&display=swap" rel="stylesheet"/>
      </Head>  
      <Navbar/>  
       <button onClick={handlePostMultipleProduct}>Get All data</button>
 <button onClick={handleStartPost}>Post</button> 
    {
      products.length && <h1>Data Loaded</h1>
    } 
    <h1 id='insert__count__id'> </h1>
  
    </div>
  );
};

export default Home;