var ItemIndex = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			items: [],
			userID: localStorage.getItem('userID'),
			headerImage: "http://www.w3schools.com/html/html5.gif"
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(data){
		var data = {
		   userID: this.state.userID
		}

		$.ajax({
			type: "GET",
			url: "/items",
			data: data,
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', items: data})
			}.bind(this),
			error: function(data){
				alert("error! Couldn't fetch item list from DB")
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