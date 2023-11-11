//this is an assignment 
var Airtable = require('airtable');
require('dotenv').config();

var apiKey = process.env.API_KEY;
var baseId = process.env.BASE_ID;

var base = new Airtable({ apiKey: apiKey }).base(baseId);
var columnsToRetrieve = ['First Name', 'Last Name', 'Status'];
base('Tasks').select({
    maxRecords: 2,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
        var output = 'Details:' + ' ' + record.get('First Name') + ' '
            + record.get('Last Name') + ' ' +
            record.get('Status');
        console.log(output);
    });
}, function done(err) {
    if (err) { console.error(err); return; }
});