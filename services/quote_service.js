var CronJob = require('cron').CronJob;
var Quote = require('../models/quote');
var request = require('request');
var constants = require('../constants');

function QuoteService(results) {

    this.pollJob = new CronJob(constants.CRON_SCHEDULE, function () {
        request(constants.JSON_API_URI, function (err, response, body) {
            if (err) {
                console.warn('[API-2] Fetch error: ' + err.message);
                return;
            }
            console.log("[API-2] Got reponse: " + body.toString());
            try {
                parsed_body = JSON.parse(body);
                var quote = new Quote(parsed_body[0]);
                results.push(quote);

            } catch (err) {
                console.warn('[API-2] Parse error: ' + err.message);
            }
        });
    });
}

QuoteService.prototype.start = function () {
    this.pollJob.start();
};

QuoteService.prototype.stop = function () {
    this.pollJob.stop();
};

module.exports = QuoteService;

