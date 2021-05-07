import React from 'react';
import {Line, Bar} from 'react-chartjs-2';

import './covid-chart.styles.css';


export const CovidChart = ({dailyData, pickedCountryData, pickedCountryName}) => {

      // console.log(pickedCountryData,pickedCountryName)
      const lineChart = (
            dailyData.length
            ?
            (<Line
                  data = {{
                        labels: dailyData.map((dataCube) => (dataCube.date)),
                        datasets: [{
                              label: 'Infected',
                              data:  dailyData.map((dataCube) => (dataCube.confirmedTotal)),
                              borderColor: "#3333ff" 

                        },{
                              label: 'Deaths',
                              data:  dailyData.map((dataCube) => (dataCube.deathsTotal)),
                              borderColor: "red",
                              backgroundColor: "rgba(255,0,0,0.5)",
                              

                        }]
                  }}
            
            
            
            />)
            :
            "load"
      );

      const barChart = (
            pickedCountryName != 'global'
            ?
            (<Bar 
                  data = {{
                        labels: ['infected', 'recovered','deaths'],
                        datasets: [{
                              label: "people",
                              backgroundColor: [
                                    "rgba(0,0,255,0.5)",
                                    "rgba(0,255,0,0.5)",
                                    "rgba(0,0,255,0.5)"
                              ],
                              data: [pickedCountryData.confirmed.value,pickedCountryData.recovered.value,pickedCountryData.deaths.value]

                        }]
                  }}
                  options = {{
                        legend: {display:false},
                        title:{display:true, text: `Current State in ${pickedCountryName}`}
                  }}
            
            
            
            />)
            :
            null

      );
      
      return (

            <div className = 'covid-chart-container'>
                 
                 {pickedCountryName != 'global' ? barChart : lineChart}
            
                  
            </div>
      )
      
     

};

