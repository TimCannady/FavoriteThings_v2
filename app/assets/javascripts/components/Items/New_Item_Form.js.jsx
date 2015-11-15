var NewItemForm = React.createClass({

	getInitialState: function(){
		return{
			name: "",
			description: "",
			photoURL: "",
			photoPath: "",
			categoryID_1: "1",  //hard-coding the first cat as the state of the select/option drop-down. This is becuse as-is, if the user doesn't change the dropdown, the handler will never fire. So if the user simply leaves it as the first option that showed up, it will be blank. So instead I have it set to a default of 1, which is always the first category shown in the option (unless it gets deleted somehow).
			categoryID_2: ""  
		}
	},

	submit: function(e){
		// var self 
		e.preventDefault()
		// self = this

		var data = {
		   name: this.state.name,
		   description: this.state.description,
		   // photo_url: this.state.photoURL,
		   photo_path: this.state.photoPath,
		   userID: this.props.userID,
		   categoryID_1: this.state.categoryID_1,
		   categoryID_2: this.state.categoryID_2
		}

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items',
			data: data
			})
			.done(function(data) {
				history.pushState({},'','/users/' + this.props.userID)
				window.location.reload()
				// self.clearForm()
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
	handlePhotoURLChange: function(event) {
	    this.setState({photoURL: event.target.value});
	},
	handlePhotoPathChange: function(event) {
	    this.setState({photoPath: event.target.value});
	},
	handleCategory_1_Change: function(event){
		this.setState({categoryID_1: event.target.value});
	},
	handleCategory_2_Change: function(event){
		this.setState({categoryID_2: event.target.value});
	},

	render: function(){
		that = this
		return(
			<div className="login-signup-form-wrapper">
				Create New Item:
				<br/>
				<form onSubmit={this.submit} className="login-signup-form" >
				 	Name: <input label="Name:" type="text" onChange={this.handleNameChange} />
				 	<br/>
				 	Description: <input label="Description:" type="text" onChange={this.handleDescriptionChange} />
				 	<br/>
				 	
				 	{/*Photo URL: <input label="photoURL:" type="text" onChange={this.handlePhotoURLChange} />
				 	<br/>*/}

				 	Upload Photo: <input label="photo:" type="file" onChange={this.handlePhotoPathChange} />
				 	<br/>

				 	<CategorySelect handleCategory_1_Change={that.handleCategory_1_Change} />
				 	<CategorySelect handleCategory_2_Change={that.handleCategory_2_Change} />

				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})