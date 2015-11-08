var ItemIndex = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			headerImage: "http://www.w3schools.com/html/html5.gif",
			items: [],
			userID: localStorage.getItem('userID')
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
				alert('error!')
			}
		})
	},

	render: function(){
		var itemArray = this.state.items.map(function(item){
			return <ItemCard name={item.name} key={item.id} id={item.id} photo_url={item.photo_url} userID={localStorage.getItem('userID')} />
		})

		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<br />

				<section className="body-wrapper" >
					{itemArray}
				</section>
			</div>
		)
	}
})