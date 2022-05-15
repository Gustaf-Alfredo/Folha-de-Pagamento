    let inNome = document.getElementById('inNome');
    let inSalBruto = document.getElementById('inSalBruto');
    let inCheckSim = document.getElementById('inCheckSim');
    let inCheckNao = document.getElementById('inCheckNao');
    let inDependente = document.getElementById('inDependente');
    //let inOpcao = document.getElementById('inOpcao').value; //exceção 
    let outNome = document.getElementById('outNome')
    let outDescIRPF = document.getElementById('outDescIRPF')
    let outDescINSS = document.getElementById('outDescINSS')
    let outDescTotal = document.getElementById('outDescTotal')
    let outSalLiq = document.getElementById('outSalLiq')
    let outBaseIRPF = document.getElementById('outBaseIRPF')
    

function CalcDesconto () {
    //referências
    

    //puxando valores
    let Nome = inNome.value;
    let SalBruto = Number(inSalBruto.value);
    let Sim = inCheckSim.checked;
    let Nao = inCheckNao.checked;
    let Dependente = inDependente.value;
    //console.log(Sim)
    
    //
    let DescINSS;
    let DescIRPF;
    let DescTotal;
    let SalLiq;
    let ResultadoDescINSS;
    let DescDependete = (189.59 * Dependente);

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
        clear()
        return;
    } 
    
    if (SalBruto > 0 && SalBruto <= 1212.01) {
        DescINSS = SalBruto * taxa1INSS;       
        console.log(Nome)
        ResultadoDescINSS = SalBruto - DescINSS;

        //console.log(DescINSS)

        window.alert('faixa 1')

            if (ResultadoDescINSS > 0  && ResultadoDescINSS <= 1903.98) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`
                outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)'
                outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
                DescTotal = DescINSS;
                //console.log(DescTotal)
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${(SalBruto-DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                //console.log(ResultadoDescINSS)
            }
        return
    } 
    
    if (SalBruto > 1212.01 && SalBruto <= 2427.35) {
        window.alert('faixa 2')
        DescINSS = SalBruto * taxa2INSS;

        if (Sim === true) {
            ResultadoDescINSS = (SalBruto - DescINSS) - DescDependete;
            if (ResultadoDescINSS > 0  && ResultadoDescINSS <= 1903.98) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}.`;
                outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)';
                outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                DescTotal = DescINSS;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                //console.log(ResultadoDescINSS)
            } else if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}.`;
                DescIRPF = ResultadoDescINSS * 0.075;
                outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                DescTotal = DescINSS + DescIRPF;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            }

            return
        } 

        else {
            ResultadoDescINSS = SalBruto - DescINSS;
        //console.log(ResultadoDescINSS)

                if (ResultadoDescINSS > 0  && ResultadoDescINSS <= 1903.98) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}.`;
                    outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)';
                    outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    DescTotal = DescINSS;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    //console.log(ResultadoDescINSS)
                } else if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}.`;
                    DescIRPF = ResultadoDescINSS * 0.075;
                    outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                    DescTotal = DescINSS + DescIRPF;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                }
        }
        return
    }
    
    if (SalBruto > 2427.35 && SalBruto <= 3641.03) {
        window.alert('faixa 3')
        DescINSS = SalBruto * taxa3INSS;

        if (Sim === true) {
            ResultadoDescINSS = (SalBruto - DescINSS) - DescDependete;
            /* console.log(ResultadoDescINSS)
            console.log(SalBruto)
            console.log(DescINSS)
            console.log(DescDependete) */

            if (ResultadoDescINSS > 0 && ResultadoDescINSS <= 1903.98) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)';
                outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            }

            else if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                DescIRPF = (ResultadoDescINSS * 0.075) - Deducao1IRPF;
                outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                DescTotal = DescINSS + DescIRPF;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            } else if (ResultadoDescINSS > 2826.68 && ResultadoDescINSS <= 3751.06) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                DescIRPF = (ResultadoDescINSS * 0.15) - Deducao2IRPF;
                outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF)}`;
                DescTotal = DescINSS + DescIRPF;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            }

            return
        } 
        
        
        else {
            ResultadoDescINSS = SalBruto - DescINSS;


                if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                    DescIRPF = (ResultadoDescINSS * 0.075) - Deducao1IRPF;
                    outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    DescTotal = DescINSS + DescIRPF;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                } else if (ResultadoDescINSS > 2826.68 && ResultadoDescINSS <= 3751.06) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                    DescIRPF = (ResultadoDescINSS * 0.15) - Deducao2IRPF;
                    outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF)}`;
                    DescTotal = DescINSS + DescIRPF;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                }
                

                return
        }
        
        return
    }
    
    if (SalBruto > 3641.03 && SalBruto <= 7087.22) {
        window.alert('faixa 4');
        DescINSS = SalBruto * taxa4INSS;

        if (Sim === true) {
            ResultadoDescINSS = (SalBruto - DescINSS) - DescDependete;


            if (ResultadoDescINSS > 0 && ResultadoDescINSS <= 1903.98) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
                outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)';
                outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            }

            else if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
                DescIRPF = (ResultadoDescINSS * 0.075) - Deducao1IRPF;
                outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                DescTotal = DescINSS + DescIRPF;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            } 

            else if (ResultadoDescINSS > 2826.68 && ResultadoDescINSS <= 3751.06) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
                DescIRPF = (ResultadoDescINSS * 0.15) - Deducao2IRPF;
                outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF)}`;
                DescTotal = DescINSS + DescIRPF;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            } else if (ResultadoDescINSS > 3751.06 && ResultadoDescINSS <= 4664.68) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
                DescIRPF = (ResultadoDescINSS * 0.225) - Deducao3IRPF;
                outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                DescTotal = DescINSS + DescIRPF;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            } else if (ResultadoDescINSS > 4664.68) {
                outNome.textContent = `Nome: ${Nome}`
                outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
                DescIRPF = (ResultadoDescINSS * 0.275) - Deducao4IRPF;
                outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                DescTotal = DescINSS + DescIRPF;
                outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            }

            return
        }

        else {
            ResultadoDescINSS = SalBruto - DescINSS;

        if (ResultadoDescINSS > 2826.68 && ResultadoDescINSS <= 3751.06) {
            outNome.textContent = `Nome: ${Nome}`
            outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
            DescIRPF = (ResultadoDescINSS * 0.15) - Deducao2IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF)}`;
            DescTotal = DescINSS + DescIRPF;
            outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
            outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${(SalBruto-DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        } else if (ResultadoDescINSS > 3751.06 && ResultadoDescINSS <= 4664.68) {
            outNome.textContent = `Nome: ${Nome}`
            outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
            DescIRPF = (ResultadoDescINSS * 0.225) - Deducao3IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            DescTotal = DescINSS + DescIRPF;
            outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
            outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${(SalBruto-DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        } else if (ResultadoDescINSS > 4664.68) {
            outNome.textContent = `Nome: ${Nome}`
            outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`;
            DescIRPF = (ResultadoDescINSS * 0.275) - Deducao4IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            DescTotal = DescINSS + DescIRPF;
            outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
            outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${(SalBruto-DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

            return
        }
        }
        

        return
    }
    
    if (SalBruto > 7087.22)   {
        window.alert('faixa 4.2')
        DescINSS = teto4INSS * taxa4INSS;
      

        if (Sim === true) {
            ResultadoDescINSS = (SalBruto - DescINSS) - DescDependete;
            if (ResultadoDescINSS <= 0) {
                window.alert('[ERRO] Número de dependentes excedido')
                clear()
            } else {

                if (ResultadoDescINSS > 0 && ResultadoDescINSS <= 1903.98) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                    outDescIRPF.textContent = 'Desconto do IRPF(R$): 0,00 (Isento)';
                    outDescTotal.textContent = `Desconto Total(R$): ${DescINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                }
               
    
                else if (ResultadoDescINSS > 1903.98 && ResultadoDescINSS <= 2826.68) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                    DescIRPF = (ResultadoDescINSS * 0.075) - Deducao1IRPF;
                    outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    DescTotal = DescINSS + DescIRPF;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    
                
                } 
    
                else if (ResultadoDescINSS > 2826.68 && ResultadoDescINSS <= 3751.06) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                    DescIRPF = (ResultadoDescINSS * 0.15) - Deducao2IRPF;
                    outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    DescTotal = DescINSS + DescIRPF;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                } 
                
                else if (ResultadoDescINSS > 3751.06 && ResultadoDescINSS <= 4664.68) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                    DescIRPF = (ResultadoDescINSS * 0.225) - Deducao3IRPF;
                    outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    DescTotal = DescINSS + DescIRPF;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                }
    
                else if (ResultadoDescINSS > 4664.68) {
                    outNome.textContent = `Nome: ${Nome}`
                    outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
                    DescIRPF = (ResultadoDescINSS * 0.275) - Deducao4IRPF;
                    outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    DescTotal = DescINSS + DescIRPF;
                    outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
                    outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${((SalBruto-DescINSS)-DescDependete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                }
            }
            

            return
        }

        else {
            ResultadoDescINSS = SalBruto - DescINSS;

        if (ResultadoDescINSS > 4664.68) {
            outNome.textContent = `Nome: ${Nome}`
            outDescINSS.textContent = `Desconto do INSS(R$): ${DescINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
            DescIRPF = (ResultadoDescINSS * 0.275) - Deducao4IRPF;
            outDescIRPF.textContent = `Desconto do IRPF(R$): ${DescIRPF.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            outDescTotal.textContent = `Desconto Total(R$): ${(DescINSS + DescIRPF).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            DescTotal = DescINSS + DescIRPF;
            outSalLiq.textContent = `Salário Líquido(R$): ${(SalBruto - DescTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
            outBaseIRPF.textContent = `Base de Cálculo do IRPF(R$): ${(SalBruto-DescINSS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

            return
        }
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
        inDependente.value = "";
        outBaseIRPF.textContent = "";
        inCheckSim.checked = "";
        inCheckNao.checked = "";
}

var btClear = document.getElementById('btClear');
btClear.addEventListener("click", clear)
