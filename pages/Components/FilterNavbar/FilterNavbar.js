import { faFilter, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';
import SearchEngine from '../../UTILS/SearchEngineUtils';
import { utilsHelper } from '../../UTILS/utils';

const FilterNavbar = ({infos}) => {

    let {filterNavbarData, currentPageAllProducts,   setViewProducts, setCurrentPageAllProducts, viewCount } = infos;
    let {prevCurrentPageAllProducts, setPrevCurrentPageAllProducts} = useContext(AppContext);        

    const [selectedFilterNav, setSelectedFilterNav] =  useState([]);
    const [selectedId, setSelectedId] = useState([]);
        
    useEffect(()=>{
        
        let data = document.querySelectorAll('.filter__navbar__items__container');
        let titles = document.querySelectorAll('.filter__navbar__items__container > .filter__navbar__title');
        
 

                titles.forEach((info) => {
                    info.addEventListener('click', closeNav)

                })
 
                data.forEach(info => { 
                    info.addEventListener('click', openNavbar)
                })
                

 

                

        function openNavbar (e) {
            
                
                let title = this.querySelector('.filter__navbar__title');
                let data = this.querySelector('.filter__navbar__items'); 
                let dataHeight = data.getBoundingClientRect().height;
                let plus  = this.querySelector('.filter__navbar__title > .plus');
                let minus  = this.querySelector('.filter__navbar__title > .minus');
                let lists = data.querySelectorAll('li');
                let sum = 0; 
            


                lists.forEach( (listInfo) => {
                        let liHeight = listInfo.getBoundingClientRect().height;
                        sum += liHeight;
                    })
                    
                if(dataHeight === 0 ){  
                    sum = Math.ceil(sum);
                    data.style.height =  `${sum}px`
                    minus.style.display = 'inline'
                    plus.style.display = 'none' 
                    
                } 
        }

        function closeNav (e) {
            let title = e.path[0]
            let plus  = title.querySelector('.plus');
            let minus  = title.querySelector('.minus');
            let data = e.path[1].querySelector('.filter__navbar__items')
            let dataHeight = data.style.height; 
            if(dataHeight){
                data.style.height = 0;
                minus.style.display = 'none'
                plus.style.display = 'inline' 
            }
        }
    },[]) 

    let count = 0;
    
    const handleFilterProducts = (ides) => {
        
        let name = ides[0];
        let id = ides[1];
        let newSelectedId = [...selectedId];
        let newSelectedFilterNav = [...selectedFilterNav];
        let filterNavIndex = newSelectedFilterNav.indexOf(name);
        
        if(filterNavIndex === -1){ 

            newSelectedFilterNav.push(name);
            newSelectedId.push(id);
            setSelectedId(newSelectedId); 
            setSelectedFilterNav(newSelectedFilterNav);
            let uniqueId = [];
            newSelectedId.flat(Infinity).forEach((info) => {
                if(uniqueId.indexOf(info) === -1){
                    uniqueId.push(info)
                }
            })  

            
            let result = SearchEngine.productsIdesFinder(uniqueId, prevCurrentPageAllProducts.length ? prevCurrentPageAllProducts : currentPageAllProducts);
            
            if(result.length !== 0){


                if(prevCurrentPageAllProducts.length){
                    let newCPAP = [];
                    newCPAP = [...currentPageAllProducts];
                    newCPAP.push(result); 
                    newCPAP = utilsHelper.arrayOperation.uniqueProductFinder(newCPAP.flat(Infinity));
                    setCurrentPageAllProducts(newCPAP );
                    setViewProducts(newCPAP.slice(0, viewCount));
                }else{
                    setPrevCurrentPageAllProducts(currentPageAllProducts);
                    setCurrentPageAllProducts(result);
                    setViewProducts(result.slice(0, viewCount))
                } 

            } 

        }else{ 
 
            newSelectedFilterNav.splice(filterNavIndex, 1);
            newSelectedId.splice(filterNavIndex, 1);
            setSelectedFilterNav(newSelectedFilterNav);
            setSelectedId(newSelectedId)
            
            let uniqueId = [];
            newSelectedId.flat(Infinity).forEach((info) => {
                if(uniqueId.indexOf(info) === -1){
                    uniqueId.push(info)
                }
            })    

            console.log(uniqueId);

            let result = SearchEngine.productsIdesFinder(uniqueId, currentPageAllProducts);
            console.log(result);
            if(result.length !== 0){
                
                if(prevCurrentPageAllProducts.length){
                    let newCPAP = utilsHelper.arrayOperation.uniqueProductFinder(result);
                    setCurrentPageAllProducts(newCPAP);
                    setViewProducts(newCPAP.slice(0, viewCount));
                }else{
                    setPrevCurrentPageAllProducts(currentPageAllProducts);
                    setCurrentPageAllProducts(result);
                    setViewProducts(result.slice(0, viewCount))
                }
            }else{
                setCurrentPageAllProducts(prevCurrentPageAllProducts);
                setViewProducts(prevCurrentPageAllProducts.slice(0, viewCount));
                setPrevCurrentPageAllProducts([]); 
            } 
        }
    }
    

    return (
        <div className='filter__navbar__container'>
            <p className='head'><FontAwesomeIcon icon={faFilter}/> FILTER BY</p>
            <ul className='filter__navbar'>
                {
                    
                    filterNavbarData.map((info, index) => {
                        
                        return <li className='filter__navbar__items__container' key={index}>
                        <p className='filter__navbar__title'>{info.name.toUpperCase()} 
                        <span className='plus show__or__hidden'><FontAwesomeIcon icon={faPlus}/></span>
                        <span className='minus show__or__hidden'><FontAwesomeIcon icon={faMinus}/></span>
                        </p>
                        <ul className='filter__navbar__items'> 
                            { 
                                info.dataset.slice(0, info.dataset.length -1 ).map((childInfo, childIndex) => {
                                    count++ 
                                    return <li key={childIndex} >
                                    <input type="checkbox" onClick={()=>handleFilterProducts(childInfo)} id={`nav__link__${count}`} name="vehicle1" value="Bike"/>
                                    <label htmlFor={`nav__link__${count}`}>{childInfo[0].toUpperCase()}<span className='quantity'>{info.dataset[childIndex].slice(info.dataset[childIndex].length -1)[0].length}</span></label> 
                                </li>  
                                })
                            }
                            
                        </ul>
                    </li>   
                    })
                }  
            </ul>
        </div>
    );
};

export default FilterNavbar;