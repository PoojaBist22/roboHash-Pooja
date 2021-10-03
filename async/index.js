var fs  = require ('fs');
const superagent = require('superagent');
let myurl = require('url');

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
    let data1 = randomText(10);
    console.log(`The string generated is ${data1}`);
    const res1 = await superagent.get(
        `https://robohash.org/${data1}`
    );
    let data2 = randomText(5);;
    console.log(`The string generated is ${data2}`);
    const res2 = await superagent.get(
        `https://robohash.org/${data2}`
    );

    let data3 = randomText(7);;
    console.log(`The string generated is ${data3}`);
    const res3 = await superagent.get(
        `https://robohash.org/${data3}`
    );

    
    const all = await Promise.all([res1 , res2 ,res3]) 
    console.log[all];
    /*myurl = `https://robohash.org/${data}`
    console.log(myurl);
    writeFilePromise("./robotImage", myurl);
    console.log("Successfuuly written inside the file");*/
    
    myurl = [`https://robohash.org/${data1}`,`https://robohash.org/${data2}`,`https://robohash.org/${data3}`]

    for ( let i = 0 ; i< 3 ; i++){
   // myurl = `https://robohash.org/${data[i]}`
    console.log(myurl[i]);
    writeFilePromise("./robotImage.txt", myurl);
    console.log("Successfully written inside the file");
    }  
 }catch(err){
    //console.log(err)
}
}

 getRoboPic();

