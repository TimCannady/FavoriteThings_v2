var Route = ReactRouter.Route;

this.MyRoutes = (
  <Route handler={App}>
    <Route name='home' handler={Home} path='/' />
    <Route name='users' handler={Users} />
    <Route name='categories' handler={Categories} />
    <Route name='items' handler={Items} />
  </Route>
);