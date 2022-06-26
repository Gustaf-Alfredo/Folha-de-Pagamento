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
        //check
        if(dependente) {
            window.alert('check - dependente')
        }
        if(pensao) {
            window.alert('check - pensao')
        }  
        
        //argumentos - INSSdesconto/IRPFdesconto
        this.INSSdescontoVariavel = this.INSSdesconto(this.descontoINSS,1212.01,2427.35,3641.03,7087.22,/**/0.075,0.09,0.12,0.14)
        this.IRPFdescontoVariavel = this.IRPFdesconto(this.descontoIRPF,1903.98,2826.66,3751.06,4664.68/**/,0.075,0.15,0.225,0.275,/**/142.8,354.8,636.13,869.36)
    }

    //método responsável pelo cálculo INSS
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

    //método responsável pelo cálculo IRPF
    IRPFdesconto(descontoIRPF,/**/tetoIRPF1,tetoIRPF2,tetoIRPF3,tetoIRPF4,/**/taxaIRPF1,taxaIRPF2,taxaIRPF3,taxaIRPF4,/**/deducoesIRPF1,deducoesIRPF2,deducoesIRPF3,deducoesIRPF4) {

        this.baseCalculo = (this.salBruto) - (this.INSSdescontoVariavel)
        this.descontoIRPF = descontoIRPF

        if(this.baseCalculo <= tetoIRPF1) {
            descontoIRPF = 0
        } else 
        if(this.baseCalculo > tetoIRPF1 && this.baseCalculo <= tetoIRPF2) {
            descontoIRPF = (this.baseCalculo * taxaIRPF1) - deducoesIRPF1
        } else
        if(this.baseCalculo > tetoIRPF2 && this.baseCalculo <= tetoIRPF3) {
            descontoIRPF = (this.baseCalculo * taxaIRPF2) - deducoesIRPF2
        } else
        if(this.baseCalculo > tetoIRPF3 && this.baseCalculo <= tetoIRPF4) {
            descontoIRPF = (this.baseCalculo * taxaIRPF3) - deducoesIRPF3
        } else
        if(this.baseCalculo > tetoIRPF4) {
            descontoIRPF = (this.baseCalculo * taxaIRPF4) - deducoesIRPF4
        }
        return descontoIRPF
        
    }
}

