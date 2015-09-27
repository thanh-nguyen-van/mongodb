var User = require('../modules/user');

//seed a user
var user  = new User({
 	username: 'thanh',
	email: 'thanh.nguyen2891@gmail.com',
	pass: 'test'
});

user.save(function(err,user){
	if(err){
	 console.log(err);
	} else {
	 console.log('Seeded user');
	}
});

