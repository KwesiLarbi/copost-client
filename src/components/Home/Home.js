/** @jsxRuntime classic
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Grid, GridList, GridListTile } from '@material-ui/core';
import { jsx, Box, Grid, Container } from 'theme-ui';
import { fetchData } from '../../api/index';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';

// Components
import Banner from '../Banner/Banner';
import CovidCards from '../CovidCards/CovidCards';
import NewYorkTimes from '../NewYorkTimes/NewYorkTimes';
import YouTube from '../YouTube/YouTube';
import CountryPicker from '../CountryPicker/CountryPicker';
import Posts from '../Posts/Posts';
import Tags from '../Tags/Tags';

import useStyles from './styles';

const Home = () => {
  const [covidData, setCovidData] = useState({});
  const [country, setCountry] = useState('');
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    async function fetchedData() {
      const result = await fetchData();

      setCovidData(result);
    }

    fetchedData();
  }, []);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleCountryChange = async (country) => {
    const fetchedCountryData = await fetchData(country);

    setCountry(fetchedCountryData);
  }

  return (
    <>
      <Banner />
      <section>
        <Container>
          <div 
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            <NewYorkTimes />
            <main
              sx={{
                flexGrow: 99999,
                flexBasis: 0,
                minWidth: 320,
              }}>
                <Posts setCurrentId={setCurrentId} />
            </main>
            <aside
              sx={{
                flexGrow: 1,
                flexBasis: 'sidebar'
              }}
            >
              <Tags />
              <CovidCards data={covidData} />
            </aside>
          </div>
        </Container>
      </section>
      {/*<Grid container item xs={2} spacing>
        <GridList cellHeight="auto" className={classes.gridList}>
          <GridListTile className={classes.gridListTile} cols={1}>
            <Posts setCurrentId={setCurrentId} />
          </GridListTile>
        </GridList>
      </Grid>
      <Grid container item xs={9} spacing={3}> 
        <GridList cellHeight="auto" className={classes.gridList}>
          <GridListTile className={classes.gridListTile} cols={1}>
            <h1>Tags</h1>
            <CovidCards data={covidData} />
            <NewYorkTimes />
            <YouTube />
                <CountryPicker />
                <CovidChart />
          </GridListTile>
        </GridList>
  </Grid>*/}
    </>
  )
};

export default Home;