class App {
    //método para registrar funcionários
    RegistrarFuncionarios() {
        //referências
        let nome = document.querySelector("input[name='inNome']").value
        let inSalBruto = document.querySelector("input[name='inSalBruto']").value
        this.salBruto = inSalBruto
        this.dependente = document.querySelector("input[name='checkDependente']").checked
        this.pensao = document.querySelector("input[name='checkPensao']").checked
        
        //check
        if(this.dependente) {
            this.inDependenteQuantity = document.querySelector("input[name='inDependente']").value 
        } else {
            this.dependente = 'Não possui dependentes'
            this.inDependenteQuantity = 0
        }
        if(this.pensao) {
            this.inPensaoQuantity = document.querySelector("input[name='inPensao']").value
        }  else {
            this.inPensaoQuantity = 0
        }
        
        
        //argumentos - INSSdesconto/IRPFdesconto
        this.INSSdescontoVariavel = this.INSSdesconto(this.descontoINSS,1212.01,2427.35,3641.03,7087.22,/**/0.075,0.09,0.12,0.14)
        this.IRPFdescontoVariavel = this.IRPFdesconto(this.descontoIRPF,1903.98,2826.66,3751.06,4664.68/**/,0.075,0.15,0.225,0.275,/**/142.8,354.8,636.13,869.36)

        this.salLiquido = inSalBruto - this.INSSdescontoVariavel - this.IRPFdescontoVariavel
        let funcionario = new Funcionario(nome,inSalBruto,this.dependente,this.inDependenteQuantity,this.pensao,this.inPensaoQuantity,this.salLiquido)

        let outSalBruto = (this.salBruto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        let RespostaApp = document.querySelector("pre[name='RespostaApp']")
        RespostaApp.innerText = 'Nome: ' + nome + '\n'+
                                'Salário Bruto: ' + outSalBruto + '\n' +
                                'Dependentes: ' + this.dependente + '\n' +
                                'Pensão alimentícia: ' + this.pensao + '\n' +
                                'Base de cálculo: ' + this.baseCalculo + '\n' +

                                '\n' + 'Descontos: ' + '\n' +
                                        'INSS: ' + this.INSSdescontoVariavel + '\n' +
                                        'IRPF: ' + this.IRPFdescontoVariavel + '\n'
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

        this.baseCalculo = (this.salBruto - this.INSSdescontoVariavel) - this.inPensaoQuantity - (this.inDependenteQuantity * 189.59)
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


    DisplayExibir() {
        this.dependente = document.querySelector("input[name='checkDependente']").checked
        this.pensao = document.querySelector("input[name='checkPensao']").checked
        if(this.dependente) {
            document.querySelector("input[name='checkNotDependente']").checked = false
            let displayDependente = document.querySelector("div[name='DependenteDisplay']")
            displayDependente.classList.remove("checkDisplayDependente")           
        }
        if(this.pensao) {
            document.querySelector("input[name='checkNotPensao']").checked = false
            let displayPensao = document.querySelector("div[name='PensaoDisplay']")
            displayPensao.classList.remove("checkDisplayPensao")
        }  
    }

    DisplayOcultar() {
        this.dependenteNot= document.querySelector("input[name='checkNotDependente']").checked
        this.pensaoNot = document.querySelector("input[name='checkNotPensao']").checked
        if(this.dependenteNot) {
            document.querySelector("input[name='checkDependente']").checked = false
            let displayDependente = document.querySelector("div[name='DependenteDisplay']")
            displayDependente.classList.add("checkDisplayDependente")
        }
        if(this.pensaoNot) {
            document.querySelector("input[name='checkPensao']").checked = false
            let displayPensao = document.querySelector("div[name='PensaoDisplay']")
            displayPensao.classList.add("checkDisplayPensao")
        }
    }
}

