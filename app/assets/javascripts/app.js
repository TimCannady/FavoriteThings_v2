App = {};

	App.checkLoggedIn = function(){
		if(localStorage.getItem('email') == null){
			return false
		}else{
			return true
		}
	}

	App.logIn = function(email){
		localStorage.email = email
		localStorage.userID = this.currentUserID()
	}

	// App.currentUserEmail = function(){
	// 	return localStorage.getItem('email')
	// }

	App.logOut = function(){
		localStorage.removeItem('email')
	}

	App.currentUserID =  function(){
		if(App.checkLoggedIn()){
			var email = this.currentUserEmail()
			this.fetchUserID(email)
		}else{
		}
	}

	App.currentUserEmail = function(){
		return localStorage.getItem('email')
	}

	App.fetchUserID = function(email){
		$.ajax({
			type: "GET",
			url: "/users/email",
			data: {email: email},
			dataType: 'json',
			success: function(data){
				localStorage.userID = data.user_id // not liking that this didn't work in the logOut function. Basically it wasn't returning in time for the async. Maybe needs a promise?
			}.bind(this),
			error: function(data){
				alert('error! couldnt fetch user id')
			}
		})
	}