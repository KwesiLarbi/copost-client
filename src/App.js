import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

// Components
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostForm from './components/PostForm/PostForm';
import Layout from './components/Layout';
import Header from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/posts/new-post" exact component={PostForm} />
          </Layout>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;