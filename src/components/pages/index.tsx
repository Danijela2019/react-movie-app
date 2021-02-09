import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Login from './Login';
import Favorites from './Favorites';
import SearchedItems from './SearchedItems';


const Routes = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/favorites" component={Favorites}/>
    </Switch>
  );
};

export default Routes;