class App {
    //método para registrar funcionários
    RegistrarFuncionarios() {
        //referências
        let nome = document.querySelector("input[name='inNome']").value
        let inSalBruto = document.querySelector("input[name='inSalBruto']").value
        let pensao = document.querySelector("input[name='checkPensao']").checked
        let dependente = document.querySelector("input[name='checkDependente']").checked
        let funcionario = new Funcionario(nome,inSalBruto,dependente,pensao)
        console.log(funcionario)
        this.salBruto = inSalBruto

        if(dependente) {
            window.alert('check - dependente')
        }
        if(pensao) {
            window.alert('check - pensao')
        }  
        
        //let INSSdescontoVariavel = this.INSSdesconto(1212.01,2427.35,3641.03,7087.22,/**/0.075,0.09,0.12,0.14)
        let INSSdescontoVariavel = this.INSSdesconto(this.descontoINSS,1212.01,2427.35,3641.03,7087.22,/**/0.075,0.09,0.12,0.14)
        console.log(INSSdescontoVariavel)
    }

    INSSdesconto(descontoINSS,/**/tetoINSS1,tetoINSS2,tetoINSS3,tetoINSS4,/**/taxaINSS1,taxaINSS2,taxaINSS3,taxaINSS4) {
        
        this.descontoINSS = descontoINSS
        if(this.salBruto <= tetoINSS1) {
            descontoINSS = this.salBruto * taxaINSS1
            console.log(this.salBruto)
        } else 
        if (this.salBruto > tetoINSS1 && this.salBruto <= tetoINSS2) {
            descontoINSS = this.salBruto * taxaINSS2
        } else
        if(this.salBruto > tetoINSS2 && this.salBruto <= tetoINSS3) {
            descontoINSS = this.salBruto * taxaINSS3
        } else 
        if(this.salBruto > tetoINSS3 && this.salBruto <= tetoINSS4) {
            descontoINSS = this.salBruto * taxaINSS4
        } else
        if(this.salBruto > tetoINSS4) {
            descontoINSS = tetoINSS4 * taxaINSS4
        }
        console.log(descontoINSS)
        return descontoINSS
    }

    calcular() {
        let INSSdescontoVariavel = this.INSSdesconto(1212.01,2427.35,3641.03,7087.22,/**/0.075,0.09,0.12,0.14)
        console.log(INSSdescontoVariavel)
        return INSSdescontoVariavel
        
    }
}

