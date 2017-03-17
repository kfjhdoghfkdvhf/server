/* File app.js se thuc hien cac chuc nang nhu binh thuong, khong co van de gi :) */
'use strict';

global.express = require('express');
var app = express();

var services = require(root_path + '/server/services/router');

app.use(function(request, respone, next){
	console.log("co nguoi dang nhap vao dia chi: " + request.url);
	next()
});
app.use('/services', services);

app.listen(8080);

console.log("app dang chay o cong 8080")
