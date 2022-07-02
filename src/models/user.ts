import mongoose from "mongoose";
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
    minlength: 8,
    trim: true,
  },
  validator(value: String) {
    if (value.toLowerCase().includes('password')) {
      throw new Error("Password can't contain 'password'")
    }
  },
})


const userModel = mongoose.model('users', userSchema)

export default userModel
