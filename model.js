const mongoose = require("mongoose");

const routingObj = {
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  },
  itemTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item",
  },
  route: String,
  productId: String,
  url: String,
  discount: Number,
};

const specificCategorySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategory",
    },
    sliderImage: [],
    smallBannerImage: [
      {
        imageUrl: String,
        routing: routingObj,
      },
    ],
    bigBannerImage: {
      imageUrl: String,
      routing: routingObj,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("specificCategory", specificCategorySchema);
