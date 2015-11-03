var Route = ReactRouter.Route;
var Link = ReactRouter.Link

this.MyRoutes = (
  <Route handler={AppComponent}>
    <Route name='home' handler={HomePage} path='/' />

    <Route name='users' handler={UsersPage} />
    <Route name='userShow' handler={UserShow} path='/users/:id' />

    <Route name='categories' handler={CategoriesPage} />
    <Route name='categorieShow' handler={CategoryShow} path='/categories/:id' />

    <Route name='items' handler={ItemsPage} />
    <Route name='itemShow' handler={ItemShow} path='/items/:id' />

  </Route>
);