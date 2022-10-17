import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ListViewForProductsHeader = () => {

    const [gridActive, setGridActive] = useState(true)
    
    return (
        <div className='list__view__container'>
                <button className={gridActive? "list__view__grid": ""}> <FontAwesomeIcon icon={faBorderAll}/> </button>
                <button> <FontAwesomeIcon icon={faList}/> </button>
        </div>
    );
};

export default ListViewForProductsHeader;