const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
 
const incomeSchema = new Schema({

    title: { type: String},
    description: { type: String},
    income: { type: Number},
    user: { type: Schema.Types.UserID, red: "User" }

});
 
module.exports = model("Income", incomeSchema);