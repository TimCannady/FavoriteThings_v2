var Nav = React.createClass({
	render: function(){
		return(
			<div className="nav">
				<Link to="/" className="nav-button" >Home </Link>
				<Link to="/users" className="nav-button" >Users </Link>
				<Link to="/categories" className="nav-button" >Categories </Link>
				<Link to="/items" className="nav-button" >Items </Link>
			</div>
		)
	}
})