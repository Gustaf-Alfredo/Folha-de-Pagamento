class App {
    //método para registrar funcionários
    RegistrarFuncionarios() {
        //referências
        let nome = document.querySelector("input[name='inNome']").value
        let inSalBruto = document.querySelector("input[name='inSalBruto']").value
        let pensao = document.querySelector("input[name='checkPensao']").checked
        let dependente = document.querySelector("input[name='checkDependente']").checked
        let funcionario = new Funcionario(nome,inSalBruto,dependente,pensao)

        this.salBruto = inSalBruto

        if(dependente) {
            window.alert('check - dependente')
        }
        if(pensao) {
            window.alert('check - pensao')
        }
    }


}

