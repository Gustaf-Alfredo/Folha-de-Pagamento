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
    const outFuncionario = document.getElementById('outFuncionario');
    const outDescontosIndividual = document.getElementById('outDescontosIndividual');

    //criação de vetor global
    let Funcionarios = []

//iniciando programa
   function calcular () {
    //puxando valores
        let nome = inNome.value;
        let salBruto = Number(inSalBruto.value);
        let dependente = Number(inDependente.value);
        let pensao = Number(inPensao.value);
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
        } else {        
            //recebendo informação de checkmark
            let Dependentecheck = checkDependenteSim.checked;
            let Pensaocheck = checkPensaoSim.checked;
            //enviando dados para o vetor => nome e salBruto
            Funcionarios.push({funcionario: nome, salario: salBruto, dependente: Dependentecheck, numeroDependente: dependente, pensao: Pensaocheck,valorPensao: pensao});           
            checkNaoDependente()
            checkNaoPensao();          
            folhaIndividual();
            inNome.focus();         
            let INSSdescontoVariavel = INSSdesconto(1212.01, 2427.35, 3641.03, 7087.22,0.075,0.09,0.12,0.14);//tetoINSS1 à tetoINSS4 e taxaINSS1 à taxaINSS4         
            /*
            taxas do INSS
                taxaINSS1 = 0.075
                taxaINSS2 = 0.09
                taxaINSS3 = 0.12
                taxaINSS4 = 0.14 
            */
            /* console.log(Funcionarios);  */  
            return salBruto       
        }

    } //FIM da função Calcular
   
        /* outDescontosIndividual.classList.remove('displayDescontosIndividuais')
                outDescontosIndividual.textContent = `Desconto INSS(R$): ${descontoINSS}` */
        //valores de tetoINSS

    //}


     function folhaIndividual() {
        outFuncionario.classList.remove('displayVetorFuncionario');
        let FichaIndividual = '';
        for(let i = 0; i < Funcionarios.length; i++) {
            lista = `Ficha individual\n
            Nome: ${Funcionarios[i].funcionario}\n
            Salário: ${Funcionarios[i].salario}\n
            Possui dependentes: ${Funcionarios[i].dependente}\n
            Paga pensão: ${Funcionarios[i].valorPensao}`;
        }
        outFuncionario.innerText = lista;
                                   
    } 
    //funções de reset
        //nome
            function resetNome() {
                inNome.style.border = 'none';
                outValidacaoBordaNome.style.border = '0.1px solid #dbdbdb';
                outValidacaoNomeHelp.textContent = '';
                outValidacaoNomeIcon.classList.add('ValidacaoNomeIcon');
            } 
        //SalBruto
            function resetSalBruto() {
                inSalBruto.style.border = 'none';
                outValidacaoBordaSalBruto.style.border = '0.1px solid #dbdbdb';
                outValidacaoSalBrutoHelp.textContent = '';
                outValidacaoSalBrutoIcon.classList.add('ValidacaoSalBrutoIcon');
            }
    //checkmark(função) - Dependetes e Pensao
        function checkSimDependente() {
            DependenteDisplay.classList.remove('checkDisplayDependente');
            checkDependenteNao.checked = "";
            inDependente.focus();
        } 

        function checkNaoDependente() {
            DependenteDisplay.classList.add('checkDisplayDependente');
            checkDependenteSim.checked = "";
        }

        function checkSimPensao() {
            PensaoDisplay.classList.remove('checkDisplayPensao');
            checkPensaoNao.checked = "";
            inPensao.focus();
        }

        function checkNaoPensao() {
            PensaoDisplay.classList.add('checkDisplayPensao');
            checkPensaoSim.checked = "";
        }

    //função de limpar o formulário

    function Limpar() {
        inNome.value = '';
        inSalBruto.value = '';
        inDependente.value = '';
        inPensao.value = ''; 
    }
    //funções de cálculos
        //Cálcuco INSS
            function INSSdesconto (tetoINSS1, tetoINSS2, tetoINSS3, tetoINSS4,taxaINSS1,taxaINSS2,taxaINSS3,taxaINSS4) {
                let descontoINSS = Number();
                let SalBrutoGlobal = inSalBruto.value;
                console.log(SalBrutoGlobal)
                
                //validação
                    if (SalBrutoGlobal < tetoINSS1) {
                        descontoINSS = SalBrutoGlobal * taxaINSS1
                    } else 
                    if (SalBrutoGlobal >= tetoINSS1 && SalBrutoGlobal < tetoINSS2) {
                        descontoINSS = SalBrutoGlobal * taxaINSS2
                    } else
                    if (SalBrutoGlobal >= tetoINSS2 && SalBrutoGlobal < tetoINSS3) {
                        descontoINSS = SalBrutoGlobal * taxaINSS3
                    } else
                    if (SalBrutoGlobal >= tetoINSS3 && SalBrutoGlobal < tetoINSS4) {
                        descontoINSS = SalBrutoGlobal * taxaINSS4               
                    } else
                    if (SalBrutoGlobal >= tetoINSS4) {
                        descontoINSS = tetoINSS4 * taxaINSS4              
                    }
                    //INSSdesconto - função
                    //descontoINSS - variável
                    return descontoINSS
            }

            //Cálculo IRPF
            function IRPFdesconto() {
                let INSSdescontoVariavel = INSSdesconto(1212.01, 2427.35, 3641.03, 7087.22,0.075,0.09,0.12,0.14);//tetoINSS1 à tetoINSS4 e taxaINSS1 à taxaINSS4 

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




