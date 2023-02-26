import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import palavras from "./palavras";
import {useState} from 'react';

export default function Jogo({setInicio, word, setWord, letter, setLetter}) {
    // lista com imagens
    const listaDeImagens = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];
    const [erro0, erro1, erro2, erro3, erro4, erro5, erro6] = listaDeImagens;
    //console.log(erro0);
    const [numErro, setNumErro] = useState(erro0);
    //const [word, setWord] = useState([]);
    function palavraEmArray(palavra){
        const novaWord=[];
        for(let i=0; i<palavra.length; i++){
            novaWord.push(palavra[i]);
        }
        setWord(novaWord);
        console.log(novaWord)
    }
    function escolherPalavra(){
        //para zerar a array word
        setWord([]);
        //habilitar letras
        setInicio(false);
        //numErro = 0
        // sortear uma palavra
        const palavraAleatoria = Math.floor(Math.random() * palavras.length);
        const palavra = palavras[palavraAleatoria];
        palavraEmArray(palavra);
        
        
    }


    //const letreiro = (letter===l) ? "_" : letter 
    function imagem(numErro){
        if(numErro===0){
            console.log("entrou")
            return forca0
        }

    }

    return(
        <>
        <button type="button" onClick={escolherPalavra} className="word">Escolher Palavra</button>
        <img src={numErro}/>
        <ul className="wordChosen">
            {word.map((l)=>(
            <li className="letterChosen">_</li>))}
        </ul>
        </>
    )
}