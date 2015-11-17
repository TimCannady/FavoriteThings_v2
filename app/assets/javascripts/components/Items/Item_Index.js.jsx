var ItemIndex = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			modalOpen: false,
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

	openModal: function() {
		this.setState({modalOpen: true});
	},

	closeModal: function() {
		this.setState({modalOpen: false});
	},

	render: function(){
		var itemArray = this.state.items.map(function(item){
			return <ItemCard name={item.name} key={item.id} id={item.id} photo_url={item.photo_url} description={item.description} userID={localStorage.getItem('userID')} like_status={item.like_status}  />
		})

		var modalOpen = this.state.modalOpen

		return(
			<div>
				<Header img_src={this.state.headerImage} />
					<Link to="itemNew" userID={this.props.userID} > create a new item </Link>

					<button onClick={this.openModal}> Open the Modal </button>
					{modalOpen ? <NewItemForm closeModal={this.closeModal} /> : ''}

				<section className="body-wrapper">
					{itemArray}
				</section>
			</div>
		)
	}
})