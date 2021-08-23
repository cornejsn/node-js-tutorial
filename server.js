import express from 'express'
import http from 'http'
const app = express();
const port = process.env.PORT || 8080;
;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// Default page
app.get('/',function(req,res){
    res.send('Homepage here');
})

// Palindrome check test, requires a key-value pair as an input
app.get('/palindrome',(req,res)=>{
    var response = req.query;
    var word = Object.values(response).toString(); // Read in paramater as an array then convert to string

    // Displays results of checkPalindrome on the browser, returns HTTP 400 if no word is entered
    if (word) { 
        (checkPalindrome(word)) ? res.send("The word '" + word + "' is a palindrome.") :  res.send("The word '" + word + "' is not a palindrome.");
    } else {
        res.status(400).json({ error: 'No word input.'})
    }
});

app.post('/users', (req,res)=> {
  res.sendStatus(200);
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

    return false;
}