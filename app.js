var salarioBruto = null;
var descontoFixo = null;
var dentroFaixaSalario = null;
//var descontoIRPF = null;
//var descontoTotalINSS = null;
//var salarioDescINSS = null;
var parcelaDedutiva = 0;
//var descontoFaixa=null;
var taxaINSS=null;
var taxaIRPF=null;
var salarioLiquido=null;


//constantes - INSS

var teto1INSS = Number(1212);
var teto2INSS = Number(2427.35);
var teto3INSS = Number(3641.03);
var teto4INSS = Number(7087.22);

var taxa1INSS = Number(0.075);  //7,5%
var taxa2INSS = Number(0.09);   //9%
var taxa3INSS = Number(0.12);   //12%
var taxa4INSS = Number(0.14);   //14%

var descontoFixo1 = teto1INSS * taxa1INSS;
var descontoFixo2 = (teto2INSS - teto1INSS) * taxa2INSS;
var descontoFixo3 = (teto3INSS - teto2INSS) * taxa3INSS;
var descontoFixo4 = (teto4INSS - teto3INSS) * taxa4INSS;



//constantes - IRPF

var teto1IRPF = Number(1903.98);
var teto2IRPF = Number(2826.65);
var teto3IRPF = Number(3751.05);
var teto4IRPF = Number(4664.08);

var taxa1IRPF = Number(0.075); //7,5%
var taxa2IRPF = Number(0.15);  //9%
var taxa3IRPF = Number(0.225); //12%
var taxa4IRPF = Number(0.275); //14%

console.log(parcelaDedutiva1)

var parcelaDedutiva1 = teto1IRPF * taxa1IRPF;
var parcelaDedutiva2 = (teto2IRPF - teto1IRPF) * taxa2IRPF;
var parcelaDedutiva3 = (teto3IRPF - teto2IRPF) * taxa3IRPF;
var parcelaDedutiva4 = (teto4IRPF - teto3IRPF) * taxa4IRPF;


const SalMin = Number(1193.37)

function CalcIncome() {
    //criando referências
    let inName = document.getElementById('inName');
    let inValue = document.getElementById('inValue');
    
    let btCalcIncome = document.getElementById('btCalcIncome');
    let btClear = document.getElementById('btClear');

    let outDescINSS = document.getElementById('outDescINSS');
    let outDescIRPF = document.getElementById('outDescIRPF');
    let outDescTotal = document.getElementById('outDescTotal');
    let outSalLiq = document.getElementById('outSalLiq');
    let outPerson = document.getElementById('outPerson')

    //captando dados 
    let Name = inName.value;
    let Person = Name.value;
    let SalBruto = Number(inValue.value);
    


    //condição
    
  if (SalBruto <= teto1INSS) {
    descontoFixo = 0;
    dentroFaixaSalario = salarioBruto;
    taxaINSS = taxa1INSS;
  } else if (SalBruto > teto1INSS && SalBruto <= teto2INSS) {
    descontoFixo = descontoFixo1;
    dentroFaixaSalario = salarioBruto - teto1INSS;
    taxaINSS = taxa2INSS;
  } else if (SalBruto > teto2INSS && SalBruto <= teto3INSS) {
    descontoFixo = descontoFixo2;
    dentroFaixaSalario = SalBruto - teto2INSS;
    taxaINSS = taxa3INSS;
  } else if (SalBruto > teto3INSS && SalBruto <= teto4INSS) {
    descontoFixo = descontoFixo3;
    dentroFaixaSalario = SalBruto - teto3INSS;
    taxaINSS = taxa4INSS;
  } else {
    descontoFixo = descontoFixo4;
    dentroFaixaSalario = SalBruto - teto4INSS;
    taxaINSS = 0;
  }

    var  descontoFaixa = dentroFaixaSalario * taxaINSS;
    var descontoTotalINSS = descontoFixo + descontoFaixa;
    var salarioDescINSS = salarioBruto-descontoTotalINSS;

    if (salarioDescINSS <= teto1IRPF) {
        taxaIRPF = 0;
        parcelaDedutiva = 0;
      } else if (salarioDescINSS > teto1IRPF && salarioDescINSS <= teto2IRPF) {
        taxaIRPF = taxa1IRPF;
        parcelaDedutiva = parcelaDedutiva1;
      } else if (salarioDescINSS > teto2IRPF && salarioDescINSS <= teto3IRPF) {
        taxaIRPF = taxa2IRPF;
        parcelaDedutiva = parcelaDedutiva2;
      } else if (salarioDescINSS > teto3IRPF && salarioDescINSS <= teto4IRPF) {
        taxaIRPF = taxa3IRPF;
        parcelaDedutiva = parcelaDedutiva3;
      } else{
        taxaIRPF = taxa4IRPF;
        parcelaDedutiva = parcelaDedutiva4;
      }
      
        var descontoIRPF = salarioDescINSS * taxaIRPF - parcelaDedutiva;

        var descontoINSS=descontoTotalINSS;

        var descontoTotal=descontoINSS+descontoIRPF;
        salarioLiquido = salarioBruto-descontoTotal;


        outPerson.textContent = `${Person}`
        outDescINSS.textContent = `Desconoto INSS: $` + descontoINSS.toFixed(2);

        outDescIRPF.textContent = `Desconto IRPF: R$` + descontoIRPF.toFixed(2);

        outDescTotal.textContent = `Desconto Total: R$` + descontoTotal.toFixed(2);

        outSalLiq.textContent = `Salário Líquido: R$` + salarioLiquido.toFixed(2);
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

