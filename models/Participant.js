import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    registeredAt: {
        type: Date,
        default: Date.now
    },
    totalTime: {
        type: Number,
        default: 0
    },
    completedAt: {
        type: Date
    },
    winner: {
        type: Boolean,
        default: false
    }
});

const Participant = mongoose.model('Participant', participantSchema);

export default Participant;
