App = {};

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};


	App.checkLoggedIn = function(){
		if(localStorage.getItem('token') == null){
			// alert('youre logged out')
			return false
		}else{
			// alert('youre logged in')
			// alert(localStorage.getItem('token'))
			return true
		}
	}

	App.logIn = function(email){
		alert('logging in')
		localStorage.email = email
		alert(localStorage.getItem('email'))
	}

	App.logOut = function(){
		// alert('logging out')
		localStorage.removeItem('token')
		// alert(localStorage.getItem('token'))
	}

	App.currentUserID = function(){
		if(checkLoggedIn()){
			alert('theres alogged in user')
			fetchData()
		}else{
			alert('theres not a logged in user')
		}
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

