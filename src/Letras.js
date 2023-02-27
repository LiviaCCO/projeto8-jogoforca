export default function Letras({inicio, letraNaPalavra, selecionada, setSelecionada}){
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
            data-test="letter"
            onClick = {letraSelecionada}
            value= {letra}
            disabled={!inicio ? true : (selecionada.includes(letra) ? true : false)} 
           // className={selecionada.includes(letra) ? "letter": "letter start"}>{letra}</button>
            className={inicio ? (selecionada.includes(letra) ? "letter": "letter start") : ("letter")}>{letra}</button>
  
        </li>
        ))}
    </ul>)
  }