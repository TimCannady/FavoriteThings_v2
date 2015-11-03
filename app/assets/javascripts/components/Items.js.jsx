var Items = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			items: []
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(data){
		$.ajax({
			type: "GET",
			url: "/items",
			data: "data",
			dataType: 'json',
			success: function(data){
				alert('success!')
				this.setState({didFetchData: 'true', items: data})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	},

	render: function(){
		var item = this.state.items.map(function(item){
			return <ItemCard name={item.name} key={item.id} id={item.id} />
		})

		return(
			<div>
				{item}
			</div>
		)
	}
})