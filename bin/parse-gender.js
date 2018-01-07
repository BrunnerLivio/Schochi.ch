const fs = require('fs');
const process = require('process');
const csv = require('csvtojson');
const detection = require('gender-detection');
const json2csv = require('json2csv');

const guests = [];

csv()
    .fromFile(process.argv[3])
    .on('json', guest => {
        guest.gender = detection.detect(guest.Name);
        guests.push(guest);
    })
    .on('done', () => {
        fs.writeFileSync(process.argv[3], json2csv({ data: guests }));
    });