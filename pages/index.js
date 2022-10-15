import axios from 'axios';
import Head from 'next/head';
import React, { useContext, useState } from 'react';
import AppContext from './AppContext';
import FinalLoading from './Components/Loading/FinalLoading';
import Navbar from './Components/Navbar/Navbar';
import SideNavbar from './Components/SideNavbar/SideNavbar';
import { ChildProductsViews } from './Components/Views/ChildProductsViews/ChildProductViews';

const Home = () => {

  const [products, setProducts] = useState([]);
  const {serverPort} = useContext(AppContext)

  const postFilterNavbar = () => {
    axios.post( serverPort+'/api/product/multiple',products).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err.message);
    })
  }



// const handlePostMultipleProduct = () => {
//   axios.get('http://localhost:3009/getallfilterNavbarforchangedatabase')
//   .then(res => { 
//     setProducts(res.data.data);
//   }).catch(err => {
//     console.log(err);
//   })

  const handlePostMultipleProduct = () => {
    axios.get('http://localhost:3009/getAllCollection',{headers:{collection:'details__product'}})
    .then(res => { 
      setProducts(res.data.result);
    }).catch(err => {
      console.log(err);
    })
  // axios.get(`http://localhost:7000/hello`)
  // .then(res => {
  //   console.log(res);
  // }).catch(err => {
  //   console.log(err);
  // })
}

  return (
    <div>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital@1&display=swap" rel="stylesheet"/>
      </Head>  
      <Navbar/>  
      <button onClick={postFilterNavbar}>Get All data</button>
 <button onClick={handlePostMultipleProduct}>Post</button> 
    {
      products.length && <h1>Data Loaded</h1>
    }
    </div>
  );
};

export default Home;