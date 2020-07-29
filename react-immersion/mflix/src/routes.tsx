import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddVideo from './pages/AddVideo';
import Page404 from './pages/Page404';
import PageDefault from './pages/PageDefault';
import AddCategory from './pages/AddCategory';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (

  <BrowserRouter>
      <PageDefault>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add/video" component={AddVideo} />
        <Route path="/add/category" component={AddCategory} />
        <Route component={Page404} />
      </Switch>
      </PageDefault>
  </BrowserRouter>
  );
}

export default Routes;
