import mongoose from 'mongoose';

export interface ICard {
  name: string,
  link: string,
  owner: mongoose.Schema.Types.ObjectId,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId;
    }
  ],
  createdAt: Date,
}
