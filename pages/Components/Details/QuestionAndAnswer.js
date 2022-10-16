import React from 'react';
import QAndA from '../ProductDetails/Asisst/QAndA';
import QuestonForm from '../ProductDetails/Asisst/QuestonForm';

const QuestionAndAnswer = ({info}) => {
    return (
        <div className='question__and__ans__container'>
        {info.length? 
        <div>
            {
                info.map((info, index) =>{
                    return <QAndA key={index} info={info}/>
                })
            }
        </div> :""}
        <QuestonForm productId={'111.111.11.33.55'}/> 
</div> 
    );
};

export default QuestionAndAnswer;