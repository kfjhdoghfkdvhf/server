/* authenticate */

'use strict';

module.exports = function( request, respone, next){
	console.dir(request.headers)
	
	var result = {
		authentication_token: "day la authentication_token",
		user_id: 0,
		facebook: "day la facebook token",
		permisson: 0
	};
	
	respone
		.set(result)
		.send(JSON.stringify(result))
		.end();
}