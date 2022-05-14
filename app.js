    let inNome = document.getElementById('inNome');
    let inSalBruto = document.getElementById('inSalBruto');
    //let inOpcao = document.getElementById('inOpcao').value; //exceção 
    let outNome = document.getElementById('outNome')
    let outDescIRPF = document.getElementById('outDescIRPF')
    let outDescINSS = document.getElementById('outDescINSS')
    let outDescTotal = document.getElementById('outDescTotal')
    let outSalLiq = document.getElementById('outSalLiq')

function CalcDesconto () {
    //referências
    

    //puxando valores
    let Nome = inNome.value;
    let SalBruto = Number(inSalBruto.value);
    
    //
    let DescINSS;
    let DescIRPF;
    let DescTotal;
    let SalLiq;
    let ResultadoDescINSS;

    const teto1INSS = Number(1212.01);
    const teto2INSS = Number(2427.35);
    const teto3INSS = Number(3641.03);
    const teto4INSS = Number(7087.22);

    const taxa1INSS = Number(0.075);  //7,5%
    const taxa2INSS = Number(0.09);   //9%
    const taxa3INSS = Number(0.12);   //12%
    const taxa4INSS = Number(0.14);   //14%

    const Deducao1IRPF = Number(142.80)
    const Deducao2IRPF = Number(354.80)
    const Deducao3IRPF = Number(636.13)
    const Deducao4IRPF = Number(869.36)

    //

    if (SalBruto <= 0 || isNaN(SalBruto) || SalBruto == null) {
        window.alert('[ERRO] Valor inválido');
        return;
    } 
    
    if (SalBruto > 0 && SalBruto <= 1212.01) {
        DescINSS = SalBruto * taxa1INSS;
        outNome.textContent = `Nome: ${Nome}`
        console.log(Nome)
        outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`
        ResultadoDescINSS = SalBruto - DescINSS;

        //console.log(DescINSS)

        window.alert('faixa 1')

        if (ResultadoDescINSS > 0  && ResultadoDescINSS <= 1903.98) {
            outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)'
            outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            //console.log(ResultadoDescINSS)
        }
        return
    } 
    
    if (SalBruto > 1212.01 && SalBruto <= 2427.35) {
        window.alert('faixa 2')
        DescINSS = SalBruto * taxa2INSS;
        outNome.textContent = `Nome: ${Nome}`
        outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}.`;
        ResultadoDescINSS = SalBruto - DescINSS;
        //console.log(ResultadoDescINSS)

        if (ResultadoDescINSS > 0  && ResultadoDescINSS <= 1903.98) {
            outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)';
            outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            //console.log(ResultadoDescINSS)
        } else if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
            DescIRPF = ResultadoDescINSS * 0.075;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${DescINSS + DescIRPF}`;
        }
        return
    }
    
    if (SalBruto > 2427.35 && SalBruto <= 3641.03) {
        window.alert('faixa 3')
        DescINSS = SalBruto * taxa3INSS;
        outNome.textContent = `Nome: ${Nome}`
        outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
        ResultadoDescINSS = SalBruto - DescINSS;


        if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
            DescIRPF = (ResultadoDescINSS * 0.075) - Deducao1IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        } else if (ResultadoDescINSS > 2826.68 && ResultadoDescINSS <= 3751.06) {
            DescIRPF = (ResultadoDescINSS * 0.15) - Deducao2IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF)}`;
        }
        return
    }
    
    if (SalBruto > 3641.03 && SalBruto <= 7087.22) {
        window.alert('faixa 4')
        DescINSS = SalBruto * taxa4INSS;
        outNome.textContent = `Nome: ${Nome}`
        outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
        ResultadoDescINSS = SalBruto - DescINSS;

        if (ResultadoDescINSS > 2826.68 && ResultadoDescINSS <= 3751.06) {
            DescIRPF = (ResultadoDescINSS * 0.15) - Deducao2IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF)}`;
        } else if (ResultadoDescINSS > 3751.06 && ResultadoDescINSS <= 4664.68) {
            DescIRPF = (ResultadoDescINSS * 0.225) - Deducao3IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        } else if (ResultadoDescINSS > 4664.68) {
            DescIRPF = (ResultadoDescINSS * 0.275) - Deducao4IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        }

        return
    }
    
    if (SalBruto > 7087.22)   {
        window.alert('faixa 4.2')
        DescINSS = teto4INSS * taxa4INSS;
        outNome.textContent = `Nome: ${Nome}`
        outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
        ResultadoDescINSS = SalBruto - DescINSS;

        if (ResultadoDescINSS > 4664.68) {
            DescIRPF = (ResultadoDescINSS * 0.275) - Deducao4IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        }
        return
    }

    let BaseIRPF = ResultadoDescINSS.value;
    console.log(ResultadoDescINSS)

    

    //console.log(ResultadoDescINSS)
}

var btCalcIncome = document.getElementById('btCalcIncome');
btCalcIncome.addEventListener("click", CalcDesconto)

function clear () {
        inNome.value = "";
        inSalBruto.value = "";
        outDescIRPF.textContent = "";
        outDescINSS.textContent = "";
        outDescTotal.textContent = "";
        outNome.textContent = "";
        outSalLiq.textContent = "";
}

var btClear = document.getElementById('btClear');
btClear.addEventListener("click", clear)
