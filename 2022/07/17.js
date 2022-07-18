/*

Given a string that has a valid email address, 
write a function to hide the first part of the 
email (before the @ sign), minus the first and 
last character. For extra credit, add a flag 
to hide the second part after the @ sign to 
your function excluding the first character and 
the domain extension.

Example:
========

> hideEmail('example@example.com')
> 'e*****e@example.com'

> hideEmail('example+test@example.co.uk', hideFull)
> 'e**********t@e******.co.uk'

*/

const hideEmail = (email, hideFull) => {
    let parts = email.split('@');

    const left = obfuscate(parts[0]);

    if (!hideFull) {
        return [left,parts[1]].join('@');
    } else {
        let right = parts[1].split('.');

        right[0] = obfuscate(right[0]);

        return [left,right.join('.')].join('@');
    }
}

const obfuscate = (str) => {
    return str
        .split('')
        .map((c, i) => {
            return i === 0 || i === str.length-1 ? c : '*'
        })
        .join('');
}

console.log(hideEmail('example@example.com'));
console.log(hideEmail('example+test@example.co.uk', true));