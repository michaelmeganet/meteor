// this is image_share.jhs
Images = new Mongo.Collection("images");

if (Meteor.isClient){

	console.log("I am the client")
	
	//Template.images.helpers({images:img_data});
	Template.images.helpers({images:Images.find()});
	Template.images.events({
		'click .js-image':function(event){
			console.log(event);
			$(event.target).css("width", "50px");
		},

		'click .js-del-image':function(event){
			var image_id = this._id;
			console.log(image_id);
		}

	});
}


