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
		var css;

		if(this.state.hoverState == true){
			css = 'header-menu-card-wrapper-hover'
		}else{
			css = 'header-menu-card-wrapper'
		}

		return(
			<div /*className="header-menu-card-wrapper"*/ className={css} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
				<div className="header-menu-img-wrapper">
					<img src={this.props.photoUrl} className="header-menu-img"></img>
				</div>
				<br/>
				{this.props.name}
			</div>
		)
	}
})