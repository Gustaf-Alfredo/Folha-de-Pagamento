

function CalcDesconto () {
    //referências
    let inNome = document.getElementById('inNome');
    let inSalBruto = document.getElementById('inSalBruto');
    let inOpcao = document.getElementById('inOpcao').value; //exceção
    let outDescFixoINSS = document.getElementById('outDescFixoINSS')
    let outNome = document.getElementById('outNome')
    let outDescFixoIRPF = document.getElementById('outDescFixoIRPF')
    let outDescTotal = document.getElementById('outDescTotal')
    let outSalLiq = document.getElementById('outSalLiq')

    //puxando valores
    let Nome = inNome.value;
    let SalBruto = Number(inSalBruto.value);
    
    //
    let DescINSS;
    let SalMin = Number(1212);

    const teto1INSS = Number(1212);
    const teto2INSS = Number(2427.35);
    const teto3INSS = Number(3641.03);
    const teto4INSS = Number(7087.22);

    const taxa1INSS = Number(0.075);  //7,5%
    const taxa2INSS = Number(0.09);   //9%
    const taxa3INSS = Number(0.12);   //12%
    const taxa4INSS = Number(0.14);   //14%

    //lógica

    switch (inOpcao) {
        case '1':
            DescINSS = (SalMin * taxa1INSS) + ((SalBruto - teto1INSS)*taxa2INSS);
            outNome.textContent = `Nome: ${Nome}.`
            console.log(Nome)
            outDescFixoINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toFixed(2)}`;
        break;
    }
   
        
        /* DescINSS = (SalMin * Number(0.075)) + ((1500 - 1212)*0.09); */
       
       
    

    
}

var btCalcIncome = document.getElementById('btCalcIncome');
btCalcIncome.addEventListener("click", CalcDesconto)

