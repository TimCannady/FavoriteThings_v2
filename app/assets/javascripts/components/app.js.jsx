 RouteHandler = ReactRouter.RouteHandler

var App = React.createClass({
	render: function(){
		return(
			<div>
				<RouteHandler {...this.props}/>
			</div>
		)
	}
})