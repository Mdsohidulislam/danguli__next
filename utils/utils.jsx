import moment from 'moment';

const utilsHelper = {};

utilsHelper.calculators = {};
utilsHelper.timeManagements = {};
utilsHelper.stringOperations  = {};


utilsHelper.calculators.addAll = (nam) => {
    let sum = 0;
    for(let i = 0; i < nam.length; i++){
        sum += nam[i]
    } 
    return Number(sum);
}

// crypto my user password packages import end
 

utilsHelper.timeManagements.momentTimeConverter = (time) => {
    return moment(time, "YYYYMMDDhhmmssa").fromNow();
}


utilsHelper.stringOperations.stringMaker = (str) => {
    let regex1 = /'/g
    let regex2  = /"/g 
    let regex3  = /,/g  
    let regex4  = /`/g  
    let result = str.replace(regex1, '_____');
        result = result.replace(regex2, '=====');
        result = result.replace(regex3, '@@@@@');
        result = result.replace(regex4, '#####');
    
    return result;
}


utilsHelper.stringOperations.stringConverter = (str) =>  {
    let regex1 = /_____/g
    let regex2  = /=====/g 
    let regex3  = /@@@@@/g 
    let regex4  = /#####/g 
    let result = str.replace(regex1, "'");
        result = result.replace(regex2, '"');
        result = result.replace(regex3, ',');
        result = result.replace(regex4, '`'); 
    return result;
}
utilsHelper.timeManagements.momentTimeMaker = () => {  
    
    let year = moment().format('YYYY')
    let month = moment().format('MM')
    let day = moment().format('DD')
    let hour = moment().format('hh')
    let minute = moment().format('mm')
    let second = moment().format('ss')
    let amOrPm = moment().format('a')  

    return year+month+day+hour+minute+second+amOrPm // date formate is YYYYMMDDhhmmss
} 

utilsHelper.timeManagements.searchTimeMaker = () => {
    let times = {
        day:0,
        month:0,
        year:0,
        monthYear:0, 
    }

    times.day = moment().format('DD');
    times.month = moment().format('MM');
    times.year = moment().format('YYYY');
    times.monthYear = `${moment().format('MM')}/${moment().format('YYYY')}`;

    return times;
}

utilsHelper.stringOperations.stringCutter = function(str){
    let result = ''
    
    if(50 < str.length){
        result = str.slice(0, 50) + ' ...'
    }else {
        result = str;
    }       
     
    return result;
} 

utilsHelper.stringOperations.cartNnStringCutter = function(str){
    let result = ''
    
    if(65 < str.length){
        result = str.slice(0, 65) + ' ...'
    }else {
        result = str;
    }       
     
    return result;
} 

utilsHelper.stringOperations.cartStringCutter = (str) => {
    let result = ''
    
    if(374 < str.length){
        result = str.slice(0, 374) + ' ...'
    }else {
        result = str;
    }       
     
    return result;
}

utilsHelper.stringOperations.principalSpeech = (str) => {
    let result = ''
    
    if(233 < str.length){
        result = str.slice(0, 233) + ' ...'
    }else {
        result = str;
    }       
     
    return result;
}

utilsHelper.stringOperations.priceConverter = (price) => {
    
    let converterPrice =  price;
    converterPrice = converterPrice.replace(/,/g, '')
    converterPrice = converterPrice.split('.')[0]   
    
    return converterPrice;
}

utilsHelper.calculators.totalCartAccounting = () => {
    let total__price = 0;
    let total__product = 0;

    let allCartItems = JSON.parse(localStorage.getItem('all__cart')) || [];

    allCartItems.forEach((info) => {
        let price = Number(utilsHelper.stringOperations.priceConverter(String(info.price)));
        let quantity = Number(info.quantity);
        total__price += price * quantity;
        total__product += quantity;
 
    }) 

    return{ total__price, total__product}; 
} 

utilsHelper.stringOperations.serverProductHtmlTextConverter = (cuttingItem) => {
    let result = '';
    result = cuttingItem.slice(1,cuttingItem.length-2);
    return result;
}

utilsHelper.stringOperations.lashStringMaker = (str) => {
    let result = str.replace(/\//g, 'slslslslslslslslsls');
    return result;
}

utilsHelper.stringOperations.slashStringConverter = ( str ) => {
    let result = str.replace(/slslslslslslslslsls/g, '/');
    return result;
}

utilsHelper.stringOperations.specificationsBackwardSlashMaker = (str) => {
    let regex = /\\/g;
    let result = str.replace(regex, 'bsssbsssbsssbss')
    return result;
}

utilsHelper.stringOperations.specificationsBackwardSlashConverter = (str) => {
    let regex = /bsssbsssbsssbss/g;
    let result = str.replace(regex, '\\');
    return result;
}

utilsHelper.stringOperations.serverProductConverter = (data) =>  {

            let startIndex = data.indexOf(`"overview":"`); 
            let endIndex = data.indexOf(`"stock"`); 
            let cuttingItem = data.slice(startIndex, endIndex);  

            let result = data.replace(cuttingItem, '');
            let obj = JSON.parse(result);

            let cutIndexStart = cuttingItem.indexOf(`
            `);
            let cutIndexEnd = cuttingItem.indexOf(`

            `)

            cuttingItem = cuttingItem.slice(cutIndexStart, cutIndexEnd);
        

            return {product: obj, overview: cuttingItem}
        
}

utilsHelper.stringOperations.specificationsStringMaker = (str) => {
    let regex1 = /'/g
    let regex2  = /"/g 
    let regex3  = /,/g  
    let regex4  = /`/g  
    let regex5 = /\t/g
    let regex6 = /:/g
    let regex7 = /\n/g 
    let result = str.replace(regex1, 'sss__sss___sss');
        result = result.replace(regex2, 'sss==sss===sss');
        result = result.replace(regex3, 'sss@@sss@@@sss');
        result = result.replace(regex4, 'sss##sss###sss');
        result = result.replace(regex5, 'sssttsssttsssttsssttsssttsss');
        result = result.replace(regex6, 'sssccsssccsssccsssccsssccsss');
        result = result.replace(regex7, 'sssnnsssnnsssnnsssnnsssnnsss');
    return result;
}

utilsHelper.stringOperations.specificationsStringConverter = (str) => {
    let regex1 = /sss__sss___sss/g
    let regex2  = /sss==sss===sss/g 
    let regex3  = /sss@@sss@@@sss/g  
    let regex4  = /sss##sss###sss/g  
    let regex5 = /sssttsssttsssttsssttsssttsss/g
    let regex6 = /sssccsssccsssccsssccsssccsss/g
    let regex7 = /sssnnsssnnsssnnsssnnsssnnsss/g 
    let result = str.replace(regex1, "'");
        result = result.replace(regex2, '"');
        result = result.replace(regex3, ',');
        result = result.replace(regex4, '`');
        result = result.replace(regex5, '\t');
        result = result.replace(regex6, ':');
        result = result.replace(regex7, '\n');
    return result;
}

utilsHelper.arrayOperation = {};
utilsHelper.arrayOperation.uniqueProductFinder = (arr) => {
    let ides = [];
    let products = [];
    arr.forEach((info) => {
        if(ides.indexOf(info.product__id) === -1){
            ides.push(info.product__id)
            products.push(info); 
        }
    })

    return products;
}

 utilsHelper.brandNameOrCategory = (array) => {

    let newProducts = []

    array.forEach((info) => { 
        let brandUpperName = info[0].toUpperCase();
            info.push(brandUpperName);
        newProducts.push(info);
    })

    return newProducts;
}

export default utilsHelper ;

