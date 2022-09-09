

        var num1 = parseInt(prompt("Digite o primeiro numero:"));
        var num2 = parseInt(prompt("Digite o segundo numero: "));
        var calculo = prompt("Digite uma operação a ser calculada 1-Adição 2-Subtração 3-Divisão 4-Multiplicação")
        var r = 0;
        if (calculo == 1) {
         r = (num1 + num2)
        }
        else if (calculo == 2) {
         r = (num1 - num2) 
        }
        else if (calculo == 3) {
        r = (num1 / num2)
        }
        else if (calculo == 4) {
        r = (num1 * num2)
        }

        alert("O resultado é: " + r)
