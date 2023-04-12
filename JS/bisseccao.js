const funcao = document.getElementById('funcao');
const limiteInferior = document.getElementById('limiteInferior');
const limiteSuperior = document.getElementById('limiteSuperior');
const erro = document.getElementById('erro');
const funcaoDigitada = document.getElementById('funcaoDigitada');
const enviarButton = document.getElementById('enviar');
const textoFuncao = document.getElementById('textoFuncao');
const textoLimiteInferior = document.getElementById('textoLimiteInferior');
const textoLimiteSuperior = document.getElementById('textoLimiteSuperior');
const textoErro = document.getElementById('textoErro');
const textoFuncaoDigitada = document.getElementById('textoFuncaoDigitada');
const textoFinal = document.getElementById('textoFinal');
const formulario = document.getElementById('formulario')
let funcaoEscolhida, contador;

const LIMITE_DE_ITERACAO = 100;

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    if(limiteInferior.value>limiteSuperior.value){
        alert('O limite superior deve ser maior do inferior.');
    }else{
        if (funcao.value=='funcao1'){
            funcaoEscolhida=new Function('x','return (Math.pow(x,2)-1)');
        }
        if (funcao.value=='funcao2'){
            funcaoEscolhida=new Function('x','return Math.sin(x)');
        }
        if (funcao.value=='funcao3'){
            funcaoEscolhida=new Function('x','return (Math.pow(x, 4) - 20*Math.pow(x, 2) + 64)');
        }
        if(funcao.value=='funcao4'){
            try{
                let auxiliar = new Function('x',`return (${funcaoDigitada.value})`);
                lixo = auxiliar(limiteInferior.value)+auxiliar(limiteSuperior.value);
                funcaoEscolhida=new Function('x',`return (${funcaoDigitada.value})`);;
            }catch{
                alert('A funcao foi digitada de forma incorreta.');
                return
            }
        }
        if(funcaoEscolhida(limiteInferior.value)*funcaoEscolhida(limiteSuperior.value)>0){
            alert('O valor dos intervalos é invalido.')
        }else{
            let resultado
            resultado = bisseccao(funcaoEscolhida,limiteInferior.value,limiteSuperior.value,erro.value);
            if(contador>LIMITE_DE_ITERACAO){
                textoFinal.innerText=`Convergencia não obtida.`;
                
            }else{
                textoFinal.innerHTML= `Uma aproximação para a raiz de f(x) no intervalo é ${resultado}. <br> Avaliando f(${resultado}) = ${funcaoEscolhida(resultado)}.`
            }
        }
    }
    return
})

funcao.addEventListener('change',(evento)=>{
    evento.preventDefault();
    if(funcao.value=='funcao4'){
        textoFuncaoDigitada.removeAttribute('style');
        funcaoDigitada.removeAttribute('style');
        funcaoDigitada.setAttribute('required', true);
    }else{
        textoFuncaoDigitada.setAttribute('style','visibility:hidden');
        funcaoDigitada.setAttribute('style','visibility:hidden');
        funcaoDigitada.removeAttribute('required');
    }
})

function bisseccao(f, a, b, e) {
    a = parseFloat(a);
    b = parseFloat(b);
    let fa = f(a);
    let fb = f(b);
    let c = (a + b)/2.0;
    let fc = f(c);
    contador=0;

    while ((Math.abs(fc) > e)&&(contador<LIMITE_DE_ITERACAO)) {
      if (fa*fc < 0) {
        b = c;
        fb = fc;
      } else {
        a = c;
        fa = fc;
      }
      
      c = (a + b)/2.0;
      fc = f(c);
      contador++;
    }
    
    return c;
  }

