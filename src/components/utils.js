import React from 'react'
import { Circle, Popup } from "react-leaflet";
import "./utlis.css"

const casesTypeColors = {
    cases: {
      hex: "#ff0000",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 1200,
    },
    deaths: {
      hex: "#808080",
      multiplier: 2000,
    },
  };

export function SortData(data){
   return data.sort((a , b)=> {
    if(a.cases > b.cases){
        return -1
    }
    else{
        return 1
    }
})
}

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.3}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})`}}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {(country.cases)}
          </div>
          <div className="info-recovered">
            Recovered: {(country.recovered)}
          </div>
          <div className="info-deaths">
            Deaths: {(country.deaths)}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

    
 




     
