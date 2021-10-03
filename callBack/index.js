/*var fs = require ('fs');
const superagent = require('superagent');


var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const randomText = (length) =>{
   var result  = '';
   for (var i = 0; i < length; ++i) {
      result += alphabet[Math.floor(Math.random() * alphabet.length)];
   }
   return result;
}

var str = randomText(5);

superagent
.get(`https://robohash.org/${str}`)
.end((res)=>{
    console.log(res.body.message)
})*/

/*fs.writeFile('./robotImage',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully wriiten inside the file")
    }

});*/

//String written inside text file
/*const fs = require('fs');
const superagent = require('superagent');
var myurl = require('url');



fs.readFile("randomString.txt",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`The random string is  ${data}. `);

    superagent
    .get(`https://robohash.org/${data}`)
    //.get(`https://robohash.org/dsfdsg`)
    .end((err , res)=>{
        if(err){
            console.log(err)
        }
        console.log(res.body.msg);
        myurl = `https://robohash.org/${data}`; 
        fs.writeFile("./robotImage.txt",myurl,(err=>{
            if(err){
                console.log(err);
                return;
            }
             console.log(myurl);
            console.log("Content successfully written inside the file") ;  
        })
         
        );
    });
});*/

// Generating String using a function

const fs = require('fs');
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

var data = randomText(6);
console.log(`The random string is  ${data}. `);

superagent.get(`https://robohash.org/${data}`)
.end((err , res)=>{
    if(err){
        console.log(err)
    }
    //console.log(res.body.msg);
    myurl = `https://robohash.org/${data}`; 
    fs.writeFile("./robotImage.txt",myurl,(err=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(myurl);
        console.log("Content successfully written inside the file") ;  
    })
     
    )}
)







    






