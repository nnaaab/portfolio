import axios from 'axios';


const myUrl = 'https://covid19.mathdro.id/api';

export const CovidApi = async (country) => {

      let countryUrl = myUrl;

      if (country && country != 'global') {
            countryUrl = `${myUrl}/countries/${country}`;
      }
      try{
            const covidData = await axios.get(countryUrl);
            return covidData;
      } catch (error) {
            alert(error.message);
      }

};



export const ChartApi = async () => {
      try {
            const {data} = await axios.get(`${myUrl}/daily`);
            const modifiedData = data.map((dataCube) => ({
                  confirmedTotal: dataCube.confirmed.total,
                  deathsTotal: dataCube.deaths.total,
                  date: dataCube.reportDate
            
                  
            })); 
            // console.log(data);
            return modifiedData;
            

      } catch (error) {
            console.log('chart api error', error.message);
      }

}

export const CountryApi = async () => {
      try {
            const {data} = await axios.get(`${myUrl}/countries`);
            // console.log(countryData);
            // console.log(data);
            return data;
            
      } catch (error) {
            console.log('country api error', error.message)
      }
}