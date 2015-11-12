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

	handleCategoryFilter: function(e){
		e.preventDefault()
		var cID = this.props.id
		this.props.fetchCategoryItems(cID)
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
				<a href="" onClick={this.handleCategoryFilter} > 
					<div className="header-menu-img-wrapper">
						<img src={this.props.photoUrl} className="header-menu-img"></img>
					</div>
					<br/>
					{this.props.name}
				</a>
			</div>
		)
	}
})