import mongoose from 'mongoose';

const dbConnection = async () =>{
    try {
        const {connections} = await mongoose.connect(process.env.MONGODB_CONECTION_URL)
        console.log("mongodb connected todos", connections);
    } catch (error) {
        throw new Error(error.message)
    }
}

export { dbConnection }