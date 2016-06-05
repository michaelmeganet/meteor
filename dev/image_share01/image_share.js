if (Meteor.isClient){

	console.log("I am the client")
	
	var img_data = [
	{
		img_src:"kingscout.jpg",
		img_alt:"King Scout Award at 1988"
		
	},
	{
		img_src:"Flag.jpg",
		img_alt:"Falg in papar KK camping"
		
	},
	{
		img_src:"gang.jpg",
		img_alt:"18th KK gang in 1983"
		

	},
	];
	Template.images.helpers({images:img_data});
	Template.images.events({
		'click .js-image':function(event){
			console.log(event);
			$(event.target).css("width", "50px");
		}
	});
}


if (Meteor.isServer){

	console.log("I am the Server")

}
	
