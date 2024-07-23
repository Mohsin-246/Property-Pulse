import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required'] // Added a requirement for the username
    },
    image: {
        type: String
    },
    bookmarks: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }
}, {
    timestamps: true // Correctly set timestamps
});

// Check if the model already exists before creating it
const User = models.User || model('User', UserSchema);

export default User;
