var Route = ReactRouter.Route;
var Link = ReactRouter.Link

this.MyRoutes = (
  <Route handler={AppComponent}>
    <Route name='home' handler={HomePage} path='/' />
    <Route name='users' handler={UsersPage} />
    <Route name='categories' handler={CategoriesPage} />
    <Route name='items' handler={ItemsPage} />
  </Route>
);