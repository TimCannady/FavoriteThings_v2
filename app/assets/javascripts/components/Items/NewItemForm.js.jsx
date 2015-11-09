var NewItemForm = React.createClass({

	getInitialState: function(){
		return{
			name: "",
			description: "",
			photoURL: "",
		}
	},

	submit: function(e){
		// var self 
		e.preventDefault()
		// self = this

		var data = {
		   name: this.state.name,
		   description: this.state.description,
		   photo_url: this.state.photoURL,
		   userID: this.props.userID
		}

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items',
			data: data
			})
			.done(function(data) {
				alert('item creation successful!')
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

	render: function(){
		return(
			<div className="login-signup-form-wrapper">
				Create New Item:
				<br/>
				<form onSubmit={this.submit} className="login-signup-form" className="login-signup-form" >
				 	Name: <input label="Name:" type="text" onChange={this.handleNameChange} />
				 	<br/>
				 	Description: <input label="Description:" type="text" onChange={this.handleDescriptionChange} />
				 	<br/>
				 	Photo URL: <input label="photoURL:" type="text" onChange={this.handlePhotoURLChange} />
				 	<br/>
				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})