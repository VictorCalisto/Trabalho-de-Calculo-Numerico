const funcao = document.getElementById('funcao');
const aproximacao = document.getElementById('aproximacao');
const erro = document.getElementById('erro');
const enviarButton = document.getElementById('enviar');
const textoFuncao = document.getElementById('textoFuncao');
const textoAproximacao = document.getElementById('textoAproximacao');
const textoErro = document.getElementById('textoErro');
const textoFinal = document.getElementById('textoFinal');
const formulario = document.getElementById('formulario')
let funcaoEscolhida,derivada, contador;

const LIMITE_DE_ITERACAO = 100;

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    if (funcao.value=='funcao1'){
        funcaoEscolhida=new Function('x','return (Math.pow(x,2)-1)');
        derivada=new Function('x','return (2*x)')
    }
    if (funcao.value=='funcao2'){
        funcaoEscolhida=new Function('x','return Math.sin(x)');
        derivada=new Function('x','return Math.cos(x)');
    }
    if (funcao.value=='funcao3'){
        funcaoEscolhida=new Function('x','return (Math.pow(x, 4) - 20*Math.pow(x, 2) + 64)');
        derivada=new Function('x','return (4 * Math.pow(x, 3) - 40 * x)')
    }
    let resultado
    resultado= newtonRaphson(funcaoEscolhida,derivada,aproximacao.value,erro.value)
    if(contador>LIMITE_DE_ITERACAO){
        textoFinal.innerText=`Convergencia não obtida.`;
        
    }else{
        textoFinal.innerHTML= `Uma aproximação para a raiz de f(x) é ${resultado}. <br> Avaliando f(${resultado}) = ${funcaoEscolhida(resultado)}.`
    }
    return
})

function newtonRaphson(f, df, x, e) {
    let fx = f(x);
    let dfx = df(x);
    contador = 0;
    console.log(`console de fora x = ${x}, fx = ${fx}, dfx= ${dfx}`)
    console.log(typeof x,typeof fx,typeof dfx, typeof e)
  
    while (Math.abs(fx) > e && contador < LIMITE_DE_ITERACAO) {
      x = x - (fx / dfx);
      fx = f(x);
      dfx = df(x);
      contador++;
      console.log(`x = ${x}, fx = ${fx}, dfx= ${dfx}`)
    }
  
    return x;
}

