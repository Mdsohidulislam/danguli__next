import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ProductsSearchForProductsHeader = ({infos}) => {

    const {currentPageAllProducts,  setViewProducts} = infos;

    const [searchText, setSearchText] = useState('');
    const handleFilterChangeAndFilterItem = (e) => {
        e.preventDefault(); 
        function findMatches(wordToMatch, array) {
            return array.filter((productInfosForFilter) => {
              // here we need to figure out if the city or state matches what was searched
            const regex = new RegExp(wordToMatch, "gi");
            return productInfosForFilter.infos.title.match(regex) || productInfosForFilter.infos.product__id.match(regex) || productInfosForFilter.infos.current__price.toString().match(regex) || productInfosForFilter.infos.previous__price.toString().match(regex) ||   productInfosForFilter.infos.child.match(regex) || productInfosForFilter.infos.parent.match(regex) || productInfosForFilter.infos.parentFather.match(regex);
            });
        }

        setViewProducts(findMatches(searchText, currentPageAllProducts))
        
        
    }
    

    return (
        <form className='my__store__single__search__container' onSubmit={handleFilterChangeAndFilterItem}>
        <input type='text' onChange={(e)=> setSearchText(e.target.value)} placeholder='Enter Keyword' required/>
        <button type='submit'> <FontAwesomeIcon icon={faSearch}/> </button>
    </form>
    );
};

export default ProductsSearchForProductsHeader;