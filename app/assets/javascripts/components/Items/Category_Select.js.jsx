var CategorySelect = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false, 
			categories: []
		}
	},

	componentDidMount: function(){
		this.fetchCategories()
	},

	fetchCategories: function(){

		$.ajax({
			type: "GET",
			url: "/categories",
			data: 'data',
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', categories: data})
			}.bind(this),
			error: function(data){
				alert('error! couldnt categories')
			}
		})
	},

	render: function(){
		var that = this
		var optionArray = this.state.categories.map(function(category){
			return(
				<option key={category.id} value={category.id}> {category.name} </option>
			)
		})

		return(
			<select label="Category:" onChange={that.props.handleCategory_1_Change || that.props.handleCategory_2_Change}>
				{optionArray}
			</select>
		)
	}
})

