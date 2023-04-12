const textoEntrada = document.getElementById('textoEntrada');
const entrada = document.getElementById('entrada');
const enviar = document.getElementById('enviar');
const textoFinal = document.getElementById('textoFinal');
const formulario = document.getElementById('formulario')

const LIMITE_DE_ITERACAO = 100;
let cliques=0,negativo=false;
let baseAntiga,baseNova,numeroAntigo,numeroNovo,numeroNaBaseDez;
const DIGITOS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';


formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    cliques++;

    switch (cliques){
        case 1:{
            baseAntiga=entrada.value;
            configuracao(baseAntiga)
            break;
        }
        case 2:{
            numeroAntigo=entrada.value.toString();
            auxiliar=numeroAntigo;
            if (auxiliar.indexOf('-')!=-1){
                negativo=true;
                auxiliar=auxiliar.replace(/-/g, "");
            }else{
                negativo=false // caso o programa se repita varias vezes.
            }
            if (auxiliar.indexOf('.')==-1){
                auxiliar+=".0"
            };
            
            numeroNaBaseDez=hexadecimalParaDecimal(baseAntiga,auxiliar);
            numeroNaBaseDez=parseFloat(numeroNaBaseDez);
            configuracao(1)
            break;
        }
        case 3:{
            baseNova=entrada.value;
            numeroNovo=decimalParaHexadecimal(baseNova,numeroNaBaseDez);
            if(negativo==true)numeroNovo='-'+numeroNovo;
            configuracao(-1)
            break;
        }
        default:{
            configuracao(0);
            break;  
        }
    }
})
    
function configuracao(base=0){
    entrada.value='';
    let texto=[
        'A base escolhida deve ser um número inteiro entre [2;36]',
        "O número escolhido pode ser positivo, negativo ou fracionário.",
        "Se negativo basta colocar '-' no começo do numero.",
        "Se fracionario basta separa as partes com um '.' .",
        `Digite um número na base ${base}:`,
    ]
    if (base==-1){//ultima tela
        textoFinal.innerHTML=`O numero ${numeroAntigo} na base ${baseAntiga} e igual ao numero ${numeroNovo} na base ${baseNova}.`;
        textoEntrada.innerText='';
        entrada.setAttribute('style','display:none');
        entrada.removeAttribute('required');
        entrada.removeAttribute('autofocus');
        enviar.innerText='Vamos novamente ?';
    }
    if (base==0){//primeira tela
        cliques=0;
        textoFinal.innerHTML=texto[0];
        textoEntrada.innerText='Digite a base atual:';
        entrada.setAttribute('autofocus',true)
        entrada.removeAttribute('style');
        entrada.setAttribute('required',true)
        entrada.setAttribute('step','1');
        entrada.setAttribute('min','2');
        entrada.setAttribute('max','36')
        entrada.setAttribute('type','number');
        entrada.removeAttribute('pattern');
        enviar.innerText='Enviar';
    }
    if (base==1){//terceira tela
        textoFinal.innerHTML=texto[0];
        textoEntrada.innerText='Digite a nova base:';
        entrada.setAttribute('step','1');
        entrada.setAttribute('min','2');
        entrada.setAttribute('max','36')
        entrada.setAttribute('type','number');
        entrada.removeAttribute('pattern');
    }
    if (base>=2&&base<=10){
        textoFinal.innerHTML=texto[1]+"<br>"+texto[2]+"<br>"+texto[3];
        textoEntrada.innerText=texto[4];
        entrada.setAttribute('step','any');
        entrada.removeAttribute('min');
        entrada.removeAttribute('max','36');
        entrada.setAttribute('type','number');
        entrada.setAttribute('pattern','^-?[0-9]*\.?[0-9]+$');
    }
    if (base>10&&base<=36){
        textoFinal.innerHTML=texto[1]+"<br>"+texto[2]+"<br>"+texto[3];
        textoEntrada.innerText=texto[4];
        entrada.removeAttribute('step');
        entrada.removeAttribute('min');
        entrada.removeAttribute('max','36');
        entrada.setAttribute('type','text');
        entrada.setAttribute('pattern','^-?[A-Z0-9]*\.?[A-Z0-9]*$');
    }
}

function decimalParaHexadecimal(base,numero){
    
    let resultado = '', contador=0;
    let parteInteira = Math.floor(numero);
    let parteFracionaria = numero - parteInteira;
    if (parteInteira==0) resultado='0';
    
    while (parteInteira != 0 && contador<LIMITE_DE_ITERACAO) {
      resultado += DIGITOS[(parteInteira % base)];
      parteInteira = Math.floor(parteInteira / base);
      contador++;
    }
    
    resultado=resultado.split('').reverse().join('');

    if(parteFracionaria>0)resultado+='.';
    
    while(parteFracionaria!=0 && contador<LIMITE_DE_ITERACAO){
        resultado+=DIGITOS[Math.floor(parteFracionaria*base)];
        parteFracionaria=(parteFracionaria*base)-Math.floor(parteFracionaria*base);
        contador++;
    }

    return resultado;
}

function hexadecimalParaDecimal(base,numero){
    
    let parte = numero.split('.');
    let parteInteira = parte[0].split('').reverse().join('');
    let parteFracionaria = parte[1];

    let resultado=0,auxiliar=0;

    for(let i=0;i<parteInteira.length;i++){
        resultado+=(DIGITOS.indexOf(parteInteira[i])*Math.pow(base,i));
    }
    
    for(let i=-1;i>=(parteFracionaria.length*(-1));i--){
        let j=Math.abs(i)-1;
        auxiliar+=(DIGITOS.indexOf(parteFracionaria[j])*Math.pow(base,i));
    }

    if(parteFracionaria.length>0)resultado+=auxiliar;
    
    return resultado;
}
  