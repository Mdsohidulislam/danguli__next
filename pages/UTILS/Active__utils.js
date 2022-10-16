import { useContext } from "react";
import AppContext from "../AppContext";

const active__utils = {}

active__utils.active__cart = () => {
    document.getElementById('my__side__small__cart').classList.toggle('active');
    document.querySelector('body').classList.toggle('active')
}


active__utils.image___selector = (infos, imagePort) => {
    let serverPort = imagePort;
    let newImages = infos.infos.images.length ? infos.infos.images : [];
    let newImageCollection = [];
    for(let i = 0; i < newImages.length; i ++){
        if(newImages[i].indexOf('ryanscomputers') === -1){
            newImageCollection.push(serverPort+newImages[i])
        }
    } 
    if(newImageCollection.length === 0){
        newImageCollection.push('/sorry__image.jpg')
    }
    return newImageCollection;
}

export default active__utils;

