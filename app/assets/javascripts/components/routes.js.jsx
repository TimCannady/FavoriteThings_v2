var Route = ReactRouter.Route;

this.MyRoutes = (
  <Route handler={App}>
    <Route name='home' handler={Home} path='/' />
    <Route name='about' handler={About} path='/about' />
  </Route>
);