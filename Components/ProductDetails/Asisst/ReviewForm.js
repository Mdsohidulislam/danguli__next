import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ReviewForm = () => {
    const [star, setStar] = useState(0);
    const [info, setInfo] = useState({});

    const handleChange =  (e) => {
        let newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        info.review = star;
        console.log(info);
    }


    const selectPreview = (start) => {
        let one__start = document.getElementById('one__start');
        let two__start = document.getElementById('two__start');
        let three__start = document.getElementById('three__start');
        let four__start = document.getElementById('four__start');
        let five__start = document.getElementById('five__start');

        one__start.classList.remove('review__color');
        two__start.classList.remove('review__color');
        three__start.classList.remove('review__color');
        four__start.classList.remove('review__color');
        five__start.classList.remove('review__color');
        setStar(0)
        if(start === 1){
            setStar(1);
            one__start.classList.add('review__color');
        }else if(start === 2){
            setStar(2);
            one__start.classList.add('review__color');
            two__start.classList.add('review__color');

        }else if(start === 3){
            setStar(3);
            one__start.classList.add('review__color');
            two__start.classList.add('review__color');
            three__start.classList.add('review__color');
        }else if(start === 4){
            setStar(4);
            one__start.classList.add('review__color');
            two__start.classList.add('review__color');
            three__start.classList.add('review__color');
            four__start.classList.add('review__color');
        }else if(start === 5){
            setStar(5);
            one__start.classList.add('review__color');
            two__start.classList.add('review__color');
            three__start.classList.add('review__color');
            four__start.classList.add('review__color');
            five__start.classList.add('review__color');
        }
    }

    return (
        <div className='user__review__form'>
        <p className='review__title'>Submit your review</p>
        <div className='review__container'> 
        <div className='empty__review reviews'>
            <FontAwesomeIcon onClick={()=>selectPreview(1)} id='one__start' icon={faStar} className='start__element'/>
            <FontAwesomeIcon onClick={()=>selectPreview(2)} id='two__start' icon={faStar} className='start__element'/>
            <FontAwesomeIcon onClick={()=>selectPreview(3)} id='three__start' icon={faStar} className='start__element'/>
            <FontAwesomeIcon onClick={()=>selectPreview(4)} id='four__start' icon={faStar} className='start__element'/>
            <FontAwesomeIcon onClick={()=>selectPreview(5)} id='five__start' icon={faStar} className='start__element'/>
        </div> 
    </div>
        <form onSubmit={handleReviewSubmit}>
            <div>
                <p>Your Name</p>
                <input type='text' onChange={handleChange} name='reviewer__name' placeholder='Enter Your Name' required></input>
            </div>
            <div>
                <p>Your email</p>
                <input type='text' onChange={handleChange}  name='reviewer__email' placeholder='Enter Your email' required></input>
            </div>
            <div>
                <p>Your Review</p> 
                <textarea name='review' onChange={handleChange}  type='text' placeholder='Write here your review' required></textarea>
            </div> 
            <input type='submit' value='submit'/>
        </form>
    </div>
    );
};

export default ReviewForm;