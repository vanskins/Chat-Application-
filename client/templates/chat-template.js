Template.appChat.helpers({
	Messages: function(){

		return Messages.find({}, {sort: {createdAt: -1}, limit: 10}) 
	}


});

Template.appChat.events({

	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .txtText": function (event){
		if(event.keyCode == 13){

			Messages.insert({
				name: $(".txtName").val(),
				text: $(".txtText").val(),
				createdAt: new Date()
			})
		}

		false;
	}


});