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

	App.logIn = function(){
		// alert('logging in')
		localStorage.token = token()
		// alert(localStorage.getItem('token'))
	}

	App.logOut = function(){
		// alert('logging out')
		localStorage.removeItem('token')
		// alert(localStorage.getItem('token'))
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

