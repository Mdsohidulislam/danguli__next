import React, { useContext } from 'react'; 
import Search from '../Search/Search';
import ActionItems  from './ActionItems';
import CompanyLogo from './CompanyLogo';

 
// import { faCaretDown, faHome } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBarContainer = () => {
    
    
    return (
 
        <div className='search__bar__main__container top__navbar__big' id='my__top__navbar'>
                <CompanyLogo/>
                <div className='search__div search__bar__element'>
                    <Search/>
                </div>
                <ActionItems/>
        </div>
 

    );
};

export default SearchBarContainer;