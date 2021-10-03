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

var data = randomText(8);

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
myurl = `https://robohash.org/${data}`;
superagent.get(`https://robohash.org/${data}`)
.then((res)=>{
    console.log(myurl);
    return writeFilePromise("./robotImage.txt", myurl );
}).then(()=>{console.log("Successfully written the contents inside the file");
}).catch((err)=>{
    console.log(err)
});


// promise chaining
/*
readFilePromise("./dogBreed.txt")
.then((data)=>{
    console.log(`The dog breed is ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
}).then((res)=>{
    console.log(res.body.message);
    return writeFilePromise("./DogImage.txt", res.body.message);
}).then(()=>{
    console.log("Successfully written the contents inside the file");
}).catch((err)=>{
console.log(err)
});*/


