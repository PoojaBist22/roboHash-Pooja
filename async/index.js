var fs  = require ('fs');
const superagent = require('superagent');
var myurl = require('url');

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randomText(length) {
   var result  = '';
   for (var i = 0; i < length; ++i) {
      result += alphabet[Math.floor(Math.random() * alphabet.length)];
   }
   return result;
}






function writeFilePromise(fileLocation, data){
    return new Promise((resolve , reject)=>{
        fs.writeFile(fileLocation, data,(err)=>{
            if(err){
                reject("not able to write the content in the file")
            }
            resolve();
        });
    });
}


async function getRoboPic(){
    try{
    var data = randomText(10);;
    console.log(`The string generated is ${data}`);
    const res = await superagent.get(
        `https://robohash.org/${data}`
    
    );
    myurl = `https://robohash.org/${data}`
    console.log(myurl);
    writeFilePromise("./robotImage", myurl);
    console.log("Successfuuly written inside the file");

 }catch(err){
    console.log(err)
}
}

 getRoboPic();

