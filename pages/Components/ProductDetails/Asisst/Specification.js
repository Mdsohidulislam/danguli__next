import React from 'react'; 

const Specification = ({info}) => {
    
    let {title, infos} = info; 
    return (
        <div className='details__item'>
        <p className='details__header'>{title}</p>
        <table>
            <tbody> 
                {
                    infos.map((info, index) => {
                        return                  <tr key={index}>
                        <td className='title'>{ info.title }</td>
                        <td className='info'>{info.info}</td>
                    </tr>
                    })
                } 
            </tbody>
        </table>
</div> 
    );
};

export default Specification;