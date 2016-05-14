var mongoose = require("mongoose");
var Schema = mongoose.Shema;

var StorySchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    created: {type: Date, default: Date.now}	
});

module.exports = mongoose.('Story', StorySchema);

