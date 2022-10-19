import { useContext } from 'react';  
import AppContext from '../AppContext';
import CartEightNext from '../Carts/CartEight/CartEightNext';
import RowCart from '../Carts/RowCart/RowCart';
import FilterNavbar from '../FilterNavbar/FilterNavbar';
import NextPrev from '../ProductSearchBar/NextPrev';
import ProductTopHeader from './ProductTopHeader';

const HomeView = ({infos}) => {
    let { setViewProducts, showCount, setShowCount, viewCount, filterNavbarData ,  setViewCount,   viewProducts , offerProduct, setOfferProduct} = infos;
    const { rowActive,  currentPageAllProducts, setCurrentPageAllProducts ,} = useContext(AppContext); 
    
    return (
        <div>

            <div className='home__view__container'>
            <ProductTopHeader infos={{currentPageAllProducts, setViewProducts,  setShowCount, viewCount,   setViewCount, setCurrentPageAllProducts }}/>  
            <div className='products__container'>   
                {!rowActive ? 
                    <div className='column__carts__container'>
                    {
                                viewProducts.map((info, index) =>   <CartEightNext infos={info} setOfferProduct={setOfferProduct}count={index}  key={index}/>)
                        }
                    </div> :
                    
                    <div className='row__carts__container'>
                            {
                                viewProducts.map((info, index) => <RowCart infos={info} key={index}/>)
                            }
                    </div> } 
            </div>
            <NextPrev infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount}}/>
            <div className='side__filter__bar__home__view'> 
                <FilterNavbar infos={{filterNavbarData, currentPageAllProducts,   setViewProducts, setCurrentPageAllProducts, viewCount }}/>
            </div>
            </div>
        </div>
    );
};

export default HomeView;