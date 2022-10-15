
const Loading = () => {
    return (
        <div className="loading__container"> 
            <img src='/loading.gif' alt='data-loading'/>
            <div className="loading__cover"></div>
        </div>
        
    );
};

const LoadingSmall = () => {
    return (
        <div className="loading__container__small"> 
            <img src='/loading.gif' alt='data-loading'/>
            <div className="loading__cover"></div>
        </div>
        
    );
};
export { Loading, LoadingSmall };

