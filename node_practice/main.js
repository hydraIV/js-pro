const func = require('./func');
const os = require('os');
const fs = require('fs');
const http = require('http');
const moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }
//     if(req.url === '/api/users') {
//         res.write(JSON.stringify([
//             {name: 'Some1'},
//             {name: 'Some2'},
//             {name: 'Some3'},
//         ]));
//         res.end()
//     }
// });
// server.listen(3000);
// // server.on('connection', () => {
// //     console.log('New connection');
// // })
// console.log('Listen on port 3000....')
// fs.writeFile('some.txt', 'i`m new string', (err) => {
//     if (err) {
//         console.log(err)
//     }
// });

// fs.readFile('some.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());

// console.log(func(100));