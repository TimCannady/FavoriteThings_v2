var Categories = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			categories: []
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(data){
		$.ajax({
			type: "GET",
			url: "/categories",
			data: "data",
			dataType: 'json',
			success: function(data){
				alert('success!')
				this.setState({didFetchData: 'true', categories: data})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	},

	render: function(){
		var category = this.state.categories.map(function(category){
			return <CategoryCard name={category.name} description={category.description} key={category.id} id={category.id} />
		})

		return(
			<div>
				{category}
			</div>
		)
	}
})