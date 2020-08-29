import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { FormControl, Select, MenuItem } from '@material-ui/core'


import InfoCard from './InfoCard'
import {SortData} from "./utils"
import Table from "./Table"
import Map from './Map'
import "leaflet/dist/leaflet.css"
import FloatingIcon from "./FloatingIcon"
import Navbar from "./Navbar"


import './Home.css';


function Home() {

  const[isloadding, setisloadding]=useState(true)
  const [InputCountry , setInputCountry]= useState("worldwide")
  const[fullData , setFulldata]= useState([])
  const[country, setCountry]=useState([])
  const[tableData, setTableData]=useState([])
  const[mapCenter , SetMapCenter]=useState({ lat: 20.5937, lng: 78.9629 })
  const[mapZoom , setMapZoom]=useState(2)
  const[mapData , setMapData]= useState([])
  const[caseType, setCaseType]=useState("cases")
  
useEffect(() =>{

  fetch("https://disease.sh/v3/covid-19/all")
  .then((res) =>
    res.json())
    .then((data) =>{
      setFulldata(data)
      setisloadding(false)
    })
  }, [])

 useEffect(()=>{

const getcountryinfo = async ()=>{
  setisloadding(true)
  fetch("https://disease.sh/v3/covid-19/countries")
  .then((res) => res.json())
  .then((data) => {
  
    const countries = data.map((country)=>(
         {
           name:country.country,
           value:country.countryInfo.iso2
         }))
    let sortedData = SortData(data)
     setCountry(countries)
     setTableData(sortedData)
     setMapData(data)
     setisloadding(false)
   })
}
getcountryinfo()
 },[])

  const onCountryChanged= async (e)=>{
  const value = e.target.value
  setisloadding(true)
  const url = value === "worldwide"?
   "https://disease.sh/v3/covid-19/all" :
    `https://disease.sh/v3/covid-19/countries/${value}`

   await fetch(url).then((res) => res.json()).then((data) =>{
    setInputCountry(value)
    setFulldata(data)
    value === "worldwide"? SetMapCenter({ lat: 20.5937, lng: 78.9629 }):
    SetMapCenter({lat:data.countryInfo.lat, lng:data.countryInfo.long})
    value === "worldwide"? setMapZoom(2) : setMapZoom(5)
    setisloadding(false)
   })
  }

  return (
    
    <div className="App" id="top">
    <Navbar />
    <Grid container spacing={0}>
      {/* Left column */}

      <Grid item xs={12}sm={12} md={12} lg={8} xl={8} >
        <div className="left_col_inner_content">
          <div className="header" >
        <FormControl >
          <Select
          variant="outlined"
          value={InputCountry}
          onChange={onCountryChanged}
          >
            <MenuItem value="worldwide">worldwide</MenuItem>
            {country.map((country) =>{
              return <MenuItem value={country.value}>{country.name}</MenuItem>
            })}
          </Select>

        </FormControl>
        </div>
         <div className="info_cards">
         <InfoCard 
         onClick={(e) => setCaseType("cases")}
         caseType={caseType === "cases" && caseType}
         load = {isloadding}
         title = "Cases"
         cases={fullData.todayCases}
         totalCases={fullData.cases}
         />
         <InfoCard 
         load = {isloadding}
         onClick={(e) => {setCaseType("recovered")}}
         caseType={caseType === "recovered" && caseType}
         title= "Recovered"
         cases={fullData.todayRecovered}
         totalCases={fullData.recovered}/>

         <InfoCard 
         load = {isloadding}
         onClick={(e) => setCaseType("deaths")}
         caseType={caseType === "deaths" && caseType}
         title ="Deaths"
         cases={fullData.todayDeaths}
         totalCases={fullData.deaths}/>

         </div>
         <div>
           <Map 
           load = {isloadding}
           center ={mapCenter}
           zoom={mapZoom}
           data={mapData}
           caseType={caseType}/>
         </div>

        </div>
      </Grid>


       {/* right column */}
      <Grid item  xs={12} sm={12} md={12} lg={4} xl={4} >
        <div>
          <Table 
          load = {isloadding}
          data= {tableData}/>
        </div>
      </Grid>
      </Grid>

      <FloatingIcon />
       
       <p className="footer">Created by Riyazur Razak in <i className="fab fa-react"></i> </p>

    </div>
  );
}

export default Home;
