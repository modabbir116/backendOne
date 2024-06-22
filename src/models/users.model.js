import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        typeof: String,
        required: true,
        trim: true
    },
    email:{
        typeof: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        typeof: String,
        required: true
    }, 
    todos:[
        {
            typeof: Schema.Types.ObjectId,
            ref: "Todos"
        }
    ]
}, {
    timestamps: true
})

export const User = mongoose.models.User ?? mongoose.models("User", userSchema)