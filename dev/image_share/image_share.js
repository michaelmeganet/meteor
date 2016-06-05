Images = new Mongo.Collection("images");
console.log(Images.find().count());

if (Meteor.isClient){

	console.log("I am the client")
	
	
	//Template.images.helpers({images:img_data});

	Template.images.helpers({images:
		Images.find({}, {sort:{rating:-1}})
	});
	Template.images.events({
		'click .js-image':function(event){
			console.log(event);
			$(event.target).css("width", "50px");
		},


		'click .js-del-image':function(event){
			var image_id = this._id;
			console.log(image_id);
			$("#"+image_id).hide('slow', function(){
				Images.remove({"_id":image_id});
			})
			
		},

		'click .js-rate-image':function(event){
			//console.log("you clicked a star");
			var rating = $(event.currentTarget).data("userrating");
			console.log(rating);
			var image_id = this.id;
			console.log(image_id);
			Images.update({_id:image_id}, 
						  {$set: {rating:rating}});
		}


	});
}


if (Meteor.isServer){

	console.log("I am the Server")

}
	
