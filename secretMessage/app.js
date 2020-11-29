let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
function addValue(newValue, begining) {
    if(begining) {
      secretMessage.unshift(newValue);
    } else 
  secretMessage.push(newValue);
}
function replaceValue(replaceWord, replaceValue) {
  let replaceIndex = secretMessage.indexOf(replaceWord);
  secretMessage[replaceIndex] = replaceValue;
}

//adding new string
addValue('to');
addValue('Program');


//replacing easily with right
replaceValue('easily', 'right');
//remove first element
secretMessage.shift();
addValue('Programming', true);
let newValue = 'know,';
let values = ['get', 'right', 'the', 'first', 'time,'];
for (let i = 0, total = values.length; i < total; i++) {
  replaceValue(values[i], newValue);
}
console.log(secretMessage.join(' '));