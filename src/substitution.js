// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    try{
      //test 26 chars
      if(alphabet.length!=26){
        throw new Error("Alphabet is not exactly 26 characters");
      }
      //test if distinct chars
      let distinctTest = alphabet.length=== new Set(alphabet).size;
      if(!distinctTest){
        throw new Error("Alphabet is not distinct");
      }
      
      //given arr creation and normal alphabet key
      let given = input.toLowerCase();
      let result = "";
      const normAlphabet = "abcdefghijklmnopqrstuvwxyz".split('');
      
      for(let i = 0; i<given.length; i++){
        //preserve space
        if(given[i]==' '){
          result+=given[i];
          continue;
        }
        if(encode){
          //search for index in norm alphabet and find encoded char
          let alphabetIndex = normAlphabet.indexOf(given[i]);  
          let encodedChar = alphabet[alphabetIndex];
          result+=encodedChar;    //append to result
        }else{
          //search for index in given alphabet and find decoded char
          let encodedIndex = alphabet.indexOf(given[i]);  
          let alphabetChar = normAlphabet[encodedIndex];
          result+=alphabetChar;   //append to result
        }
          
      }
      //return result
      return result;
      
    }catch(error){
      console.log("returning false; error encountered");
      return false;
    }
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
