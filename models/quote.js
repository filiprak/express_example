var hlp = require('../helpers/helpers');
var util = require('util');

function Quote(jsonObject) {
    this.text = jsonObject.content;
    this.author = jsonObject.title;
    this.net_link = jsonObject.link;
}

module.exports = Quote;