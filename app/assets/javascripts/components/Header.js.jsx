var Header = React.createClass({
	render: function(){
		return(
			<div className="header">
				<div className="header-img-wrapper">
					<img src={this.props.img_src} className="header-img" />
				</div>
				<Nav />
			</div>
		)
	}
})


// the header should render differently based on whether it's a show page or not