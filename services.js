import db from './server.js'
import crypto from 'crypto'
const sha256 = x => crypto.createHash('sha256').update(x, 'utf8').digest('hex');

/*  This function verifies password complexity.
    The variable 'regExpCheckPassword' describes the requirements needed for the password to be sufficiently complex:
        - Length is between 8 and 16 digits
        - Has at least one lowercase character
        - Has at least one uppercase
        - Has at least one number
        - Has at least one of these special characters: ! @ # $ % ^ & *

*/
export function CheckPassword(password) {
    var regExpCheckPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,16}$/;
    return (regExpCheckPassword.test(password))
}

/*  This function verifies username complexity.
    The variable 'regExpCheckPassword' describes the requirements needed for the password to be sufficiently complex:
        - Length is between 6 and 12 characters
        - Does not contain numbers/special characters

*/
export function CheckUsername(username) {
    var regExpCheckUsername = /^[a-zA-Z]{6,12}$/;
    return (regExpCheckUsername.test(username))
}

/*  This function verifies email complexity.
    The variable 'regExpCheckEmail' describes the requirements needed for the email to be sufficiently complex:
        - Name with at least 4 characters
        - Name without special characters ^ < > ( ) \[ \] \\\ / . , ; : \s @ ’
        - E-mail must have @
        - Domain name with at least 4 characters
        - Domain name without special characters ^ < > ( ) \[ \] \\\ / . , ; : \s @ ’
        - Domain extension only .com or .net
*/
export function CheckEmail(email) {
    var regExpCheckEmail = /([A-Z]|[a-z]|[^<>()\[\]\\\/.,;:\s@"]){4,}\@([A-Z]|[a-z]|[^<>()\[\]\\\/.,;:\s@"!#\$%\^&\*]){4,}\.(com|net)/;
    return (regExpCheckEmail.test(email))
}

/*  This function adds a new user to the database, given that the user does not already exist.*/
//  FIXME: Don't store password in plaintext, will need to be hashed! 
export function RegisterUser(user, pass, email) {
    for (let i=0; i < db.data.users.length; i++) {
        if (db.data.users[i].username == user) {
            return false;
        }    
    }
    // Write db.data content to db.json
    db.data.users.push({ username: user, password: HashPassword(pass), email: email })
    db.write();
    return true;
}

function HashPassword(pass, email) {
    return sha256(email + pass);
}
