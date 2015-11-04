var Route = ReactRouter.Route;
var Link = ReactRouter.Link

this.MyRoutes = (
  <Route handler={AppComponent}>
    <Route name='home' handler={HomePage} path='/' />

    <Route name='usersIndex' handler={UsersIndex} path='/users' />
    <Route name='userShow' handler={UserShow} path='/users/:id' />

    <Route name='categoriesIndex' handler={CategoriesIndex} path='/categories' />
    <Route name='categoryShow' handler={CategoryShow} path='/categories/:id' />

    <Route name='itemsIndex' handler={ItemsIndex} path='/items' />
    <Route name='itemShow' handler={ItemShow} path='/items/:id' />

  </Route>
);