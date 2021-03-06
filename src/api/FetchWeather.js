import axios from 'axios';


const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY ='9e2034edf711df51ff2950b2fdbfcc68';

export const FetchWeather = async (query) => {
    const {data} =await axios.get(URL,
        {
            params:{
                q:query,
                units:'metric',
                APPID:API_KEY,
            }
        });
        return data;
}