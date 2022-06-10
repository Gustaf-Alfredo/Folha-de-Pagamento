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

    //resposta do programa
    const outResposta = document.getElementById('outResposta');

//iniciando programa
    function calcular () {
    //puxando valores
        let nome = inNome.value;
        let salBruto = Number(inSalBruto.value);
        if(nome == "") {
            //método para mudar o placeholder
             /* document.getElementsByName('ValidacaoNome').style.background = '2px solid blue'; */
             inNome.style.border = '2px solid #FF2B56'
             
        }

    }
    
    btCalcular.addEventListener("click", calcular);

