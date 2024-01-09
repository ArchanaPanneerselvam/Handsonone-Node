const http=require('http')
const data=require('./data.js')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World')
        res.end()
    }
    else if(req.url==='/html'){
        res.write("<h1>Hello World</h1>")
        // console.log('hi');
        res.end()
    }
     else if(req.url==='/json'){
          const stringData=JSON.stringify(data);
          res.write(stringData);
          res.end();
     }
    
})

server.listen(5000,()=>{
    console.log('server started');
})