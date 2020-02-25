const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
	login     : { type: String, required: true },
	password  : { type: Date, required: true },
	firstName : { type: String, required: false },
	lastName  : { type: String, required: false },
	status    : { type: String, required: false }
})

module.exports = mongoose.model('User', userSchema)
