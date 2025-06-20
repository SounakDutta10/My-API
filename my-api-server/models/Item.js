const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Item', ItemSchema);
