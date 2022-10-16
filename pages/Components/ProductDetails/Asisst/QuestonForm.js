import axios from 'axios';
import React, { useContext, useState } from 'react'; 
 

const QuestonForm = ({productId}) => {

    const [info ,setInfo] = useState({}); 

    const handleChange = (e) => {
        let newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        info.product__id = productId;
        info.post__time =utilsHelper.timeManagements.momentTimeMaker();
        info.ans = false;
        axios.post('http://localhost:3009/postQuestion', info)
        .then(res => { 
            if(res.status === 200){
                document.querySelectorAll('input, textarea').forEach(info => {
                    info.value=''
                })
            }
            getAllData('review');
        }).catch(err => {
            console.log(err.message);
        })
        
    }

    const getAllData =  (collectionName) => {
        axios.get('http://localhost:3009/getAllCollection',{headers:{collection: collectionName}})
        .then(res => { 
    
            let result = res.data.result;
            if(res.data.status__code === 200 && result.length){ 
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div className='user__review__form'>
        <p className='review__title'>Ask your question</p> 
        <form onSubmit={handleQuestionSubmit}>
            <div>
                <p>Your Name</p>
                <input type='text' onChange={handleChange} name='name' placeholder='Enter Your Name' required></input>
            </div>
            <div>
                <p>Your Email</p>
                <input type='email' onChange={handleChange} name='email' placeholder='Enter Your email' required></input>
            </div>
            <div>
                <p>Your Question</p> 
                <textarea name='question' onChange={handleChange} type='text' placeholder='Ask here your Question' required></textarea>
            </div> 
            <input type='submit' className='ask__question__submit__button' value='submit'/>
        </form>
    </div>
    );
};

export default QuestonForm;