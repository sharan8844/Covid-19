import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let urll = url;
    if(country){
        urll = `${url}/countries/${country}`;
    }    
    try{
       // console.log(country)
        const {data} = await axios.get(urll);
        const modData = {
            confirmed : data.confirmed,
            recovered : data.recovered,
            deaths : data.deaths,
            lastUpdate : data.lastUpdate               
        }
        return modData;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        
        const modifData = data.map( (dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate
        }));
        return modifData;
       // console.log(data);
    }
    catch(error){
        
    }
}
export const fetchCountries = async() => {
    try{
        const { data : {countries} } = await axios.get(`${url}/countries`);
        
        // const modifData = data.map( (dailyData) => ({
        //     confirmed : dailyData.confirmed.total,
        //     deaths : dailyData.deaths.total,
        //     date : dailyData.reportDate
        // }));
        // return modifData;
        return countries.map( (country) => country.name );
        //console.log(res);
    }
    catch(error){
        console.log(error);
    }
}