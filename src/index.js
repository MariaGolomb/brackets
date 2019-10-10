module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets={ };
  let bracketsSame={};

  let stack=[];
  let closeBr=[];
  

  bracketsConfig.forEach(element => {
    if(element[0]!==element[1]){
      brackets[element[0]]=element[1];
    } else {
      bracketsSame[element[0]]=element[1];
    }
  });

  for (key in brackets){
    closeBr.push(brackets[key]);
  }



for(let i=0; i<str.length; i++){
  let char=str.charAt(i);
      if(Object.keys(brackets).includes(char)){
        stack.push(brackets[char]);
      } else if (closeBr.includes(char) ){
          if(stack.length===0){
            return false;
          } else if(stack[stack.length-1]!==char){
            return false;
          } else {
            stack.pop();
          }
      } else if (Object.keys(bracketsSame).includes(char)){
        if(stack[stack.length-1]===char){
          stack.pop();
        } else {
          stack.push(char);
        }
      }


}

return stack.length===0?true: false;
}


//console.log(check('|[]()|', [['(', ')'], ['[', ']'],['|', '|'], ['{', '}']]))
