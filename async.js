// const fs = require('fs')
// fs.writeFileSync('hello.txt', 'Hello')
// fs.appendFileSync('HEllo.txt', 'heet Patel')
// a = fs.readFileSync('hello.txt')
// console.log(a.toString())

// fs.renameSync('hello.txt', 'Test.txt')

// fs.unlinkSync('Test.txt')



const fs = require('fs');

fs.writeFile('hello.txt', 'Hello', (err) => {
    if (err) return console.error(err);

    fs.appendFile('hello.txt', 'Urvish Patel', (err) => {
        if (err) return console.error(err);

        fs.readFile('hello.txt', (err, data) => {
            if (err) return console.error(err);
            console.log(data.toString());

            fs.rename('hello.txt', 'Test.txt', (err) => {
                if (err) return console.error(err);

                fs.unlink('Test.txt', (err) => {
                    if (err) return console.error(err);
                    console.log('All done (callbacks)!');
                });
            });
        });
    });
});