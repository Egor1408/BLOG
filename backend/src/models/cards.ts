import mongoose from 'mongoose';
import { ICard } from '../interfaces/cards';

const Card = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 2,
      maxlength: 30,
    },
    link: {
      type: String,
      require: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      require: true,
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      default: [],
    }],
    createdAt: {
      type: Date,
      default: Date.now(),
      require: true,
    },
  },
  {
    versionKey: false,
  },
);

export default mongoose.model<ICard>('Card', Card);
