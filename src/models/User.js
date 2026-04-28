import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    department: { type: String },
    role: { type: String },
    skills: { type: [String] },
    createdAt: { type: Date, default: Date.now }
});


export default mongoose.models.User || mongoose.model('User', UserSchema)