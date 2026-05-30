const address = 'jatrabari';
// console.log(address);
const part = address.slice(2,5)
// console.log(part);


const sentence = 'you are good boy and hardworking person.';
// console.log(sentence.split(' '));

const bakko = [ 'you', 'are', 'good', 'boy', 'and', 'hardworking', 'person.' ];
// console.log(bakko.join('<>'));

const first = 'abid'
const last = 'nabid'
// const fullName = first + last;
const fullName = first + ' ' + last;
// console.log(fullName.join('-'));
// console.log(fullName);

const fullName2 = first.concat(' ').concat(last)
// console.log(fullName2);


console.log('x is', last.includes('x'));