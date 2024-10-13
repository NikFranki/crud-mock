const express = require('express');
const router = express.Router();

const AutoLost = require('../lib/auto_lost');

router.post('/list', AutoLost.getList);

router.get('/download', AutoLost.downloadReport);

module.exports = router;
