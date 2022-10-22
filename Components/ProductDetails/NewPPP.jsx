import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const DetailsView = () => {
    let param = useParams();

    console.log(param);

    useEffect(()=>{
        let url = param.urls.split('_____')[0]
        let index = param.urls.split('_____')[1]
        axios.get('http://localhost:3009/getsSingleProductDetails',{headers:{url, ID: Number(index)}})
        .then(res => {  
            let {newInfo, newOverviews, newSpecification, newDetails} = res.data.infos;
            
        }).catch(err => {
            console.log(err.message);
        })
    
    },[])
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
};

export default DetailsView;