var HeaderMenuCard = React.createClass({

	getInitialState: function(){
		return{
			hoverState: false
		}
	},

	handleMouseOver: function(){
		this.setState({hoverState: !this.state.hoverState})
	},

	handleMouseOut: function(){
		this.setState({hoverState: !this.state.hoverState})
	},

	render: function(){
		var cssStyling;

		if(this.state.hoverState == true){
			cssStyling = 'header-menu-card-wrapper-hover'
		}else{
			cssStyling = 'header-menu-card-wrapper'
		}

		return(
			<div className={cssStyling} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
				<Link to="categoryShow" params={{id: this.props.id}} > 
					<div className="header-menu-img-wrapper">
						<img src={this.props.photoUrl} className="header-menu-img"></img>
					</div>
					<br/>
					{this.props.name}
				</Link>
			</div>
		)
	}
})