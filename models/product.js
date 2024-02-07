const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productschema = new schema({
  name: {
    type: String,
    
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg'
  },
  description: {
    type: String,
  },
});

module.exports = product = mongoose.model("produit", productschema);
