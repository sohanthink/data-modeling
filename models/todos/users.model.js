import mongoose from 'mongoose';

const userScema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
