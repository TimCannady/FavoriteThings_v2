var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var Link = ReactRouter.Link

this.MyRoutes = (
  <Route handler={AppComponent}>
	<Route name='home' handler={HomePage} path='/' />

    <Route name='userIndex' handler={UserIndex} path='/users' />
    <Route name='userShow' handler={UserShow} path='/users/:id' />

    <Route name='categoryIndex' handler={CategoryIndex} path='/categories' />
    <Route name='categoryShow' handler={CategoryShow} path='/categories/:id' />

    <Route name='itemIndex' handler={ItemIndex} path='/items' />
    <Route name='itemNew' handler={ItemNew} path='/items/new' />
    <Route name='itemShow' handler={ItemShow} path='/items/:id' /> 

    <Route name="login" handler={LoginSignup} />
    <Route name="logout" handler={Logout} />
    <Route name="dashboard" handler={Dashboard} /*onEnter={requireAuth}*/ />
  </Route>
);