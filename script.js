/* Global Variables */
//All DOM elements
let checkButton = document.getElementById('check-btn');
let inputField = document.getElementById('text-input');
let resultField = document.getElementById('result');
//Made global variables
let input = "";
let output = "";
let val = "";
/* Function to determine if palindrome*/
function isPalindrome(string){
  if(string.length == 1){
    return true;
  }
  let left = 0;
  let right = string.length-1;
  while (left < right){
    let leftC = string.charAt(left).toLowerCase();
    let rightC = string.charAt(right).toLowerCase();
    //Check if valid or not
    if(!leftC.match(/^[0-9a-z]+$/)){
      left++;
      continue;
    }
    if(!rightC.match(/^[0-9a-z]+$/)){
      right--;
      continue;
    }
    if(leftC != rightC){
      return false
    }
    left++;
    right--;
  }
  return true
}
/* Handling clicking event */
function handleClick(){
  if(inputField.value == 0){
    alert("Please input a value");
  }
  else{
    input = inputField.value
    let palindrome = isPalindrome(input)
    if(palindrome){
      output = input+ " is a palindrome";
    }
    else{
      output = input + " is not a palindrome";
    }
    resultField.innerText = output;
  }
}
//Declare onclick event
checkButton.onclick = handleClick;
