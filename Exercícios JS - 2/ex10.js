
     var altura = parseFloat(prompt("Digite sua altura"));
     var s =  parseInt(prompt("Digite 1 para masculino e 2 para feminino:"));
      var m;
      var f;
   

     if (s == 1) {
      m =  (72.7 *altura - 58)
        alert("Seu peso ideal é: " + m);
     }
     else if (s == 2) {
     f = (62.1 * altura - 40)
        alert("Seu peso ideal é: " + f)
     }
     else {
      alert("Tente novamente")
     }

  