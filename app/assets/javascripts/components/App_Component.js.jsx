RouteHandler = ReactRouter.RouteHandler

var AppComponent = React.createClass({

	render: function(){
		return(
			<div>
				<RouteHandler {...this.props}/>
			</div>
		)
	}
})