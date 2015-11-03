var CategoryShow = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			categoryName: [],
			categoryItems: [],
			headerImage: "categories.png"
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(){
		var params = this.props.params.id
		$.ajax({
			type: "GET",
			url: "/categories/" + params,
			data: "data",
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', categoryName: data.category_name, categoryItems: data.items})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	},

	render: function(){
		var categoryItem = this.state.categoryItems.map(function(item){
			return <ItemCard name={item.name} key={item.id} id={item.id} photo_url={item.photo_url} />
		})
		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<br />
				Category Name: {this.state.categoryName}
				{categoryItem}				
			</div>
		)
	}
})