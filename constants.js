const APP_TITLE = 'Random quotes service'

const JSON_API_URI = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand';

const CRON_SCHEDULE = '*/5 * * * * *'

module.exports = {
    APP_TITLE: APP_TITLE,
    JSON_API_URI: JSON_API_URI,
    CRON_SCHEDULE: CRON_SCHEDULE
}