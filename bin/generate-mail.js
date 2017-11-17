const hbs = require('handlebars');
const fs = require('fs');
const moment = require('moment');
const process = require('process');

fs.readFile('src/mail/template.hbs', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    const result = hbs.compile(data);
    console.log(result({
        name: process.argv[3],
        date: moment().format("DD.MM.YY")
    }));
});