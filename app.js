
function CalcIncome() {
    
    //criando referências

    let inNome = document.getElementById('inNome');
    let inSalBruto = document.getElementById('inSalBruto');
    
    let btCalcIncome = document.getElementById('btCalcIncome');
    let btClear = document.getElementById('btClear');

    let outNome = document.getElementById('outNome')
    let outSalBruto = document.getElementById('outSalBruto')
    let outDescFixoINSS = document.getElementById('outDescFixoINSS');
    let outDescFixoIRPF = document.getElementById('outDescFixoIRPF');
    let outDescTotal = document.getElementById('outDescTotal');
    let outSalLiq = document.getElementById('outSalLiq');
    


  //captando dados 
    let Nome = inNome.value;
    let SalBruto = Number(inSalBruto.value);
    
      //constantes - INSS

    const teto1INSS = Number(1212);
    const teto2INSS = Number(2427.35);
    const teto3INSS = Number(3641.03);
    const teto4INSS = Number(7087.22);

    const taxa1INSS = Number(0.075);  //7,5%
    const taxa2INSS = Number(0.09);   //9%
    const taxa3INSS = Number(0.12);   //12%
    const taxa4INSS = Number(0.14);   //14%

    var DescFixo1INSS = (teto1INSS*taxa1INSS);
    var DescFixo2INSS = (teto2INSS-teto1INSS)*taxa2INSS;
    var DescFixo3INSS = (teto3INSS-teto2INSS)*taxa3INSS;
    var DescFixo4INSS = (teto4INSS-teto3INSS)*taxa4INSS;

    //constantes - IRPF

    const teto1IRPF = Number(1903.98);
    const teto2IRPF = Number(2826.65);
    const teto3IRPF = Number(3751.05);
    const teto4IRPF = Number(4664.08);

    const taxa1IRPF = Number(0.075); //7,5%
    const taxa2IRPF = Number(0.15);  //15%
    const taxa3IRPF = Number(0.225); //22,5%
    const taxa4IRPF = Number(0.275); //27,5%

    var DescFixo1IRPF = teto1IRPF * taxa1IRPF;
    var DescFixo2IRPF = (teto2IRPF - teto1IRPF) * taxa2IRPF;
    var DescFixo3IRPF = (teto3IRPF - teto2IRPF) * taxa3IRPF;
    var DescFixo4IRPF = (teto4IRPF - teto3IRPF) * taxa4IRPF;

    //respota do programa
    outNome.textContent = `Nome: ${Nome}`

    //condição - INSS
    
    if (SalBruto <= 0 || SalBruto == NaN || SalBruto == null) {
      window.alert('Valor inválido')
    } 
    
      else if (SalBruto > 0 && SalBruto <= teto1INSS) {
      outDescFixoINSS.textContent = `Desconto INSS: R$ ${DescFixo1INSS.toFixed(2)}`;
    } 

        else if (SalBruto > teto1INSS && SalBruto <= teto2INSS) {
      outDescFixoINSS.textContent = `Desconto INSS: R$ ${DescFixo2INSS.toFixed(2)}`;
    } 
    
        else if (SalBruto > teto2INSS && SalBruto <= teto3INSS) {
      outDescFixoINSS.textContent = `Desconto INSS: R$ ${DescFixo3INSS.toFixed(2)}`;
    }   
        else if (SalBruto > teto3INSS && SalBruto <= teto4INSS) {
      outDescFixoINSS.textContent = `Desconto INSS: R$ ${DescFixo4INSS.toFixed(2)}`;
    } 
    
        else { // !!
      outDescFixoINSS.textContent = `Desconto INSS: R$ ${DescFixo4INSS.toFixed(2)}`;
    }

    //condição - IRPF
  
    if (SalBruto > 0 && SalBruto <= teto1IRPF ) {
      outDescFixoIRPF.textContent = `Desconto IRPF: R$ 0.00`;
    } 
    
        else if (SalBruto > teto1IRPF && SalBruto <= teto2IRPF) {
      outDescFixoIRPF.textContent = `Desconto IRPF: R$ ${DescFixo1IRPF.toFixed(2)}`;
    } 
    
        else if (SalBruto > teto2IRPF && SalBruto <= teto3IRPF) {
      outDescFixoIRPF.textContent = `Desconto IRPF: R$ ${DescFixo2IRPF.toFixed(2)}`;
    } 
    
        else if (SalBruto > teto3IRPF && SalBruto <= teto4IRPF) {
      outDescFixoIRPF.textContent = `Desconto IRPF: R$ ${DescFixo3IRPF.toFixed(2)}`;
    } 
    
        else if (SalBruto > teto4IRPF) {
      outDescFixoIRPF.textContent = `Desconto IRPF: R$ ${DescFixo4IRPF.toFixed(2)}`;
    }

    //condição - TOTAL

    
}

var btCalcIncome = document.getElementById('btCalcIncome')
btCalcIncome.addEventListener("click", CalcIncome)



function Limpar() {
    document.getElementById('outPerson').innerHTML = ""
    document.getElementById("inValue").value = 0;
     document.getElementById("outDescINSS").innerHTML = "";
    document.getElementById("outDescIRPF").innerHTML = "";
    document.getElementById("outDescTotal").innerHTML = "";
    document.getElementById("outSalLiq").innerHTML = "";
  }

var btClear = document.getElementById('btClear'); 
    btClear.addEventListener("click", Limpar);

