var myvar = require('fs');
var string = process.argv[2];

let check = 0;
for (let i = 0; i < process.argv.length - 3; i++) {
    myvar.readFile('./' + process.argv[i + 3], function (err, data) {
        if (err) throw err;
        if (data.includes(string)) {
            check++;
            console.log(process.argv[i + 3]);
        }
    });
}

if (check == 0) {
    console.log("NONE");
}
