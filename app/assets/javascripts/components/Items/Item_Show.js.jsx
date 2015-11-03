var ItemShow = React.createClass({
	getInitialState: function(){
		return {
			didFetchData: false,
			headerImage: "http://www.w3schools.com/html/html5.gif",
			itemName: "",
			itemDescription: "",
			itemPhotoUrl: ""
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(){
		var params = this.props.params.id
		$.ajax({
			type: "GET",
			url: "/items/" + params,
			data: "data",
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', itemName: data.name, itemDescription: data.description, itemPhotoUrl: data.photo_url, headerImage: data.photo_url})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	},
	
	render: function(){
		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<br />
				<img src={this.state.itemPhotoUrl} />
				<br />
				Name: {this.state.itemName} 
				<br />
				Description: {this.state.itemDescription} 
			</div>
		)
	}
})