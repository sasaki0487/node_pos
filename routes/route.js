const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/auth.controller');

router.get('/',auth_controller.login);
router.post('/auth',auth_controller.auth);

module.exports = router;