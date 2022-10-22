import { faBars, faCartShopping, faHeart, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'; 
import {   useContext, useEffect, useState } from 'react';    
import active__utils from '../../utils/Active__utils';
import AppContext from '../AppContext';

 
const ActionItems = () => { 

    const [openNav, setOpenNav] = useState(false);
    const {totalCarts, totalHearts} = useContext(AppContext)
    

    const handleOpenSideNav = () => {
        document.querySelector('.next__side__navbar__container').classList.toggle('open');
        setOpenNav(!openNav)
    }

    useEffect(()=>{ 
        let closeBtn = document.querySelector('.close___navbar__button');
        if(closeBtn){
            closeBtn.addEventListener('click', ()=>{
                setOpenNav(false);
            })
        }
    },[])

    const handleSideSmallCartOpen = () => {
        active__utils.active__cart()
    }

    return (
        <div>
                <div className='icons__div search__bar__element'>
                    <div className='logo__item'>
                    <div className='quantity'>{totalCarts.quantity}</div>

                        <FontAwesomeIcon onClick={handleSideSmallCartOpen} className='actions__icon' icon={faCartShopping}/>
                    </div>
                    <div className='logo__item'>
                    <div className='quantity'>{totalHearts.quantity}</div>   
                        <Link  href='/Wishlist'>
                            <FontAwesomeIcon className='actions__icon' icon={faHeart}/>
                        </Link>
                    </div> 
                    <div className='logo__item'> 
                        <FontAwesomeIcon className='actions__icon' icon={faUser}/>
                    </div>
                    <div className='logo__item open__menu__bar' onClick={handleOpenSideNav}> 
                    {
                        !openNav? <FontAwesomeIcon className='actions__icon' icon={faBars}/>  : <FontAwesomeIcon className='actions__icon' icon={faXmark}/>
                    }
                        
                        
                    </div>
                </div>
        </div>
    );
};



export default ActionItems

