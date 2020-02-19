import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/home';
import Comic from '../Pages/comic';
import Layout from '../Layout'
export default function routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/comic/:id" component={Comic} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
