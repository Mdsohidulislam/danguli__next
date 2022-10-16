import React from 'react'; 
import SearchBarContainer from '../SearchBarContainer/SearchBarContainer';
import SideNavbar from '../SideNavbar/SideNavbar';
import TopSmallNavbar from '../TopNavbar/TopSmallNavbar';

const Navbar = () => {

  React.useEffect(()=>{
    window.addEventListener('scroll',()=>{
      let doc = document.querySelector('.search__bar__main__container');
      
      if(doc){
        if(window.scrollY >= doc.offsetHeight){
          doc.classList.add('open'); 
        }else{
            doc.classList.remove('open') 
        } 
      }

    })
  },[])
  return (
    <div>
      <TopSmallNavbar/>
      <SearchBarContainer/> 
      <SideNavbar/>
    </div>
  );
};

export default Navbar;