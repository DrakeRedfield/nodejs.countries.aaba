const axios = require('axios');

class Search {
    history = [];

    constructor(){
        // TODO: Read DB if exist
    }

    get paramsMapbox (){
        return {
            "access_token": process.env.MAPBOX_KEY || '',
            "limit": 5,
            "language": process.env.LANGUAGE_MAPBOX || 'es'

        }
    }

    async searchCity( place = '' ){
        // console.log('Ciudad a buscar: ',place);
        
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapbox
            });
            console.log('Entró al Try')
            const resp = await instance.get();
            console.log(resp.data);
            return [];
        } catch (error) {
            return [];
        }
    }
}

module.exports = Search;