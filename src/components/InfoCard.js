import React from 'react';
import {CardContent , Card , Typography} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import "./InfoCard.css"


function InfoCard (props){
    return(
      <Card className={`card ${props.caseType}`} onClick={props.onClick}>
          <CardContent>
              <Typography variant="h5" gutterBottom>{props.load ? <Skeleton animation="wave" width='130px' /> : props.title}</Typography>
              <Typography variant="h6" gutterBottom>{props.load ? <Skeleton animation="wave" width='110px' /> :`Today: ${props.cases}` }</Typography>
              <Typography variant = "subtitle2" gutterBottom> {props.load ? <Skeleton animation="wave" width='90px' /> :`Total: ${props.totalCases}`}</Typography>
          </CardContent>

      </Card>
    )
}

export default InfoCard;