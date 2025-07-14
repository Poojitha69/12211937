const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortCode: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
    clickCount: { type: Number, default: 0 },
    analytics: [{
        clickedAt: { type: Date, default: Date.now },
        ip: String
    }]
});

module.exports = mongoose.model('URL', urlSchema);
