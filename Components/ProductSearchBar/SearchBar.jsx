import React from 'react'; 
import SearchEngine from '../../../utils/SearchEngineUtils';

const SearchBarForProductsHeader = ({infos}) => {

    const {currentPageAllProducts, setCurrentPageAllProducts, setViewProducts } = infos;

    const handleSortSelectChange = (e) => {
        let sortName = e.target.value;
        if(sortName === 'default'){
            setCurrentPageAllProducts(currentPageAllProducts);
            setViewProducts(currentPageAllProducts.slice(0,40));
        }else{
            console.log(currentPageAllProducts)
            let manupulateProductsArray = dataTitleUppercaseConverter(currentPageAllProducts); 
            let result = SearchEngine.sortEngine[sortName](manupulateProductsArray);  
            console.log(result)
            
            setCurrentPageAllProducts(result);
            setViewProducts(result.slice(0,40));
            
        }
    }

    const dataTitleUppercaseConverter = (array) => {

        let newProducts = []

        array.forEach((info) => { 
            let mainData =   {...info}; 
            mainData.sortStr = mainData.infos.title.toUpperCase();
            mainData.current__price = mainData.infos.current__price;
            mainData.previous__price = mainData.infos.previous__price
            newProducts.push(mainData)
        })

        return newProducts;
    }
    
    return (
        <div className='my__store__sort__container'> 
        <select onChange={handleSortSelectChange}> 
            <option value='default'>Sort By</option>
            <option value='default'>Default</option>
            <option value='mostPopular'>Most Popular</option>
            <option value='lowToHighDiscount'>Low To High (discount)</option>
            <option value='highToLowDiscount'>High To Low (discount)</option>
            <option value='lowToHighPrice'>Low To High (Price)</option>
            <option value='highToLowPrice'>High To Low (Price)</option>
            <option value='aToZProductName'>A to Z (Product Name)</option>
            <option value='zToAProductName'>Z to A (Product Name)</option>
            <option value='aToZBrand'>A to Z (Brand Name)</option>
            <option value='zToABrand'>Z to A (Brand Name)</option>
        </select>
    </div>
    );
};

export default SearchBarForProductsHeader;