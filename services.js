/*  This function verifies password complexity.
    The variable 'regExpCheckPassword' describes the requirements needed for the password to be sufficiently complex:
        - Length is between 8 and 16 digits
        - Has at least one lowercase character
        - Has at least one uppercase
        - Has at least one number
        - Has at least one of these special characters: ! @ # $ % ^ & *

*/
export function CheckPassword (password) {
    var regExpCheckPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,16}$/;
    return (regExpCheckPassword.test(password))
}

/*  This function verifies username complexity.
    The variable 'regExpCheckPassword' describes the requirements needed for the password to be sufficiently complex:
        - Length is between 6 and 12 characters
        - Does not contain numbers/special characters

*/
export function CheckUsername (username) {
    var regExpCheckUsername = /^[a-zA-Z]{6,12}$/;
    return (regExpCheckUsername.test(username))
}
