import { Schema } from "mongoose";

export const TodoSchema = new Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })