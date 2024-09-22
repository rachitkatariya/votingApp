const mongoose = require('mongoose');

// Define the Candidate schema
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            votedAt: {
                type: Date,
                default: Date.now // Use Date.now without calling it immediately
            }
        }
    ],
    voteCount: {
        type: Number,
        default: 0
    }
});

// Create and export the model
const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;