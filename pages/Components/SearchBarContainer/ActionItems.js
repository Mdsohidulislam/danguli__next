import { faBars, faCartShopping, faHeart, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react'; 
import active__utils from '../../UTILS/Active__utils';

 
const ActionItems = () => { 

    const [openNav, setOpenNav] = useState(false);


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

    const handleSmallCart = () => { 
        
        active__utils.active__cart();
    }

    return (
        <div>
                <div className='icons__div search__bar__element'>
                    <div className='logo__item'>
                    <div className='quantity'>{13}</div>

                        <FontAwesomeIcon onClick={handleSmallCart} className='actions__icon' icon={faCartShopping}/>
                    </div>
                    <div className='logo__item'>
                    <div className='quantity'>{ 33}</div>   
                        <Link  href='/wishlist'>
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

const CompanyLogo = () => {
    
    const router = useRouter(); 

    const handleGoHome = () => {
        router.push('/');
    }

    return (
        <div className='logo__div search__bar__element'>
            <img src='/logo.png' className='img__logo' alt='store logo' onClick={handleGoHome}></img>
        </div>
    )
}

export { CompanyLogo, ActionItems };

