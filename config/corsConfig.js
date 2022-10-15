
const corsConfig = (whiteList) => {
    const corsConfig = {
        origin: (origin , callback) => {
            if(whiteList.indexOf(origin) === -1){
                return callback(null, true);
            }else{
                throw new Error('Not Allowed by cors policy')
            }
        }
    }

    return corsConfig;
}


module.exports = {corsConfig};