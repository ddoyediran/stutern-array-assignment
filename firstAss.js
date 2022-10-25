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


/// Question 6 ///
function printEmail(anArrayOfObj){
  
  anArrayOfObj.map(value => {
    console.log(value["email"])
    //console.log(value.email)
    //return value.email
  })
 
}


let users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];


printEmail(users)


/// Question 7 ///

function printHobbies(anArrayOfObj){
  
  anArrayOfObj.map(value => {
    value.hobbies.map((hobby) => {
      console.log(hobby)
    })
  })
  
}

printHobbies(users)


/// Question 8 ///

function findHometownByState(anArrayOfObj){
  return anArrayOfObj.find((user) => {
    return user["hometown"]["state"] === "CA";
  })
}

console.log(findHometownByState(users));

// another way //
function findHometownByState(anArrayOfObj){
  let result = anArrayOfObj.filter((user) => {
    return user.hometown.state === "CA";
  })
  
  return result[0];
}

console.log(findHometownByState(users))

/// Question 9 ///
function allLanguages(anArrayOfObject) {
  let languageArray = [];
   anArrayOfObject.map((languages) => {
     languages.favoriteLanguages.map((language) => {
       if (languageArray.includes(language) === false ){
         languageArray.push(language);
       }
     }) 
  });
    return languageArray;
}

console.log(allLanguages(users)) // ['Perl', 'Java', 'C++', 'Haskell', 'Clojure', 'PHP', 'JavaScript', 'Ruby', 'Python', 'Go', 'C#', 'F#', 'Swift']

