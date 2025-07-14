const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl, getAnalytics } = require('../../controllers/urlController');
const auth = require('../middleware/auth');

// Routes
router.post('/shorten', auth, shortenUrl);       // Create short URL
router.get('/:code', redirectUrl);              // Redirect to original URL
router.get('/analytics/:code', auth, getAnalytics); // View analytics (auth required)

module.exports = router;
