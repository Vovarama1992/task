import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations);


function isId(key) {
    return (key.includes("Id")) ;
}




function objectDecode(obj) {
    let encodedObj = {};
    for (let key of Object.keys(obj)) {
        const trans = obj[key];
    if (isId(key) && translations[trans]) {
        
        encodedObj[key] = translations[trans];
        
    } else encodedObj[key] = obj[key];

}
return encodedObj;
}


function enigma() {
     const decoded = encoded.map(enc => objectDecode(enc));
     return decoded;

}
const decoded = enigma();
function uniquerKeys(obj) {
    const keys = Object.keys(obj);
    const entries = Object.entries(obj);
    const filtered = keys.filter(key => entries.filter(arr => arr[1] == obj[key]).length == 1);
    return filtered;
}
let uniqs = {};
for (let dec of decoded) {
    uniqs = {...uniqs, ...dec};
}

const finalUniqs = uniquerKeys(uniqs);


console.log(decoded);
console.log(finalUniqs);




