/// First Assignment ///


// Question 1 //
function extractKey(anArrayOfObj, name){
  
  let result = anArrayOfObj.map(value => {
    //console.log(value)
    return value.name
  })
  
  return result;
}


console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")) // ['Elie', 'Tim', 'Matt']


/// Question 2 ///
function filterLetters(anArrayofLetter, letter){
  let result = anArrayofLetter.filter((item) => {
    return item.toLowerCase() === letter.toLowerCase()
  })
  
  return result.length;
}

console.log(filterLetters(["a","a","b","c","A"], "a")); // 3
console.log(filterLetters(["a","a","b","c","A"], "z")); // 0
console.log(filterLetters(["a","a","b","c","A"], "B")); // 1


/// Question 3 ///
function printFirstAndLast(anArrayOfString){
  let result = anArrayOfString.map((element) => {
    console.log(element[0] + element[element.length - 1])
  })
  
  return
}

console.log(printFirstAndLast(['awesome','example','of','forEach'])) // 'ae' 'ee' 'of' 'fh'
