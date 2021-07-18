/** @jsxRuntime classic
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, Container, Flex, Button, Text, Link } from 'theme-ui';
//import { Link } from 'react-scroll';
import { keyframes } from '@emotion/react';
import Logo from '../Logo';
import LogoDark from '../../assets/images/covid.png';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';


export default function Header({ className }) {
  const [user, setUser] =  useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  };

  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, index) => (
            <Link 
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} 
              key={index}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        {user ? (
          <div className={styles.profile}>
            <Avatar className={styles.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Text className={styles.userName} variant="h4">{user.result.name}</Text>
            <Button component={Link} to="/posts/new-post" variant="contained" className={styles.writePost} color="primary">New Post</Button>
            <Button variant="contained" className={styles.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Link href="/auth">
            <Button sx={{ textTransform: 'uppercase', fontSize: '12px !important' }} className="signin__btn" variant="primary" aria-label="Sign In">
                Sign In
            </Button>
          </Link>
        )}
        {/*<MobileDrawer></MobileDrawer>*/}
      </Container>
    </header>
  );
};

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.signin__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        //color: 'rgba(54, 184, 255, 1)',
        textDecoration: '1px solid black underline'
      },
      '&.active': {
        textDecoration: '1px solid black underline'
      },
    },
  },
  image: {
    marginLeft: '15px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: 'black'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: 'purple',
    backgroundColor: 'deep purple',
  },
  writePost: {
    padding: '6px 10px'
  }
};

/*<AppBar className={classes.appBar} position="static" color="secondary">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">COVID-19 Portal</Typography>
        <img className={classes.image} src={covid} alt="covid" height="40" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h4">{user.result.name}</Typography>
            <Button component={Link} to="/posts/new-post" variant="contained" className={classes.writePost} color="primary">New Post</Button>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>*/
/*import React, { useState, useEffect } from 'react';
import { Container, Flex, Button } from 'theme-ui';
import Logo from '';
import MobileDrawer from '';
import menuItems from '';
import { AppBar, Avatar, Typography, Toolbar, Button, Container } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import covid from '../../images/covid.png';

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] =  useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="secondary">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">COVID-19 Portal</Typography>
        <img className={classes.image} src={covid} alt="covid" height="40" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h4">{user.result.name}</Typography>
            <Button component={Link} to="/posts/new-post" variant="contained" className={classes.writePost} color="primary">New Post</Button>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;*/