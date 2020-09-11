import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import { TodoSchema } from "../models/Todo";

class DbContext {
  Profile = mongoose.model("Profile", ProfileSchema);
  Todos = mongoose.model("Todos", TodoSchema)
}

export const dbContext = new DbContext();
