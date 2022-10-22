import React, { useState } from 'react';
    
// import allLaptop from './laptop';
const Search = () => { 
    const [searchResult, setSearchResult] = useState([]);
    const [searchStr, setSearchStr ] = useState('');
    
    
    function findMatches(wordToMatch, array) {
        return array.filter((productInfosForFilter) => {
          // here we need to figure out if the city or state matches what was searched
          const regex = new RegExp(wordToMatch, "gi");
          return productInfosForFilter.title.match(regex) || productInfosForFilter.product__id.match(regex) || productInfosForFilter.current__price.toString().match(regex) || productInfosForFilter.previous__price.toString().match(regex) ||   productInfosForFilter.child.match(regex) || productInfosForFilter.parent.match(regex) || productInfosForFilter.parentFather.match(regex);
        });
    }
    
    const handleChange = (e) => {
        // let str = e.target.value;        
        // let totalFinded = document.getElementById('total__found');
        // let searchStatus = document.getElementById('total__go__div');
        // let suggestions = document.getElementById('my__search__result');

        // if(str.length > 1){
            
        //     const matchArray = findMatches(str, allLaptop);
        //     totalFinded.innerText = matchArray.length;
        //     searchStatus.style.display = 'grid'
        //     setSearchResult(matchArray);
        //     setSearchStr(str); 
            
        // }else{

        //     totalFinded.innerText = ''  
        //     searchStatus.style.display = 'none'
        //     setSearchResult([]);
            
            
        // }
    }
    
    
    return ( 
        
        <div className='product__search__container' >   
            <div className='search__form__container'>
                <input type='text' placeholder='Search here'  className='search__input' onChange={handleChange}/>
                <button>search</button>
            </div>
        </div>
    );
};

export default Search;


// <div className='search__result__container' id='my__search__result'>
// <div className='search__result__item__container' >
// <div className='image__container'>
//     <img src='/dinner.png'></img>
// </div>
// <div className='info__container'>
//     <p className='title'>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built wit"</p>
//     <p className='product__id'>113.3332.3938,33</p>
//     <p className='product__id'>price: 3938,33</p>
// </div>
// </div>
// <div className='search__result__item__container' >
// <div className='image__container'>
//     <img src='/dinner.png'></img>
// </div>
// <div className='info__container'>
//     <p className='title'>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built wit"</p>
//     <p className='product__id'>113.3332.3938,33</p>
//     <p className='product__id'>price: 3938,33</p>
// </div>
// </div>
// <div className='search__result__item__container' >
// <div className='image__container'>
//     <img src='/dinner.png'></img>
// </div>
// <div className='info__container'>
//     <p className='title'>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built wit"</p>
//     <p className='product__id'>113.3332.3938,33</p>
//     <p className='product__id'>price: 3938,33</p>
// </div>
// </div>
// </div>