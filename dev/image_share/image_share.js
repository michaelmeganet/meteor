Images = new Mongo.Collection("images");
console.log(Images.find().count());

if (Meteor.isClient){

	console.log("I am the client")
	
	
	//Template.images.helpers({images:img_data});

	Template.images.helpers({images:
		Images.find({}, {sort:{creatOn: -1, rating:-1}})
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
		},
		'click .js-show-image-form':function(event){
			$("#image_add_form").modal('show');
		}

	});
	Template.image_add_form.events({
		'submit .js-add-image':function(event){
			var img_src, img_alt;
			img_src = event.target.img_src.value;
			img_alt = event.target.img_alt.value;
			console.log("src: "+img_src+" alt:"+img_alt);

				Images.insert({
				img_src: img_src,
				img_alt: img_alt,
				createOn: new Date()
			});
				$("#image_add_form").modal('show');
			return false;
		},

	});
}


if (Meteor.isServer){

	console.log("I am the Server")

}
	
