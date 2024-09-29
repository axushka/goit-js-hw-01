// function isNumberInRange(start, end, number) {
//   if(number >= start && number <= end) { return true;} 
//   else if(number < start) { return false;} 
//   else if(number > end) { return false;} 
// }

/////////////////////////////////////////////////////////


// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//     return substring;
//   }
//   console.log(getSubstring("Hello world", 3));

//////////////////////////////////////////////////////////


// function normalizeInput(input, to) {
//   let normalizeInput;
//   if(to === "upper") { normalizeInput = input.toUpperCase();} 
//   else if(to === "lower") { normalizeInput = input.toLowerCase();}
//   return normalizeInput;
  
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

//////////////////////////////////////////////////////////////////////


// function checkForName(fullName, firstName) {
//   const userfirstname = firstName.toLowerCase();
//   const userfullname = fullName.toLowerCase();
//   const username = userfullname.includes(userfirstname);

//   return username;
  
// }
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));

///////////////////////////////////////////////////////////////


// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//     return substring;
//   }
// console.log(getSubstring("Hello world", 3));  
// console.log(getSubstring("Hello world", 0)); 

///////////////////////////////////////////////////////////////////


// function checkFileExtension(fileName, ext) {
//   const userfilename = fileName.toLowerCase();
//   const userext = ext.toLowerCase();

//   if(userfilename.endsWith(ext)) { return "File extension matches";} else { return "File extension does not match";}
// }
// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("index.html", ".js"));

//////////////////////////////////////////////////////////////


// function getFileName(file) {
 
//   const index = file.indexOf('.');

//    if(index > 0) { return file.slice(0, index);} else { return file}

// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("index"));

// ///////////////////////////////////////////////


// function createFileName(name, ext) {
//   const username = name.trim();
//   const userfile = username + "." + ext;
//   return userfile;
// }

// console.log(createFileName(" order ", "txt"));

////////////////////////////////////////////////////

// function calculateTotal(number) {
 
// let calcnumber = 0;
// let sum = 0;
// while(calcnumber <= number) { sum += calcnumber; calcnumber += 1;}
// return sum;
// }
// console.log(calculateTotal(3));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

///////////////////////////////////////////////////////


// function calculateTotal(number) {
//     let sum = 0;
//     for(let i = 0; i <= number; i += 1) { sum +=i}
//     return sum;
//   }
// console.log(calculateTotal(3));

///////////////////////////////////////////////////////


// function calculateEvenTotal(number) {
//     let sum = 0;
//     for(let i = 0; i <= number; i++) {
//       if(i % 2 === 0) { sum += i}
//     } 
//     return sum;
//   }

  
//   console.log(calculateEvenTotal(1));
//   console.log(calculateEvenTotal(3));
//   console.log(calculateEvenTotal(18));


//////////////////////////////////////////////////////////

// const start = 6;
// const end = 17;
// let number;
// for(number = start; number <= end; number++) 
//     { if(number % 5 === 0) { console.log(number);}
// if(number % 5 === 0) { console.log(number); break;}}

////////////////////////////////////////////////////////


// function findNumber(start, end, divisor) {
//     for(let i = start; i <= end; i++) {
//       if(i % divisor === 0) { return i}
      
      
//     }
//   }
//   console.log(findNumber(2, 6, 5));
//   console.log(findNumber(8, 17, 3));
//   console.log(findNumber(6, 9, 4));