import React from 'react';
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, Image } from 'theme-ui';
import { Link } from 'react-scroll';
import BannerImg from '../../assets/images/banner.jpg';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            COPOST is a place to write, read, and connect
          </Heading>
          <Heading sx={styles.secondaryHeading} as="h3" variant="heroSecondary">
            It's easy and free to post your thinking and experiences on topics related to covid.
          </Heading>
          <Link
            to="/auth"
          >
            <Button sx={{ textTransform: 'uppercase', fontSize: '14px !important' }} variant="primary">Start Posting</Button>
          </Link>
        </Box>
      </Container>
    </section>
  );
};

const styles = {
  secondaryHeading: {
    paddingLeft: '0px !important'
  },
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    /*'&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },*/
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'left',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'right',
      textAlign: 'right',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
