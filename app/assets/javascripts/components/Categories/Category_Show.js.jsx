var CategoryShow = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			items: [],
			userID: localStorage.getItem('userID'),
			headerImage: "../categories.png"
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(){
		var data = {
		   userID: this.state.userID
		}
		var params = this.props.params.id

		$.ajax({
			type: "GET",
			url: "/categories/" + params,
			data: data,
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', items: data.items})
			}.bind(this),
			error: function(data){
				alert("error! couldn't fetch category data")
			}
		})
	},

	render: function(){
		var itemArray = this.state.items.map(function(item, i){
			return <ItemCard name={item.name} key={i} id={item.id} photo_url={item.photo_url} description={item.description} userID={localStorage.getItem('userID')} like_status={item.like_status}  />
		})
		return(
			<div>
				<Header img_src={this.state.headerImage} />

				<section className="body-wrapper">
					{itemArray}		
				</section>		
			</div>
		)
	}
})