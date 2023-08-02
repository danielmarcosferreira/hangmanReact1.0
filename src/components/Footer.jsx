export default function Footer() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <footer>
            <div className='letras'>
                <ul>
                    {alfabeto.map((l) => <li className="">{l}</li>)}
                </ul>
            </div>
            <div className="chute">
                <p>Já sei a palavra!</p>
                <input></input>
                <button>Chutar</button>
            </div>
        </footer>
    )
}