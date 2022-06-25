class Funcionario {
    constructor (nome,salBruto,dependente,pensao,salLiquido) {
        this.nomeClass = nome
        this.salBrutoClass = salBruto
        this.dependenteCLass = dependente
        this.pensaoClass = pensao
        this.salLiquidoClass = salLiquido
        
    }

    static INSSdesconto(descontoINSS,/**/tetoINSS1,tetoINSS2,tetoINSS3,tetoINSS4,/**/taxaINSS1,taxaINSS2,taxaINSS3,taxaINSS4) {
        this.descontoINSS = descontoINSS
        
        if(this.salBruto <= tetoINSS1) {
            descontoINSS = this.salBruto * taxaINSS1
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
        return descontoINSS
    }

    static get calcular() {
        let INSSdescontoVariavel = this.INSSdesconto(1212.01,2427.35,3641.03,7087.22,/**/0.075,0.09,0.12,0.14)
        return INSSdescontoVariavel
    }
}