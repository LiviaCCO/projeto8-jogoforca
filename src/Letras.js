import { useState } from "react";

export default function Letras({word, setWord, letter, setLetter}){
    const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X','Y','Z'];
    
    const [inicio, setInicio] = useState(false);
    const [selecionada, setSelecionada] = ([]);
    
    function letra(event){
        const letraSelecionada = event.target.value;
        //adicionar a letra à lista das letras selecionadas
        setSelecionada([...selecionada, letraSelecionada]);
        //setLetter(letraSelecionada);
        //setInicio(!inicio);
        console.log("set",event.target.value)
        
        //for(let i=0; i<word.length; i++){
        //    if(letter===word[i]){
                //trocar _ pela letra
        //    }
        //}
        
    }
    console.log("letter",letter);
   
    return(
    <ul className="alphabet">
        {alfabeto.map((item)=>(
        <li>
            <button 
            //selecionado = {letraSelecionada}
            onClick = {letra}
            value= {item}
            disabled={selecionada.includes(item)} 
            className={selecionada.includes(item) ? "letter": "letter start"}>{item}</button>
        </li>
        ))}
    </ul>

/*     <ul className="alphabet">
        {alfabeto.map((item)=>(
        <li>
            <button 
            onClick = {()=>setInicio(!inicio)}
            value= {item}
            //disabled={inicio} 
            className={inicio ? "letter": "letter start"}>{item}</button>
        </li>
        ))}
    </ul> */
    )
}