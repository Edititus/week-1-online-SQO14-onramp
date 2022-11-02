function fizzBuzz(input){
    var challenge = prompt("write a given number");       
    var conv = parseInt(challenge)
    if (conv / 3 == 0)  {
         return"fizz "
    }     
    else if (conv / 5 == 0) {
         return"buzz";     
    }     
    
    else if (conv / 5 == 0 && conv/3 == 0 ) {
        return"fizzbuzz"     
    }     
    
    else {} 
        return "number"
        
    
    }
      
    fizzBuzz()   