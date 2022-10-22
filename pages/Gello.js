import React from 'react';
import compareProducts from '../utils/database/compare';

const Gello = () => {

    const handleCompare = (infos) => {
        let pLen = infos.length;
        let compareProducts = [];
        let collection = [];
        let childCollection = [];


        infos.forEach((infoM, index, arr) => {
            if(compareProducts.length === 0){
                compareProducts.push(infoM);
                let spf = infoM.infos.specifications;
                    spf.forEach((info, index) => {
                        collection.push(info.title);
                        childCollection.push(info.infos)
                    })
            }else{
                let newSpf = [];
                let spf = infoM.infos.specifications;
                    spf.forEach((info, index) =>{ 
                        let collectionIndex = collection.indexOf(info.title);
                        if(collectionIndex){
                            let collectionName = collection[collectionIndex];
                            let collectionChild = childCollection[collectionIndex];
                            let collectionData = compareCollection(collectionChild, info.infos);
                            newSpf.push({title: collectionName, infos: collectionData})
                        }
                    }) 
                infoM.infos.specifications = newSpf;
                compareProducts.push(infoM);
            }
        }) 
        let compareProductCollection  = [];

        compareProducts.forEach((info) => {

        })
    }
    const compareCollection = (sCollection, collection) => {
        let prevCollectionModel = []; 
        let finalCollectionModel = []; 

        sCollection.forEach((info) => {
            prevCollectionModel.push(info.title);
        }) 

        prevCollectionModel.forEach((info) => {
            let c = [];
            let cC = []
            collection.forEach((infoChild) => {
                c.push(infoChild.title);
                cC.push(infoChild);
            })
            let cIndex = c.indexOf(info)
            if( cIndex !== -1){
                let info = cC[cIndex];
                finalCollectionModel.push(info)
            }else{
                finalCollectionModel.push({title: info, info: ''})
            }

        })
        return finalCollectionModel;
    }
    return (
        <div>
            <h1>Hello world</h1>
            <button onClick={()=>handleCompare(compareProducts)}>Handle Check</button>
        </div>
    );
};

export default Gello;