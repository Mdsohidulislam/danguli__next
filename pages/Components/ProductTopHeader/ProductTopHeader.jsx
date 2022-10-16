import { faArrowDownShortWide, faBorderAll, faEye, faFilter, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'; 
import AppContext from '../../AppContext';
import SearchEngine from '../../UTILS/SearchEngineUtils';

const ProductTopHeader = ({infos}) => {
    let {currentPageAllProducts, setViewProducts,  setShowCount, viewCount,   setViewCount, setCurrentPageAllProducts } = infos;

    const [threeItemView, setThreeItemView] = useState(3);
    const [filterButton, setFilterButton] = useState(true); 
    const { rowActive,  setRowActive} = useContext(AppContext);

    useEffect(()=>{
        setViewProducts(currentPageAllProducts.slice(0, viewCount));
    },[])
    const hanldeFilterbuttonClick  = () => {
        setFilterButton(!filterButton);
        document.querySelector('.home__view__container').classList.toggle('active')
    }
    const handleRowGridClick = () => {
        setRowActive(true)
    }
    const handleCollumGridClick = () => {
        setRowActive(false)
    }
    const handleClickThreeItemsSearch = () => {
        setThreeItemView(1);
    }
    const handleClickThreeItemsSort = () => {
        setThreeItemView(3);
    }
    const handleClickThreeItemsView = () => {
        setThreeItemView(2);
    }
    // todo product show start
    // todo product show start
    // todo product show start
    
    // todo product show end
    // todo product show end
    // todo product show end
    // todo view count start
    const handleInputChangeProductViewCount = (e) => {
        if(e.target.value === 'default'){
            setViewProducts(currentPageAllProducts.slice(0, viewCount));
        }else {
            setShowCount(Number(e.target.value));
            setViewCount(Number(e.target.value));
            setViewProducts(currentPageAllProducts.slice(0, e.target.value)); // todo
        }
    }
    // todo view count end
    // todo product sort start
    const handleSortSelectChange = (e) => {
        let sortName = e.target.value;
        if(sortName === 'default'){
            setCurrentPageAllProducts(currentPageAllProducts);
            setViewProducts(currentPageAllProducts.slice(0,viewCount));
        }else{ 
            let manupulateProductsArray = dataTitleUppercaseConverter(currentPageAllProducts); 
            let result = SearchEngine.sortEngine[sortName](manupulateProductsArray);  
            
            
            setCurrentPageAllProducts(result);
            setViewProducts(result.slice(0, viewCount));
            
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
    // todo product sort  end
    return (
        <div>
            <div className='product__top__header__container'>
                <div className='left__container'>
                    <button className={filterButton ? "btn__style__active" : ''} onClick={hanldeFilterbuttonClick}><FontAwesomeIcon icon={faFilter}/></button>
                    <button className={threeItemView === 3 ? "btn__style__active" : ""} onClick={handleClickThreeItemsSort}><FontAwesomeIcon icon={faArrowDownShortWide}/></button>
                    <button className={threeItemView === 2 ? "btn__style__active" : ""} onClick={handleClickThreeItemsView}><FontAwesomeIcon icon={faEye}/></button>
                    <button className={threeItemView === 1 ? "btn__style__active" : ""} onClick={handleClickThreeItemsSearch}><FontAwesomeIcon icon={faSearch}/></button>
                    <button className={!rowActive ? "btn__style__active" : ""} onClick={handleCollumGridClick}><FontAwesomeIcon icon={faBorderAll}/></button>
                    <button className={rowActive? "btn__style__active": ""} onClick={handleRowGridClick}><FontAwesomeIcon icon={faList}/></button>
                </div>
                <div className='right__container'>
                    {threeItemView === 1? 
                    <div className='search__box__container'>
                        <input placeholder='Enter your keyword  for search' defaultValue={'Hello world'}></input>
                        <button><FontAwesomeIcon icon={faSearch}/></button>
                    </div> :""}
                    {threeItemView === 2 ?
                    <select onChange={handleInputChangeProductViewCount}> 
                        <option value='default'>View</option>
                        <option value='default'>Default</option> 
                        <option value={40*1}>{40*1}</option>
                        <option value={40*2}>{40*2}</option>
                        <option value={40*3}>{40*3}</option>
                        <option value={40*4}>{40*4}</option>
                        <option value={40*5}>{40*5}</option>
                    </select>  :''}
                    {threeItemView === 3? 
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
                    :""}
                </div>
            </div>
            
        </div>
    );
};

export default ProductTopHeader;