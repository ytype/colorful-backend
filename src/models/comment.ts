import mongoose, { Schema, Document } from 'mongoose'

export interface IComment extends Document {
  user: string,
  content: string,
  date: Date
}

const Comment:Schema = new Schema({
  user: String,
  content: String,
  date: { type: Date, default: Date.now }
})

export default mongoose.model<IComment>('Comment', Comment)