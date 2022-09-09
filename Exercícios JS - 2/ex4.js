
         var v1 = parseInt(prompt("Digite o primeiro numero:"));
         var v2 = parseInt(prompt("Digite o segundo numero:"));
         var v3 = parseInt(prompt("Digite o terceiro numero:"));
    

       
          if (v1 > v2 && v1 > v3){
            if (v2 > v3) { var soma = v2 + v1 
            alert("A soma é: " + soma)}  
            else { var soma = v3 + v1
           alert("A soma é: " + soma)}


         }if (v2 > v1 && v2 > v3 ) {
             if (v1 > v3) {var soma1 = v1 + v2
            alert("A soma é: " + soma2)}
            else { var soma1 = v2 + v3
            alert("A soma é: " + soma2)}
        
          }if (v3 > v1 && v3 > v2) {
            if (v2 > v1) {var soma3 = v3 + v2
            alert("A soma é: " + soma3)}
            else { var soma3 = v3 + v1}
            alert("A soma é: " + soma3)
        
          }
