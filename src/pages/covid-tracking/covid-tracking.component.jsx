import React from 'react';
import CovidCard from '../../components/covid-card/covid-card.component';
import {CovidChart} from '../../components/covid-chart/covid-chart.component';
import {CovidCountry} from '../../components/covid-country/covid-country.component';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { CovidApi, ChartApi, CountryApi } from '../../covid-api/covid-api';

import './covid-tracking.styles.css';

class CovidTracking extends React.Component {
      constructor () {
            super();
            this.state = {
                  covidData: {}, 
                  chartData: [],
                  country: {},
                  pickedCountryName: 'global'
            }
      }

      async componentWillMount() {
            const dataFetch = await CovidApi();
            this.setState({covidData: dataFetch});
            const chartDataFetch = await ChartApi();
            this.setState({chartData: chartDataFetch});
            const countryFetch = await CountryApi();
            this.setState({country: countryFetch});
            // console.log(this.state.country);
      }

      handleCountryPick = async (pickedCountry) => {
            if (pickedCountry == 'global') {
                  const dataFetch = await CovidApi();
                  this.setState({covidData: dataFetch});
            } else {
                  const pickedCountryDataFetch = await CovidApi(pickedCountry);
                  this.setState({covidData: pickedCountryDataFetch});
            }

            this.setState({pickedCountryName: pickedCountry});
            //  console.log(this.state.country);
            //  console.log(this.state.pickedCountryName);

      }
      

      render () {
            const {data} = this.state.covidData;
            const chartDataArray = this.state.chartData;
            const {countries} = this.state.country;
            
            
            return (
                  <div className = 'covid-tracking-main'>
                        <Header theme={this.props.theme}/>
                        <div className = 'covid-tracking-container'>
                              <CovidCard {...data} />
                              <CovidCountry  country = {countries} handleCountryPick = {this.handleCountryPick}/>
                              <CovidChart dailyData = {chartDataArray} pickedCountryData = {data} pickedCountryName = {this.state.pickedCountryName}/>
                        </div>
                        <Footer theme={this.props.theme} />
                        
                  </div>
            )
      }


}

export default CovidTracking;


