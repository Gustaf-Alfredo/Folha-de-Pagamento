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
    const btListar = document.getElementById('btListar');

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
    const outFuncionarios = document.getElementById('outFuncionarios');
    const outDescontosIndividual = document.getElementById('outDescontosIndividual');
    const outDisplayControlFolha = document.getElementById('outDisplayControlFolha');

    //criação de vetor global
    let Funcionarios = []

//iniciando programa

 function calcular () {
    //valores de escopo maior
    let nome = inNome.value;
    let salBruto = Number(inSalBruto.value);
    let dependente = Number(inDependente.value);
    let pensao = Number(inPensao.value);
    let descontoINSS = Number();
    let descontoIRPF = Number();
    let SalBrutoGlobalDescINSS = Number()
     //funções de cálculos
            //Cálculo INSS
            function INSSdesconto (tetoINSS1, tetoINSS2, tetoINSS3, tetoINSS4,/* */taxaINSS1,taxaINSS2,taxaINSS3,taxaINSS4) {
                //validação
                    if (salBruto < tetoINSS1) {
                        descontoINSS = salBruto * taxaINSS1
                    } else 
                    if (salBruto >= tetoINSS1 && salBruto < tetoINSS2) {
                        descontoINSS = salBruto * taxaINSS2
                    } else
                    if (salBruto >= tetoINSS2 && salBruto < tetoINSS3) {
                        descontoINSS = salBruto * taxaINSS3
                    } else
                    if (salBruto >= tetoINSS3 && salBruto < tetoINSS4) {
                        descontoINSS = salBruto * taxaINSS4               
                    } else
                    if (salBruto >= tetoINSS4) {
                        descontoINSS = tetoINSS4 * taxaINSS4              
                    } return descontoINSS
                    //INSSdesconto - função
                    //descontoINSS - variável
            }

            //Cálculo IRPF
            function IRPFdesconto(tetoIRPF1, tetoIRPF2, tetoIRPF3, tetoIRPF4,/* */ taxaIRPF1, taxaIRPF2, taxaIRPF3, taxaIRPF4,/* */deducoesIRPF1,deducoesIRPF2,deducoesIRPF3,deducoesIRPF4,/* */descUnitarioDependente) { 
                //validação
                SalBrutoGlobalDescINSS = (salBruto - descontoINSS) - (descUnitarioDependente * dependente) - pensao;
                console.log(SalBrutoGlobalDescINSS)
                    if( SalBrutoGlobalDescINSS < tetoIRPF1) {
                        descontoIRPF = 0
                    } else 
                    if ( SalBrutoGlobalDescINSS >= tetoIRPF1 &&  SalBrutoGlobalDescINSS < tetoIRPF2) {    
                        descontoIRPF = (SalBrutoGlobalDescINSS * taxaIRPF1) - deducoesIRPF1
                    } else
                    if (SalBrutoGlobalDescINSS >= tetoIRPF2 && SalBrutoGlobalDescINSS < tetoIRPF3) {                      
                        descontoIRPF = (SalBrutoGlobalDescINSS * taxaIRPF2) - deducoesIRPF2
                    } else 
                    if (SalBrutoGlobalDescINSS >= tetoIRPF3 && SalBrutoGlobalDescINSS < tetoIRPF4) {                      
                        descontoIRPF = (SalBrutoGlobalDescINSS * taxaIRPF3) - deducoesIRPF3
                    } else
                    if (SalBrutoGlobalDescINSS >= tetoIRPF4) {                 
                        descontoIRPF = (SalBrutoGlobalDescINSS * taxaIRPF4) - deducoesIRPF4                       
                    } 
                    return descontoIRPF
                    //IRPFdesconto - função
                    //descontoIRPF - variável
            }
    let INSSdescontoVariavel = INSSdesconto(1212.01, 2427.35, 3641.03, 7087.22,/**/0.075,0.09,0.12,0.14);
    //tetoINSS1 à tetoINSS4 //taxaINSS1 à taxaINSS4 //
    let IRPFdescontoVariavel = IRPFdesconto(1903.98, 2826.66,3751.06,4664.68,/**/0.075,0.15,0.225,0.275,/**/142.8,354.8,636.13,869.36,/* */189.59);
    //tetoIRPF1 à tetoIRPF4 // taxaIRPF1 à taxaIRPF4 // deducoesIRPF1 à deducoesIRPF4 // desconto unitário de dependente


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
        } else  {        
            //recebendo informação de checkmark
            let Dependentecheck = checkDependenteSim.checked;
            let Pensaocheck = checkPensaoSim.checked;
            //enviando dados para o vetor => nome e salBruto
            Funcionarios.push({funcionario: nome, salario: salBruto, dependente: Dependentecheck, numeroDependente: dependente, pensao: Pensaocheck,valorPensao: pensao, descontoINSS: descontoINSS, descontoIRPF: descontoIRPF});  
            console.log(Funcionarios)         
            checkNaoDependente()
            checkNaoPensao();          
            folhaIndividual();
            inNome.focus();   
            ResetePreenchimento()  
    }
        function folhaIndividual() {
            outFuncionario.classList.remove('displayVetorFuncionario');
            outDisplayControlFolha.classList.add('formatacaoBotao');
            let FichaIndividual = '';
            for(let i = 0; i < Funcionarios.length; i++) {
                FichaIndividual = `Ficha individual\n
                Nome: ${Funcionarios[i].funcionario}\n
                Salário: ${(Funcionarios[i].salario).toFixed(2)}\n
                Possui dependentes: ${Funcionarios[i].dependente}\n
                Paga pensão: ${Funcionarios[i].valorPensao}\n
                Desconto do INSS(R$): ${(Funcionarios[i].descontoINSS).toFixed(2)}\n
                Desconto IRPF(R$): ${(Funcionarios[i].descontoIRPF).toFixed(2)}`;
                
            }
            outFuncionario.innerText = FichaIndividual;
                                       
        } 

        function folhaCompleta() {
            outFuncionarios.classList.remove('displayVetorFuncionarios');
            let ListaFuncionarios = '';
            for (let i = 0; i < Funcionarios.length; i++) {
                ListaFuncionarios += `Ficha individual\n
                Nome: ${Funcionarios[i].funcionario}\n
                Salário: ${(Funcionarios[i].salario).toFixed(2)}\n
                Possui dependentes: ${Funcionarios[i].dependente}\n
                Paga pensão: ${Funcionarios[i].valorPensao}\n
                Desconto do INSS(R$): ${(Funcionarios[i].descontoINSS).toFixed(2)}\n
                Desconto IRPF(R$): ${(Funcionarios[i].descontoIRPF).toFixed(2)}\n\n`;
            }

            //validação para o vetor
            if(Funcionarios.length == 1) {
                window.alert('Registre mais fichas para poder listar...')
            } else {
                outFuncionarios.innerText = ListaFuncionarios;
            }
            
        }


        //acionamento da folhaCompleta
        btListar.addEventListener("click", folhaCompleta);
 } //FIM  DA FUNCAO CALCULAR




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
        Funcionarios = '';
    }

    function ResetePreenchimento() {
        inNome.value = '';
        inSalBruto.value = '';
        inDependente.value = '';
        inPensao.value = ''; 
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




