const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
 
const WalletSchema = new Schema({

  income: { type: Schema.Types.IncomeID, red: "Income" },
  expense: { type: Schema.Types.ExpenseID, red: "Expense" },
  user: {type: Schema.Types.UserID, red: "User"}

});
 
module.exports = model("Wallet", WalletSchema);