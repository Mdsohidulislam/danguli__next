import React from 'react';

const Details = ({details}) => { 
    return (
        <div>
            <div className='details__description__container'>
                {
                    details.map((info, index) => {
                        if(info.tag !== 'img'){
                            return <info.tag key={index}>{info.text}</info.tag>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Details;