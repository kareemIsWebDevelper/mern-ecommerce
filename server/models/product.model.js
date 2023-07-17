const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { 
    type: String,
     required: true 
  },
  category: { 
    type: Schema.Types.ObjectId, 
    ref: "Category" 
  },
  description: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  discount: { 
    type: Number,
     required: true 
  },
  colors: { 
    type: String 
  },
  image: { 
    type: String,
     required: true 
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product
