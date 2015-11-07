App = {};

	App.checkLoggedIn = function(){
		if(localStorage.getItem('email') == null){
			// alert('youre logged out')
			return false
		}else{
			// alert('youre logged in')
			// alert(localStorage.getItem('email'))
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
		// alert('logging out')
		localStorage.removeItem('email')
		// alert(localStorage.getItem('email')) //see fetchUserID. I had to put it there after the success.
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
				// alert('successsss')
				// alert(data.user_id)
				// return data.user_id
				localStorage.userID = data.user_id // not liking that this didn't work in the logOut function. Basically it wasn't returning in time for the async. Maybe needs a promise?
			}.bind(this),
			error: function(data){
				alert('error! couldnt fetch user id')
			}
		})
	}