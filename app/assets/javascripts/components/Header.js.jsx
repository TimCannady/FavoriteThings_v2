var Header = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: 'false',
			menuItems: [] 
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(){
		$.ajax({
			type: 'GET',
			url: '/categories',
			data: 'data',
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', menuItems: data})
			}.bind(this),
			error: function(data){
			}
		})
	},

	render: function(){
		var leftHeaderMenuItems = this.state.menuItems.slice(0,4)
		var rightHeaderMenuItems = this.state.menuItems.slice(4,9)

		return(
			<div className="header">

				<HeaderMenu headerMenuItems={leftHeaderMenuItems} />

				<div className="header-img-wrapper">
					<img src={this.props.img_src} className="header-img" />
				</div>

				<HeaderMenu headerMenuItems={rightHeaderMenuItems} />
				
				<Nav />
			</div>
		)
	}
})
