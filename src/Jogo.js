import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function Jogo({setWord, wordOculta, setWordOculta, contErro, setContErro, cor, setCor, setInicio,  inicio, setSelecionada}) {
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
        setContErro(0);
        setInicio(true);
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
      data-test="choose-word"
      disabled={inicio}
      onClick={escolherPalavra} 
      className="word">Escolher Palavra</button>
      <img data-test="game-image" src={listaDeImagens[contErro]}/>
      <ul data-test="word" className="wordChosen">
          {wordOculta.map((l)=>(
          <li className={`letterChosen ${cor}`}>{l}</li>))}
      </ul>
      </>
    )
  }
  
  