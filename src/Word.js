
export default function Word() {
    const word = ['D','R','I','V','E','N'];
    return(
        <ul className="wordChosen">
            {word.map((l)=>(<li className="letterChosen">{l}</li>))}
        </ul>
    )
}