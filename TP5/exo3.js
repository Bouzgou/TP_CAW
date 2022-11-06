var myvar = require('fs');
var string = process.argv[2];

for (let i = 0; i < process.argv.length - 3; i++) {
    myvar.readFile('./' + process.argv[i + 3], function (err, data) {
        if (err) throw err;
        if (data.includes(string)) {
            console.log(process.argv[i + 3]);
        }
    });
}
