import {useState} from 'react';
import Letras from './Letras';
import Jogo from './Jogo';
//import JaSei from './JaSei';
import palavras from './palavras';
/* import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png"; */


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
    //setInicio(true);
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
      
      <Jogo  inicio={inicio} setInicio={setInicio} wordOculta={wordOculta} setWordOculta={setWordOculta} contErro={contErro} setContErro={setContErro} cor={cor} setCor={setCor} letraNaPalavra={letraNaPalavra} inicio={inicio} word={word} setWord={setWord} letter={letter} setLetter={setLetter} setSelecionada={setSelecionada}/>
      <Letras letraNaPalavra={letraNaPalavra} inicio={inicio} setInicio={setInicio} word={word} setWord={setWord} letter={letter} setLetter={setLetter} selecionada={selecionada} setSelecionada={setSelecionada}/>
      {/* <JaSei />  */}

    </div>
  )
}

