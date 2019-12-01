const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    res.write(fs.readFileSync('./index.html'));
    res.end();
}).listen(4000,()=>{
    console.log('Running on 4000...');
});
