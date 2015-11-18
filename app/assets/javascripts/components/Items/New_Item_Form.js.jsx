var NewItemForm = React.createClass({

	getInitialState: function(){
		return{
			name: "",
			description: "",
			photo: "",
			categoryID_1: "1", 
			categoryID_2: "1"  
		}
	},

	submit: function(e){
		e.preventDefault()

		var file = document.getElementById('photo_upload').files[0]	
		var formData = new FormData();
		formData.append('name', this.state.name)
		formData.append('description', this.state.description)
		formData.append('photo', file, file.name)
		formData.append('userID', this.props.userID)
		formData.append('categoryID_1', this.state.categoryID_1)
		formData.append('categoryID_2', this.state.categoryID_2)

		$.ajax({
			type: 'POST',
			url: '/items',
			data: formData,
			contentType: false,
			processData: false,
			})
			.done(function(data) {
				history.pushState({},'','/users/' + this.props.userID)
				window.location.reload()
			}.bind(this))
			.fail(function(data) {
				alert('Failed to create item')
			});
	},

	handleNameChange: function(event) {
	    this.setState({name: event.target.value});
	},

	handleDescriptionChange: function(event) {
	    this.setState({description: event.target.value});
	}, 
	handlePhotoChange: function(event) {
	    this.setState({photo: event.target.value});
	},
	handleCategory_1_Change: function(event){
		this.setState({categoryID_1: event.target.value});
	},
	handleCategory_2_Change: function(event){
		this.setState({categoryID_2: event.target.value});
	},

	render: function(){
		that = this
		var closeModal = this.props.closeModal

		return(
			<div className="login-signup-form-wrapper" className="modal-wrapper">
				<button onClick={closeModal}> Close the Modal </button>
				Create New Item:
				<br/>
				<form onSubmit={this.submit} className="login-signup-form" encType="multipart/form-data">
				 	Name: <input label="Name:" type="text" onChange={this.handleNameChange} />
				 	<br/>
				 	Description: <input label="Description:" type="text" onChange={this.handleDescriptionChange} />
				 	<br/>
				 	
				 	Upload Photo: <input label="photo:" type="file" onChange={this.handlePhotoChange} multiple={true} id={"photo_upload"}/>
				 	<br/>

				 	<CategorySelect handleCategory_1_Change={that.handleCategory_1_Change} />
				 	<CategorySelect handleCategory_2_Change={that.handleCategory_2_Change} />

				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})