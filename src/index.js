module.exports = 

function check(str, bracketsConfig) {
  let objectBrackets = bracketsConfig .reduce((acc, [key, value])=>({...acc, [value]: key}), {});
  let openBrackets = Object.values(objectBrackets);
  let stack = [];
 
     if (str.length % 2 !== 0) {
        return false
     };
 
  for (let i = 0; i < str.length; i++) {

   let current = str[i];
   let top = stack[stack.length - 1];

   if (current === objectBrackets[current] && current === top ) {
    stack.pop();
  } else if (openBrackets.includes(current)) {
    stack.push(current);
  } else if (objectBrackets[current] === top) {
    stack.pop();
  } else {
    return false;
  }
}
return stack.length === 0;
}


 



