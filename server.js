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
    var palinCheck;

    //console.log(word);

    if (word) {
        palinCheck = checkPalindrome(word);
    }

    // Displays results of checkPalindrome on the browser
    if (palinCheck) {
        res.send("The word '" + word + "' is a palindrome.");
    } else {
        res.send("The word '" + word + "' is not a palindrome.");
    }
});

// checks if input string is a palindrome
function checkPalindrome(str) {
    // convert string to an array
    const arrayValues = str.split('');
    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    // convert array back to a string
    const reverseString = reverseArrayValues.join('');

    // return true/false depending if initial string matches reversed string
    if(str == reverseString) {
        return true;
    }
    else {
        return false;
    }
}