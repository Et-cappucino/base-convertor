function convertToBinary (decimal){
    let result = "";
    let result2 = "";
    let quotient = decimal;
    let remainder;
    
    if(decimal === 0){
      result += "0";
    }
    else {  
      function division (num){
           while (quotient > 0){
            if( num % 2 === 0 ) {
              remainder = "0";
              result += remainder;
              quotient = num/2;
              division(quotient);
            }
            else if ( num % 2 === 1 ) {
              remainder = "1";
              result += remainder;
              quotient = Math.floor(num/2);
              division(quotient);
           }
         }
       }
       division(decimal);    
     }
    
     for(let i=result.length; i>=0; i--){
        result2 += result.charAt(i);
     }
      console.log("The binary of " + decimal + " is " + result2);
}


function convertToHexa(decimal){
    let parameters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let parameters2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let result = "";
    let result2 = "";
    let quotient = decimal;
    let i = 0;
    
    if (decimal === 0 ) {
      result += "0";
    }
    else {
      while( quotient > 0 ){   
       if(quotient % 16 === parameters[i]){   
            result += parameters2[i];      
            quotient = Math.floor(quotient/16);      
            i=0;   
          }   
       else {     
          i++;    
       } 
     }
   }
     
     
    for(let j=result.length; j>=0; j--){
      result2 += result.charAt(j);
    }
    console.log("The hex of " + decimal + " is " + result2);
  }
  
module.exports = {
    convertToBinary,
    convertToHexa
}


