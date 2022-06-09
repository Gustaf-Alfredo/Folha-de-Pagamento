//referências

    //entrada de informações - in
    const inNome = document.getElementById('inNome');
    console.log("🚀 ~ file: app.js ~ line 5 ~ inNome", inNome)
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
        console.log("🚀 ~ file: app.js ~ line 27 ~ calcular ~ nome", nome)
        let salBruto = Number(inSalBruto.value);
        if(nome == "") {
            //método para mudar o placeholder
            document.getElementsByName('nomePlaceholder')[0].placeholder='Por favor preencha o formulário';
        }

    }
    
    btCalcular.addEventListener("click", calcular);

