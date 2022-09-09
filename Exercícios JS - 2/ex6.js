
        var v1 =  parseInt(prompt("Digite o primeiro numero:"))
        var v2 =  parseInt(prompt("Digite o segundo numero:"))
        var v3 =  parseInt(prompt("Digite o terceiro numero:"))
        var v4 =  parseInt(prompt("Digite o quarto numero:"));

        if ( v1 > v2 && v1 > v3 && v1 > v4){
            alert("O Primeiro valor é : " + v1 + " Ultimo valor: " + v4 + " Maior valor é: " + v1)
        }
        else if (v2 > v1 && v2 > v3 && v2 > v4){
            alert("O Primeiro valor é: " + v1 + " Ultimo valor: " + v4 + " Maior valor é: " + v2)
        }
        else if (v3 > v1 && v3 > v2 && v3 > v4){
            alert("O Primeiro valor é: " + v1 + " Ultimo valor: " + v4 + " Maior valor é: " + v3)
        }
        else if (v4 > v1 && v4 > v2 && v4 > v3){
            alert("O Primeiro valor é: " + v1 + " Ultimo valor: " + v4 + " Maior valor é: " + v4)
        }
