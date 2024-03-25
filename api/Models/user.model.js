import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    avatar:{
      type: String,
      default: "https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg"
    },
   
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;