import mongoose, {Schema} from "mongoose";

const pendantDataSchema = new Schema(
    {
        ProductImages: {
            type: Array,
            required: true
        },
        ProductName: {
            type: String,
            required: true,
        },
        ProductCategory: {
            type: String,
            required: true,

        },
        ProductPrice: {
            type: Number,
            required: true
        },
