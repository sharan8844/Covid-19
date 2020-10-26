import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames'
const Cards = ( {data : { confirmed,recovered,deaths,lastUpdate } }) => {
    if(!confirmed){
        return 'loading...';
    }
   // console.log(lastUpdate);
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center" >
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)} >
         <CardContent style={{color:'blue'}}>
         <Typography color="textPrimary" gutterBottom>Infected People</Typography>
         <Typography variant="h5">
         <CountUp start={0} end={confirmed.value} duration={1.5} separator=","/>
         </Typography>   
         <h5 style={{color:"grey"}}>As fetched on: {new Date(lastUpdate).toDateString()}</h5>                                        
         {/* <Typography variant="body2">No of infected people</Typography> */}
         </CardContent>
         </Grid>
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)} >
         <CardContent style={{color:'green'}}>
         <Typography color="textPrimary" gutterBottom>Recovered People</Typography>
         <Typography variant="h5">
         <CountUp start={0} end={recovered.value} duration={1.5} separator=","/>
         </Typography>
         <h5 style={{color:"grey"}}>As fetched on: {new Date(lastUpdate).toDateString()}</h5>                                        
         {/* <Typography variant="body2">No of recovered</Typography> */}
         </CardContent>
         </Grid>
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)} >
         <CardContent style={{color:'red'}}>
         <Typography color="textPrimary" gutterBottom>Deaths</Typography>
         <Typography variant="h5">
         <CountUp start={0} end={deaths.value} duration={1.5} separator=","/>
         </Typography>
         <h5 style={{color:"grey"}}>As fetched on: {new Date(lastUpdate).toDateString()}</h5>                                        
         {/* <Typography variant="body2">No of casualties</Typography> */}
         </CardContent>
         </Grid>                      
        </Grid>
        </div>
    );
}
export default Cards;