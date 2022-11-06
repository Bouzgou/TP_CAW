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

// question 2:

var myvar = require('fs');
var string = process.argv[2];

function grep(list_of_files) {
    for (let i = 0; i < list_of_files.length - 3; i++) {
        if (myvar.lstatSync(list_of_files[i + 3]).isDirectory()) {
            //console.log(true);
            myvar.readdir(list_of_files[i + 3], (err, files) => {
                myvar.readFile('./' + list_of_files[i + 3] + '/' + files[i], function (err, data) {
                    if (err) throw err;
                    if (data.includes(string)) {
                        console.log(files[i]);
                    }
                });
            });
        } else {
            myvar.readFile('./' + list_of_files[i + 3], function (err, data) {
                if (err) throw err;
                if (data.includes(string)) {
                    console.log(list_of_files[i + 3]);
                }
            });
        }
    }
}

grep(process.argv)
