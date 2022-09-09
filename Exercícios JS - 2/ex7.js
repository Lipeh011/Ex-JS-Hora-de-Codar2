
          var v1 =  parseInt(prompt("Digite o primeiro numero:"))
          var v2 =  parseInt(prompt("Digite o segundo numero:"))
          var v3 =  parseInt(prompt("Digite o terceiro numero;")) 
          var v4 =  parseInt(prompt("Digite o quarto numero:"))
          var v5 =  parseInt(prompt("Digite o quinto numero:"))
          var v6 =  parseInt(prompt("Digite o sexto numero:"))
          var numero = [v1,v2,v3,v4,v5,v6]
          var x = 0 

          for (var i = 0; i< numero.length; i ++) 
          {if(numero [i] < 72 ){x += numero [i]}}

          alert("Os numeros foram: " + numero + " È a soma total: " + x)
