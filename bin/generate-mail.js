const hbs = require('handlebars');
const fs = require('fs');
const moment = require('moment');
const process = require('process');
const crypto = require('crypto');
fs.readFile('src/mail/template.hbs', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    const result = hbs.compile(data);

    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    
    console.log(result({
        name: process.argv[3],
        date: moment().format("DD.MM.YY"),
        hash: crypto.createHash('sha1').update(current_date + random).digest('hex').substring(0,8)
    }));
});