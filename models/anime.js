const mongoose = require('mongoose')

const Schema = mongoose.Schema

const animeSchema = new Schema({
	title : { type: String, required: true },
	year  : { type: Date, required: true }
})

module.exports = mongoose.model('Anime', animeSchema)
