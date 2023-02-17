export default function Alphabet(){
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X','Y','Z'];

    return(
    <ul className="alphabet">
        {alpha.map((item)=>(
        <li>
            <button className="letter start">{item}</button>
        </li>
        ))}
    </ul>
    )
}