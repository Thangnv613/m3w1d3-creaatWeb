const http = require('http');
 const sever = http.createServer((req,res) => { 
    res.write('hello working')
res.end();
})
sever.listen(8080,'localhost');   