const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Commandeschema = new schema({
  nameuser: { 
    type: String,
    
  },
  price: {
    type: String,
    required: true,
  },
  Iduser: {
    type: String,
    default:'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg'
  },
  nomprduit: {
    type: String,
  },
});

module.exports = product = mongoose.model("produit", Commandeschema);
