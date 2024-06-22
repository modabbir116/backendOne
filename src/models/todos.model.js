import mongoose, { Schema } from "mongoose";

const todosSchema = new Schema({
    title:{
        typeof: String,
        required: true
    },
    description:{
        typeof: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user:{
        typeof: Schema.Types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true
})

export const Todos = mongoose.models.Todos ?? mongoose.models("Todos", todosSchema)