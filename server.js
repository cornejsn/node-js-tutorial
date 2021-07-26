const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const http=require("http");

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get('/',function(req,res){
    res.send('Homepage here');
    var url="http://localhost:8080";
    var req = http.request(url,res=>{
        res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
        });
    });
    req.end();
})

app.get('/test',(req,res)=>{
    var response=req.query;
    var word = Object.values(response).toString(); // Read in paramater as an array then convert to string
    console.log(response);
    console.log(word);
    res.send(response);

    checkPalindrome(word);
});

function checkPalindrome(str) {
    // convert string to an array
    const arrayValues = str.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(str == reverseString) {
        console.log('The word '+ str + ' is a palindrome.');
    }
    else {
        console.log(str + 'is a palindrome');
    }
}