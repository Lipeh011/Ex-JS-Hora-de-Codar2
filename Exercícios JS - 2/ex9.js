

        var nome = prompt("Digite seu nome: ");
        var ano = parseInt(prompt("Digite seu ano de nascimento: "));
        
        if (ano <= 2006) {
          alert("Uhuu !  você pode votar, " + nome)  
        }
        else if (ano > 2006 ) {
            alert("Você não pode votar.")
            
        }

