module.exports = 

function check(str, bracketsConfig) {
  let objectBrackets = bracketsConfig .reduce((acc, [key, value])=>({...acc, [value]: key}), {});
  console.log(objectBrackets);
 
  let openBrackets = Object.values(objectBrackets);
  console.log(openBrackets);
 
  let stack = [];
 
     if (str.length % 2 !== 0) {
        return false
     };
 
  for (let i = 0; i < str.length; i++) {
   let current = str[i];
   if (openBrackets.includes(current)) {
     stack.push(current);
       console.log(stack);
       if (current === '|' && stack[stack.length - 1] === '|') {
           stack.pop()
       }
     } else {
 
       if (stack.length === 0) {
           return false;
       }
 
     let top = stack[stack.length - 1];
     if(objectBrackets[current] === top) {
         console.log(objectBrackets[current]);
       stack.pop();
         console.log(stack);
     }
   }
     
  } 

     return stack.length === 0;
}
    
   /*   const allEqual = arr => arr.every(val => val === arr[0]);
      const result = allEqual(stack);
         console.log(result);
     if (result === true && stack.length % 2 === 0) {
         return true
     } else {
         return false
        }
}
        */
 




/*function check(str, bracketsConfig) {
  let objectBrackets = bracketsConfig .reduce((acc, [key, value])=>({...acc, [value]: key}), {});
  console.log(objectBrackets);
 
  let openBrackets = Object.values(objectBrackets);
  console.log(openBrackets);
 
  let stack = [];
 
     if (str.length % 2 !== 0) {
        return false
     };
 
  for (let i = 0; i < str.length; i++) {
   let current = str[i];
   if (openBrackets.includes(current)) {
     stack.push(current);
       console.log(stack);
     } else {
 
       if (stack.length === 0) {
           return false;
       }
 
     let top = stack[stack.length - 1];
     if(objectBrackets[current] === top) {
         console.log(objectBrackets[current]);
       stack.pop();
         console.log(stack);
     } else {
       return false
     }  
   }
  } 
      /* const allEqual = arr => arr.every(val => val === arr[0]);
      const result = allEqual(stack);
         console.log(result);
     if (result === true && stack.length % 2 === 0) {
         return true
     } else {
         return false
        }
        
 } */


//check('|()|', [['(', ')'], ['|', '|']]) // -> true
//check('|(|)', [['(', ')'], ['|', '|']]) // -> false */
