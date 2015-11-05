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
		// alert('logging in')
		localStorage.email = email
		alert(localStorage.getItem('email'))
	}

	App.currentUserEmail = function(){
		return localStorage.getItem('email')
	}

	App.logOut = function(){
		// alert('logging out')
		localStorage.removeItem('email')
		// alert(localStorage.getItem('email'))
	}

	App.currentUserID = function(){
		alert('checking user id')
		if(App.checkLoggedIn()){
			alert('theres a logged in user')
			var email = App.currentUserEmail()
			App.fetchUserID(email)
		}else{
			alert('theres not a logged in user')
			// alert(localStorage.getItem('email'))
		}
	}

	App.fetchUserID = function(email){
		alert('fetching user id for ' + email)
		$.ajax({
			type: "GET",
			url: "/users/email",
			data: {email: email},
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', userID: data.id})
			}.bind(this),
			error: function(data){
				alert('error! couldnt fetch user id')
			}
		})
	}

	App.fetchData = function(data){
		$.ajax({
			type: "GET",
			url: "/users",
			data: "data",
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', users: data})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	}


// App.request = function(method, path, data){
//   return new Promise(function(resolve, reject){
//     var request = $.ajax({
//       url:      path,
//       method:   method,
//       data:     data,
//       dataType: "json"
//     });

//     request.done(function(serverData){
//       alert('success!')
//       resolve(serverData)
//     });

//     request.fail(function(serverData){
//       reject(serverData)
//     });
//   });
// };

// App.request = function(method, path, data){
// 	$.ajax({
// 		type: method,
// 		url: path,
// 		data: data,
// 		dataType: 'json',
// 		success: function(data){
// 			alert('success!')
// 			return data},
// 		error: function(data){
// 			alert('error!')
// 		}
// 	})
// };


// ReactRouter.run(routes, function (Handler) {
//   React.render(<Handler/>, document.body);
// });

