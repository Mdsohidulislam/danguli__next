import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import productsDatabase from '../../../utils/database/products';
import AppContext from '../../AppContext';
import UpgradeYourGamingStation from '../HomePagerSliders/UpgradeYourGamingStation';

const UpgradeUGS = () => {
    const [products, setProducts] = useState([]);
    const {serverPort} = useContext(AppContext)
    let promotion__name = 'upgrade__your__gaming__station';
    useEffect(()=>{
        axios.get(serverPort+'/api/promotion/single__promotion__get',{headers:{promotion__name: 'upgrade__your__gaming__station'.replace(/__/g,'underScore')}})
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
                products.length ? <UpgradeYourGamingStation product={{products, promotion__name, name: 'Upgrade Your Gaming Station'}}/> : ''
            }
        </div>
    );
};

export default UpgradeUGS;