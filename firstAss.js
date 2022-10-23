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


// Question 4 //
function valTimesIndex(anArrayOfNumber){
  let result = anArrayOfNumber.map((num, index) => {
    return num * index;
  })
  
  return result;
}

console.log(valTimesIndex([1,2,3])) // [0,2,6]
console.log(valTimesIndex([5,10,15])) // [0, 10, 30]


/// Question 5 ///

function addKeyAndValue(anArray, aKey, aValue){
  let emptyArr = []
  anArray.reduce((initialValue, currentValue) => {
    currentValue[aKey]= aValue
    emptyArr.push(currentValue)
  },{})  
  return emptyArr
}


console.log(addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true))
