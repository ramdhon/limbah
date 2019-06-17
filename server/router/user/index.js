const express = require('express');
const router = express.Router();

const Authenticate = require('../../middlewares/authenticate') 
const DecodeToken = require('../../middlewares/decodeToken');

router.use(Authenticate)
router.get('/decode', DecodeToken);

module.exports = router;