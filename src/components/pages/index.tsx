import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import Login from './login';
import Favorites from './favorites';
import SearchedItems from './searchedItems';
import MoviePage from './moviePage';
import Register from './register';

const Routes = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/movie" component={MoviePage} />
      <Route path="/searched-items" component={SearchedItems} />
    </Switch>
  );
};

export default Routes;
