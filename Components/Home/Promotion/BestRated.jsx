import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import productsDatabase from '../../../utils/database/products';
import AppContext from '../../AppContext';
import UpgradeYourGamingStation from '../HomePagerSliders/UpgradeYourGamingStation';

const BestRated = () => {
    let infosArray = ['best__rated', 'everyday__essentials', 'featured__products', 'flash__sale', 'high__light__of__the__week', 'innovated__gadget', 'pre__order', 'recently__added', 'recommended','upgrade__your__gaming__station', 'clearance', 'free__shipping', 'my__deals','work__from__anywhere']

    const [products, setProducts] = useState([]);
    const {serverPort} = useContext(AppContext)
    let promotion__name = 'best__rated';
    useEffect(()=>{
        axios.get(serverPort+'/api/promotion/single__promotion__get',{headers:{promotion: promotion__name}})
        .then(res => { 
            if(res.data.status__code === 200){
                let sProducts  = res.data.products;
                    sProducts = sProducts.sort(()=> Math.random() - 0.5);
                    setProducts(sProducts.slice(0,24));
            }
        }).catch(err => {
            console.log(err);
        })
    },[])

    return (
        <div>
            {
                products.length ? <UpgradeYourGamingStation product={{products, promotion__name, name: 'Best Rated'}}/> : ''
            }
        </div>
    );
};

export default BestRated;