var express = require('express');
var router = express.Router();
var constants = require('../constants')
var QuoteService = require('../services/quote_service');

var results = []
var time_service = new QuoteService(results);


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('layout', {
        title: constants.APP_TITLE,
        subtitle: 'Main page',
        results: results
    });
});

/* GET start time polling. */
router.get('/start', function (req, res, next) {
    console.info('Starting quotes service...');
    time_service.start();

    res.render('layout', {
        title: constants.APP_TITLE,
        subtitle: 'Started quotes service',
        results: results
    });
});

/* GET stop time polling. */
router.get('/stop', function (req, res, next) {
    console.info('Stoping quotes service...');
    time_service.stop();

    res.render('layout', {
        title: constants.APP_TITLE,
        subtitle: 'Stopped quotes service',
        results: results
    });
});

/* GET clear results. */
router.get('/clear', function (req, res, next) {
    console.info('Clearing results...');
    while (results.length > 0) {
        results.pop();
    }
    res.render('layout', {
        title: constants.APP_TITLE,
        subtitle: 'Cleared results',
        results: results
    });
});

module.exports = router;
