import {useState} from 'react';
//import Letras from './Letras';
//import Jogo from './Jogo';
//import JaSei from './JaSei';
import palavras from './palavras';
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";


export default function App() {
  const [inicio, setInicio] = useState(false);
  const [word, setWord] = useState([]);
  const [wordOculta, setWordOculta] = useState([]);
  const [letter, setLetter] = useState([]);
  //qtd de erros
  const [contErro, setContErro] = useState(0);
  //cor da palavra
  const [cor, setCor] = useState("");
  const [selecionada, setSelecionada] = useState([]);
  const novaOculta=wordOculta;
  
  function letraNaPalavra(letra){
    console.log("Entrou na funcao lera na palavra", letra)
    setInicio(true);
    //const novaOculta=wordOculta;
    console.log("novaOculta antes do for",novaOculta)
    let cont = 0;
    for(let i=0; i<word.length;i++){
      if(letra.toLowerCase()===word[i]){
        novaOculta[i]=letra.toLowerCase();
        console.log("novaOculta", novaOculta)
        console.log("word", word)

        if(!novaOculta.includes("_")){
          setCor("verde");
          setInicio(false);
        }
      }else{
        cont++;
      }
      setWordOculta(novaOculta);
    }
    if(cont===word.length){
      const erroTotal = contErro +1;
      setContErro(erroTotal);
      console.log("qtd de erro", erroTotal)

      if(erroTotal== 6){
        console.log("entrou no erro total")
        setWordOculta(word);
        setCor("vermelho");
        setInicio(false);
      }

    }
    console.log("erro", contErro)
    //setWordOculta(novaOculta);
    console.log("depois do for", novaOculta)
  }
  console.log("erro fora da função ", contErro)

  return (
    <div className="App">
      
      <Jogo  wordOculta={wordOculta} setWordOculta={setWordOculta} contErro={contErro} cor={cor} setCor={setCor} letraNaPalavra={letraNaPalavra} inicio={inicio} word={word} setWord={setWord} letter={letter} setLetter={setLetter} setSelecionada={setSelecionada}/>
      <Letras letraNaPalavra={letraNaPalavra} inicio={inicio} setInicio={setInicio} word={word} setWord={setWord} letter={letter} setLetter={setLetter} selecionada={selecionada} setSelecionada={setSelecionada}/>
      {/* <JaSei />  */}

    </div>
  )
}

function Jogo({word, setWord, wordOculta, setWordOculta, contErro, cor, setCor, inicio, setSelecionada}) {
  // lista com imagens
  const listaDeImagens = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];
  
  function palavraEmArray(palavra){
      const novaWord=[];
      const novaWordOculta=[];

      for(let i=0; i<palavra.length; i++){
          novaWord.push(palavra[i]);
          novaWordOculta.push("_");
      }
      setWord(novaWord);
      setWordOculta(novaWordOculta);
      console.log(novaWord);
      console.log(novaWordOculta);
  }

  function escolherPalavra(){
      //para zerar a array word
      setWord([]);
      setWordOculta([]);
      setCor("");
      setSelecionada([]);
      //habilitar letras
      //setInicio(false);
      //numErro = 0
      // sortear uma palavra
      const palavraAleatoria = Math.floor(Math.random() * palavras.length);
      const palavra = palavras[palavraAleatoria];
      palavraEmArray(palavra);
  }


  return(
    <>
    <button 
    type="button" 
    disabled={inicio}
    onClick={escolherPalavra} 
    className="word">Escolher Palavra</button>
    <img src={listaDeImagens[contErro]}/>
    <ul className="wordChosen">
        {wordOculta.map((l)=>(
        <li className={`letterChosen ${cor}`}>{l}</li>))}
    </ul>
    </>
  )
}

function Letras({letraNaPalavra, selecionada, setSelecionada}){
  const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X','Y','Z'];
  
  //const [inicio, setInicio] = useState(false);
  //const [selecionada, setSelecionada] = useState([]);
  //const [clicou, setClicou]
  console.log("selecionada",selecionada);
  
  function letraSelecionada(event){
      const letraSelecionada = event.target.value;
      //adicionar a letra à lista das letras selecionadas
      setSelecionada([...selecionada, letraSelecionada]);

      //verificar se letra consta na palavra
      letraNaPalavra(letraSelecionada);
  }
  
 
  return(
  <ul className="alphabet">
      {alfabeto.map((letra)=>(
      <li>
          <button 
          onClick = {letraSelecionada}
          value= {letra}
          disabled={selecionada.includes(letra)} 
          className={selecionada.includes(letra) ? "letter": "letter start"}>{letra}</button>
      </li>
      ))}
  </ul>)
}