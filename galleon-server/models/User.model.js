const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
 
const userSchema = new Schema({

  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  expense: { type: Schema.Types.ExpenseID, red: "Expense" },
  income: { type: Schema.Types.IncomeID, red: "Income" },
  expense: { type: Schema.Types.ExpenseID, red: "Expense" }


});
 
module.exports = model("User", userSchema);