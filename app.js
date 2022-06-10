//referências

    //entrada de informações - in
    const inNome = document.getElementById('inNome');
    const inSalBruto = document.getElementById('inSalBruto');
    const inDependente = document.getElementById('inDependente');
    const inPensao = document.getElementById('inPensao');
    
    //checkmark - check
    const checkDependeteSim = document.getElementById('checkDependeteSim');
    const checkDependeteNao = document.getElementById('checkDependeteNao');
    const checkPensaoSim = document.getElementById('checkPensaoSim');
    const checkPensaoNao = document.getElementById('checkPensaoNao')

    //botões - bt
    const btCalcular = document.getElementById('btCalcular');
    const btLimpar = document.getElementById('btLimpar');

    //resposta de validação - outValidacao
    const outValidacaoNomeHelp = document.getElementById('outValidacaoNomeHelp');
    const outValidacaoNomeIcon = document.getElementById('outValidacaoNomeIcon');
    const outValidacaoBorda = document.querySelector(".outValidacaoBorda")

    //resposta do programa - out
    const outResposta = document.getElementById('outResposta');



//iniciando programa
    function calcular () {
    //puxando valores
        let nome = inNome.value;
        let salBruto = Number(inSalBruto.value);

    //validação para nome
        if(nome == "") {
            inNome.style.border = '2px solid #FF2B56';
            outValidacaoNomeHelp.textContent = 'Por favor, preencha corretamente o formulário...' ;           
            outValidacaoNomeIcon.classList.remove("ValidacaoIcon");
        } else
    //validação para salário bruto
        if (salBruto >= 0) {
            
            window.alert('erro')
           
        }
        console.log(salBruto)
    }

    function resetNome() {
        inNome.style.border = 'none';
        outValidacaoBorda.style.border = '0.1px solid #dbdbdb';
        outValidacaoNomeHelp.textContent = ''
        outValidacaoNomeIcon.classList.add('ValidacaoIcon');
    } 




    //acionamento de eventos
    btCalcular.addEventListener("click", calcular);
    inNome.addEventListener("click", resetNome)



