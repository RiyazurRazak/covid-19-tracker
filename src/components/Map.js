import React from "react"
import { Map as LeafletMap, TileLayer } from "react-leaflet"
import "./Map.css"
import Skeleton from "@material-ui/lab/Skeleton";
import {showDataOnMap} from "./utils"




function Map(props){
    return(
        <div className="map">
        {props.load ? <Skeleton variant="rect"  height='300px' animation="wave" />:
        <LeafletMap center={props.center} zoom={props.zoom}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(props.data, props.caseType)}
      </LeafletMap>
}
        </div>
    )
}

export default Map;

