import mongoose from 'mongoose';
import { Category } from './category.models';
import { User } from './user.models';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    productImage: {
      type: string,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Category,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
