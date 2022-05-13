

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
    let DescIRPF;
    let DescTotal;
    let SalLiq;
    let SalMin = Number(1212);

    const teto1INSS = Number(1212);
    const teto2INSS = Number(2427.35);
    const teto3INSS = Number(3641.03);
    const teto4INSS = Number(7087.22);

    const taxa1INSS = Number(0.075);  //7,5%
    const taxa2INSS = Number(0.09);   //9%
    const taxa3INSS = Number(0.12);   //12%
    const taxa4INSS = Number(0.14);   //14%


    const teto1IRPF = Number(1903.38);
    const teto2IRPF = Number(2826.65);
    const teto3IRPF = Number(3751.05);
    const teto4IRPF = Number(4664.68);
    
    const taxa1RPF = Number(142.80);
    const taxa2RPF = Number(354.80);
    const taxa3RPF = Number(636.13);
    const taxa4RPF = Number(869.36);


    //lógica

    switch (inOpcao) {
        case '1':
            DescINSS = (teto1INSS * taxa1INSS) + ((SalBruto - teto1INSS)*taxa2INSS);
            outNome.textContent = `Nome: ${Nome}.`;
            //console.log(Nome)
            outDescFixoINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toFixed(2)}`;
        break;
        case '2':
            DescINSS = (teto1INSS * taxa1INSS) + ((teto2INSS-teto1INSS)*taxa2INSS) + ((SalBruto - teto2INSS)*taxa3INSS);
            outNome.textContent = `Nome: ${Nome}.`;
           // console.log(Nome)
            outDescFixoINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toFixed(2)}`;
        break;
        case '3':
            DescINSS = (teto1INSS*taxa1INSS) + ((teto2INSS-teto1INSS)*taxa2INSS) + ((teto3INSS-teto2INSS)*taxa3INSS) + 
            ((SalBruto - teto3INSS)*taxa4INSS);
            outNome.textContent = `Nome: ${Nome}.`;
           // console.log(Nome)
            outDescFixoINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toFixed(2)}`;
        break;
        case '4':
            DescINSS = (teto1INSS*taxa1INSS) + ((teto2INSS-teto1INSS)*taxa2INSS) + ((teto3INSS-teto2INSS)*taxa3INSS) + 
            ((teto4INSS-teto3INSS)* taxa4INSS ) + ((SalBruto - teto4INSS)*taxa4INSS);
            outNome.textContent = `Nome: ${Nome}.`;
            //console.log(Nome)
            outDescFixoINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toFixed(2)}`;
        break;
    }
   
        
        /* DescINSS = (SalMin * Number(0.075)) + ((1500 - 1212)*0.09); */
       
    if (SalBruto > 0 && SalBruto <= teto1IRPF) {
       outDescFixoIRPF.textContent = `Desconto do IRPF(R$): Isento`
    }  else if (SalBruto > teto1IRPF && SalBruto <= teto2IRPF) {
        DescIRPF = taxa1RPF;
        outDescFixoIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toFixed(2)}`
    }  else if (SalBruto > teto2IRPF && SalBruto <= teto3INSS) {
        DescIRPF = taxa2RPF;
        outDescFixoIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toFixed(2)}`
    }  else if (SalBruto > teto3IRPF && SalBruto <= teto4IRPF) {
        DescIRPF = taxa3RPF;
        outDescFixoIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toFixed(2)}`
    }  else if (SalBruto > teto4IRPF) {
        DescIRPF = taxa4RPF;
        outDescFixoIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toFixed(2)}`
    }
    
    DescTotal = DescINSS + DescIRPF;
    SalLiq =   SalBruto - DescTotal;
    outDescTotal.textContent = `Desconto Total(R$): ${DescTotal.toFixed(2)}`;
    console.log(DescTotal)
    outSalLiq.textContent = `Salário Líquido(R$): ${SalLiq.toFixed(2)}`
    
}

var btCalcIncome = document.getElementById('btCalcIncome');
btCalcIncome.addEventListener("click", CalcDesconto)

