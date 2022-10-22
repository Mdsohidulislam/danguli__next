
        const utilsHelper = {};
        utilsHelper.stringOperations  = {}; 


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


        const serverUtils = {};
        serverUtils.converter = {};
        serverUtils.dataProducer = {};
        serverUtils.converter.FilterNavbarConverter = (data) => {
            let collections = [];
            data.forEach((infoTop) => {   
                infoTop.data.forEach((info) => { 
                    if(collections.indexOf(info) === -1){
                        collections.push(info.toLowerCase());
                    } 
                }) 
            })
            return collections;
        }
        serverUtils.dataProducer.filterNavbarAndSpecificationDataProducer = (specifications, keys) => {
            let categoryData = [];
            let productHeaders = [] 
            specifications.forEach((singleData) => {
                var {info, product__id} = singleData;
                
                info.forEach((specifications) => {
                    var {title, infos} = specifications;
                    infos.forEach((tr) => {
                        var {title:header , info:dataInfoTd} = tr;
                        let data__part =utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).split(' '); 
                        if(keys.indexOf(header.toLowerCase()) !== -1 || header.toLowerCase() === 'brand'){ 
                            let currentInsertProductHeaderIndex = productHeaders.indexOf(utilsHelper.stringOperations.specificationsStringConverter(header).toLowerCase())
                            let thisData = categoryData[currentInsertProductHeaderIndex]; 
        
                            if( currentInsertProductHeaderIndex !== -1){
        
                                let workingData = categoryData[currentInsertProductHeaderIndex]; 
                                let workingDataKeys = workingData[workingData.length - 1];
                                let prevData = workingData.slice(0, workingData.length - 1);
                                let workingDataIndex = workingDataKeys.indexOf(utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase());
                                let newData = [...prevData];
                                let newKeys= [...workingDataKeys]
                                
                                if(workingDataIndex === -1){ 
                                    newData.push([utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase(), [product__id]]);
                                    newKeys.push(utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase());
                                    newData.push(newKeys); 
                                    categoryData[currentInsertProductHeaderIndex] = newData;  
                                } else {   
                                    let currentWorkingProduct = workingData[workingDataIndex]
                                    let name = currentWorkingProduct[0];
                                    let ides = [...currentWorkingProduct[1]];
                                    ides.push(product__id) 
                                    workingData[workingDataIndex] = [name, ides];
                                    categoryData[currentInsertProductHeaderIndex] = workingData 
                                } 
                            }else{
                                // todo Completed task
                                productHeaders.push(utilsHelper.stringOperations.specificationsStringConverter(header).toLowerCase());
                                categoryData.push([[ utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase() , [ product__id ]] , [utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase()]])
                              // todo Completed task
                            }
                        } 
                    } )
                })
            }) 
        
            const finalFilteredArray = []; 
        
            productHeaders.forEach((info, index) => {
                    let currentData =  categoryData[index];
        
                    if(currentData.length ){
                        finalFilteredArray.push({name: info, dataset: categoryData[index]})
                    }
                
            })
        
            return finalFilteredArray;
        }

    
        module.exports = serverUtils;