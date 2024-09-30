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
                default: Date.now // Fix the Date.now issue
            }
        }
    ],
    voteCount: {
        type: Number,
        default: 0 // Ensure this is updated manually when votes are added
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
