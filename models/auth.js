const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "you must provide a name"],
	},
	username: {
		type: String,
		trim: true,
		required: [true, "Please provide a unique username."]
	},
	email: {
		type: String,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please add a valid email",
		],
		required: [true, "you must provide an email"],
		unique: true,
	},
	phone: {
		type: Number,
		minlength: 10,
		trim: true,
		required: [true, "please provide a valid phone number."]
	},
	password: {
		type: String,
		minlength: [5, "password must be more than five characters"],
		required: [true, "You must enter a valid password!!"],
		select: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("User", UserSchema);
