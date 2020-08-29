import React from "react"
import "./Table.css"
import Skeleton from '@material-ui/lab/Skeleton';


function Table(props){
    return (
        <div className="table">
            <h2>List of Countries</h2>
          {props.load? <Skeleton variant="rect"  height='570px' animation="wave" /> :
          props.data.map((country) =>{
              return <tr>
                  <td>{country.country}</td>
                  <td>{country.cases}</td>
              </tr>
          })}
        </div>
    )
}


export default Table;