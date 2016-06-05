if (Meteor.isClient){
   console.log("I am the client");
}

if (Meteor.isServer){

	Meteor.startup(function(){
		// code to run on server at startup
		console.log(I am the server);
	})
}