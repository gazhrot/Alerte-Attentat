var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

var bdd = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'Hackathon42',
	database: 'map'
});

bdd.connect();

io.on('connection', function(s){
	var d = new Date();
	s.ip = s.request.connection.remoteAddress;
  	s.ua = s.request.headers['user-agent'];
	console.log('['+d.toISOString()+'] User connected (IP Adress: '+s.ip+', User-Agent: '+s.ua+')');
	s.on('flag', function(e) {
		e.ip = s.ip;
		e.ua = s.ua;
		bdd.query("INSERT INTO flag SET ?", e, function(err, res){
			if (err) {
				console.log(err);
			}
			else {
				var d = new Date();
				console.log('['+d.toISOString()+'] User marked '+e.status+' in location ('+e.lat+','+e.lng+')');
				s.broadcast.emit('flag', e);
			}
		});
	});

	s.on('move_status', function(e) {
		bdd.query("INSERT INTO flag SET ?", e, function(err, res) {
			if (err) {
				console.log(err);
			} else {
				var d = new Date();
				console.log('['+d.ISOString()+'] User can '+e.move_status);
				s.broadcast.emit('move_status', e);
			}
		})	
		
	});

	s.on('vital_status', function(e) {
		bdd.query("INSERT INTO flag SET ?", e, function(err, res){
			if (err) {
				console.log(err);
			} else {
				var d = new Date();
				console.log('['+d.toISOString()+'] User is '+e.vital_status);
				s.broadcast.emit('vital_status', e);
			}
		})
	});
	
	s.on('move_status', function(e) {
		bdd.query("INSERT INTO flag SET ?", e, function(err, res) {
			if (err) {
				console.log(err);
			} else { 
				var d = new Date();
				console.log('['+d.toISOString()+'] User is '+e.move_status);
				s.broadcast.emit('move_status', e);
			}
		})	
	});

	s.on('flee_status', function(e) {
		bdd.query("INSERT INTO flag SET ?", e, function(err,res) {
			if (err) {
				console.log(err);
			} else {
				var d = new Date();
				console.log('['+d.toISOString()+'] User is '+e.flee_status);
				s.broadcast.emit('flee_status', e);
			}
		})
	});



	s.on('disconnect', function() {
		console.log('user disconnected');
	});
});

http.listen(8080, function(){
	var d = new Date();
	console.log("["+d.toISOString()+"] Server listening on port 8080");
});
