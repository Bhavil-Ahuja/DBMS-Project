const mongoose = require("mongoose")

const postScehma = {
    title: String,
    content: String
}
module.exports = mongoose.model("Post", postScehma)