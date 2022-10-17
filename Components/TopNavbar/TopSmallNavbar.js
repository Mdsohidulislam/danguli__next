import React, { useEffect } from 'react';
import Search from '../Search/Search';
import ActionItems from '../SearchBarContainer/ActionItems';
import CompanyLogo from '../SearchBarContainer/CompanyLogo';

const TopSmallNavbar = () => {

    useEffect(()=>{
        let myTopNav = document.getElementById('top__small__navbar__container');
        let windowScrollY = 0;
    window.addEventListener('scroll',()=>{
        
        if(window.scrollY >= myTopNav.offsetHeight){
                myTopNav.classList.add('open'); 
        }else{
            myTopNav.classList.remove('open') 
        } 
    })
    },[]) 

    return (
        <div className='top__small__navbar__container' id='top__small__navbar__container'>
                <div className='top__navbar'>
                    <CompanyLogo/>
                    <ActionItems/>
                </div>
                <div className='search__bar'>
                    <Search/>
                </div>
        </div>
    );
};

export default TopSmallNavbar;