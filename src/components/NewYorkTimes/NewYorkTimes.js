/** @jsxRuntime classic
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, Box, Grid, Container, Spinner, Link, Text } from 'theme-ui';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// NYT API 
import fetchNytData from '../../api/nyt';

// Styles 
import useStyles from './styles';

export default function NewYorkTimes() {
  const [nytArticles, setNytArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchApiData = async () => {
      const result = await fetchNytData();

      setNytArticles(result);
    };

    fetchApiData();
  }, []);

  return (
    !nytArticles ? <Spinner /> : (
      <>
        <section sx={styles.nytSection}>
          <Container>
            <div sx={{ 
              marginBottom: '16px', 
              alignItems: 'center', 
              flexDirection: 'row', 
              display: 'flex' 
              }}
            >
              <TrendingUpIcon sx={{ marginRight: '10px' }} />
              <div sx={{
                display: 'block',
                }}
              >
                <p sx={{ 
                  fontSize: '12px', 
                  fontWeight: '700', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.083em',
                  lineHeight: '16px' 
                  }}
                >
                  Trending Stories on Covid-19
                </p>
              </div>
            </div>
            <Grid gap={2} columns={[2, null, 3]}>
              {nytArticles.map((article, key) => (
                <Box sx={{ paddingRight: '16px' }}>
                  <div sx={{
                    marginBottom: '8px',
                    display: 'block',
                    fontWeight: 400
                    }}
                  >
                    <h4 sx={{ 
                      fontSize: '13px', 
                      fontWeight: 500,
                      lineHeight: '16px',
                      paddingRight: '2px'
                      }}
                    >
                      {article.byline}
                    </h4>
                    <div sx={{
                      marginBottom: '8px',
                      display: 'block'
                      }}
                    >
                      <Link sx={{ 
                        fontSize: '16px', 
                        textDecoration: 'none',
                        marginBottom: '0px',
                        padding: '0px'
                        }} 
                        href={article.url} 
                        color="inherit" 
                        gutterBottom
                      >
                        <h2 sx={{ 
                          fontSize: '16px',
                          maxHeight: '40px',
                          overflow: 'hidden',
                          fontWeight: 700,
                          letterSpacing: '0px',
                          fontsize: '16px',
                          lineHeight: '20px' 
                          }}
                        >
                          {article.main}
                        </h2>
                      </Link>
                    </div>
                  </div>
                  {console.log(new Date(article.published_date))}
                  <Text sx={{
                    color: 'rgb(117, 117, 117)',
                    fontSize: '13px',
                    lineHeight: '20px'
                    }}
                  >
                    Published Date - {article.pub_date}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Container>
        </section>
        <div sx={styles.sectionLine}></div>
      </>
    )
  );
};


const styles = {
  nytSection: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '50px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
    },
  },
  sectionLine: {
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid rgb(230, 230, 230)',
    position: 'center'
  }
};