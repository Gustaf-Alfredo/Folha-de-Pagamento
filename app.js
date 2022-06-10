//referências

    //entrada de informações - in
    const inNome = document.getElementById('inNome');
    const inSalBruto = document.getElementById('inSalBruto');
    const inDependente = document.getElementById('inDependente');
    const inPensao = document.getElementById('inPensao');
    
    //checkmark - check
    const checkDependenteSim = document.getElementById('checkDependenteSim');
    const checkDependenteNao = document.getElementById('checkDependenteNao');
    const checkPensaoSim = document.getElementById('checkPensaoSim');
    const checkPensaoNao = document.getElementById('checkPensaoNao')

    //botões - bt
    const btCalcular = document.getElementById('btCalcular');
    const btLimpar = document.getElementById('btLimpar');

    //resposta de validação - outValidacao
        //Nome
            const outValidacaoNomeHelp = document.getElementById('outValidacaoNomeHelp');
            const outValidacaoNomeIcon = document.getElementById('outValidacaoNomeIcon');
            const outValidacaoBordaNome = document.querySelector(".outValidacaoBordaNome")
        //SalBruto
            const outValidacaoSalBrutoHelp = document.getElementById('outValidacaoSalBrutoHelp');
            const outValidacaoSalBrutoIcon = document.getElementById('outValidacaoSalBrutoIcon');
            const outValidacaoBordaSalBruto = document.querySelector(".outValidacaoBordaSalBruto");
        //display - Dependente 
            const DependenteDisplay = document.getElementById('DependenteDisplay');
            const PensaoDisplay = document.getElementById('PensaoDisplay');

    //resposta do programa - out
    const outResposta = document.getElementById('outResposta');



//iniciando programa
    function calcular () {
    //puxando valores
        let nome = inNome.value;
        let salBruto = Number(inSalBruto.value);

        /* let DependenteSim = checkDependeteSim.checked;
        let DependenteNao = checkDependeteNao.checked;
        let PensaoSim = checkPensaoSim.checked;
        let PensaoNao = checkPensaoNao.checked; */

    //validação para nome
        if(nome == "") {
            inNome.style.border = '2px solid #FF2B56';
            outValidacaoNomeHelp.textContent = 'Por favor, preencha corretamente o formulário...' ;           
            outValidacaoNomeIcon.classList.remove("ValidacaoNomeIcon");
        } 
    //validação para salário bruto
        if (salBruto <= 0  || salBruto == "" || isNaN(salBruto)) {
           inSalBruto.style.border = '2px solid #FF2B56';
           outValidacaoSalBrutoHelp.innerText = 'Por favor, preencha corretamente o salário bruto...\nExemplo: 1500,50';
           outValidacaoSalBrutoIcon.classList.remove("ValidacaoSalBrutoIcon")
        }

    }


    //funções de reset
    function resetNome() {
        inNome.style.border = 'none';
        outValidacaoBordaNome.style.border = '0.1px solid #dbdbdb';
        outValidacaoNomeHelp.textContent = '';
        outValidacaoNomeIcon.classList.add('ValidacaoNomeIcon');
    } 

    function resetSalBruto() {
        inSalBruto.style.border = 'none';
        outValidacaoBordaSalBruto.style.border = '0.1px solid #dbdbdb';
        outValidacaoSalBrutoHelp.textContent = '';
        outValidacaoSalBrutoIcon.classList.add('ValidacaoSalBrutoIcon');
    }

    function checkSimDependente() {
        DependenteDisplay.classList.remove('checkDisplayDependente');
        checkDependenteNao.checked = "";
    } 

    function checkNaoDependente() {
        DependenteDisplay.classList.add('checkDisplayDependente');
        checkDependenteSim.checked = "";
    }

    function checkSimPensao() {
        PensaoDisplay.classList.remove('checkDisplayPensao');
        checkPensaoNao.checked = "";
    }

    function checkNaoPensao() {
        PensaoDisplay.classList.add('checkDisplayPensao');
        checkPensaoSim.checked = "";
    }





    function Limpar() {
        inNome.value = '';
        inSalBruto.value = '';
    }
    //acionamento de eventos
        //botões
            btCalcular.addEventListener("click", calcular);
            btLimpar.addEventListener("click", Limpar);
        //input
            inNome.addEventListener("click", resetNome);
            inSalBruto.addEventListener("click", resetSalBruto);
        //check
             checkDependenteSim.addEventListener("click", checkSimDependente)
             checkDependenteNao.addEventListener("click", checkNaoDependente)
             checkPensaoSim.addEventListener("click", checkSimPensao)
             checkPensaoNao.addEventListener("click", checkNaoPensao)
            /* 
            obs:    checkDependenteSim - variável referenciada
                    checkSimDependente - função 
            */




