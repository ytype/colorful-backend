import mongoose, { Schema, Document } from 'mongoose'

const Comment:Schema = new Schema({
  user: String,
  content: String,
  date: { type: Date, default: Date.now }
})

export interface IColor extends Document {
    color: any[],
    user: string,
    title: string,
    content: string,
    url: string,
    like: [string],
    date: Date,
    comments: Schema.Types.ObjectId
}

const Color:Schema = new Schema({
  color: Array,
  user: String,
  title: String,
  content: String,
  url: String,
  like: [String],
  date: { type: Date, default: Date.now },
  comments: [Comment]
})

export default mongoose.model<IColor>('Color', Color)
