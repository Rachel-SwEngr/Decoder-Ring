// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    try{
      if(shift>25 || shift<-25){
        throw new Error("Shift should be between 25 and -25");
      }else if(shift ===0){
        throw new Error("Shift cannot be 0");
      }
      
      //determine whether encode or decode
      shift*=(encode ? 1:-1);
      
      //make arr of input, and create alphabet key
      let given = input.toLowerCase();
      let result = "";
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
      console.log(alphabet);
      
      for(let i = 0; i<given.length; i++){
        let currIndex = given[i];
        console.log(i);
        //check if in alphabet
        if(currIndex.match(/[a-z]/)){
          let alphabetIndex = alphabet.indexOf(currIndex);
          alphabetIndex = ((alphabetIndex + shift) % 26);
          //accounts for negative shift
          alphabetIndex = ((alphabetIndex + 26) % 26);
          result+=alphabet[alphabetIndex];
          
        }else{
          //append to result
          result+=given[i];
          continue;
        }
        console.log(i);
      }
      console.log(result);
      return result;
      
    }catch(error){
      console.log("returning false");
      return false;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
//module.exports = caesarModule.caesar;
