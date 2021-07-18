import React from 'react';

import { Card, CardContent, Typography, Grid, Container, CircularProgress } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

// styles
import useStyles from './styles';

const CovidCards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const styles = useStyles();

  return (
    !confirmed ? <CircularProgress /> : (
      <>
      {/*<Grid container spacing={2} justify="center">*/}
        {/* INFECTED */}
        {/*<Grid item component={Card} xs={12} sm={3} className={cx(styles.card, styles.infected)}>
          {/*<CardContent>*/}
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed?.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of COVID-19</Typography>
          {/*</CardContent>
        </Grid>*/}
        {/* RECOVERED */}
        {/*<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>*/}
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={recovered?.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of recoveries of COVID-19</Typography>
          {/*</CardContent>
        </Grid>*/}
        {/* DEATHS */}
        {/*<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
        <CardContent>*/}
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={deaths?.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of deaths of COVID-19</Typography>
        {/*</CardContent>
        </Grid>
        </Grid>*/}
      </>
    )
  );
};

export default CovidCards;