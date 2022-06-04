import http from 'http';
import fs from 'fs';
let db=fs.readFileSync('db.json');
let data=JSON.parse(db);
http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    // res.writeHead(200,{'Content-Type':'application/json'});
    // res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==='/'){
        res.write(db);
    }
    else if(req.url==='/devs'){
        res.write(JSON.stringify(data.devs));
    }
    else if(req.url==='/students'){
        res.write(JSON.stringify(data.students));
    }
    else if(req.url==='/mens'){
        res.write(JSON.stringify(data.mens));
    }
    else{
        res.write(JSON.stringify({
            status: "No Response !"
        }));
    }
    
    res.end();
}).listen('5050',()=>{
    console.log('our first node server is here');
});



// writeFile,writeFileSync,appendFile,appendFileSync,readFile,readFileSync,rename,renameSync,unlink,unlinkSync,url,parse


//moduler system
// import {infoSy} from './function.js';
// console.log(infoSy("Robin",23))

//common js system
// const [sum,show,devs]=require('./function')
// console.log(sum(2,3));
// console.log(show());
// devs.map(data=>{
//     console.log(data);
// })

//asnc function common js system
// const fs=require('fs');
// fs.writeFile('db.text','heload',(err)=>{
//     console.log(err)
// })

//sync function commonjs system
// const fs=require('fs');
// fs.writeFileSync('data.txt','hello')


//module js system
// import {appendFileSync, writeFileSync} from 'fs';
// writeFileSync('data.txt','hello ');
// appendFileSync('data.txt','\nhello we are devs');
// appendFileSync('data.txt','\nNo man we are devs');

//read file sync module js
// import { readFileSync } from 'fs';

// let data=readFileSync('db.json');
// console.log(data.toString());


//read file async module js
// import { appendFile, appendFileSync, readFile, readFileSync, writeFile, writeFileSync } from 'fs';

// let data=readFile('db.json',(err,data)=>{
//     console.log(data.toString());
// });

// //rename asysnc
// import { rename } from 'fs';
// rename('data.txt','fata.txt',(err)=>{
//     console.log(err)
// })

//rename sysnc
// import { renameSync } from 'fs';
// renameSync('fata.txt','data.txt')

//unlink async
// import { unlink } from 'fs';
// unlink('index.html',(err)=>{
//     console.log(err)
// })
//unlink sync
// import { unlinkSync } from 'fs';
// unlinkSync('index.html')

//url 

// import { parse } from 'url';
// let data=parse('htttps://delwar.me?name=delwar');
// console.log(data);


//path
// import { basename,dirname,parse } from 'path';
// let data=parse('htttps://delwar.me/box/index.php');
// console.log(data);

