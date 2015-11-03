var CategoriesPage = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			headerImage: "categories.png",
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
				this.setState({didFetchData: 'true', categories: data})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	},

	render: function(){
		var categoryArray = this.state.categories.map(function(category){
			return <CategoryCard name={category.name} description={category.description} key={category.id} id={category.id} />
		})

		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<br />
				{categoryArray}
			</div>
		)
	}
})