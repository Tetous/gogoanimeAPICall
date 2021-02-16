const { Router } = require('express');

const router = require('express').Router();
const anime = require('./category/anime/index');

router.use('/anime', anime);

module.exports = router;