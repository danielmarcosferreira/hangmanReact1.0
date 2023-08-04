import { useState } from 'react'
import palavras from "./components/palavras"
import "./styles/styles.css"
import imageForca0 from './assets/forca0.png'
import imageForca1 from './assets/forca1.png'
import imageForca2 from './assets/forca2.png'
import imageForca3 from './assets/forca3.png'
import imageForca4 from './assets/forca4.png'
import imageForca5 from './assets/forca5.png'
import imageForca6 from './assets/forca6.png'

function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const imagensForca = [imageForca0, imageForca1, imageForca2, imageForca3, imageForca4, imageForca5, imageForca6]
  let [palavraTracejada, setPalavraTracejada] = useState([])
  const [arrayPalavraSplitada, setArrayPalavraSplitada] = useState([]);
  const [letrasClicadas, setLetrasClicadas] = useState([])
  let [erros, setErros] = useState(0)

  let palavraEscolhida;

  function verificaErro() {
    let novoErro = erros + 1;
    setErros(novoErro);
    console.log(erros)
    if (erros === 5) {
      setPalavraTracejada(arrayPalavraSplitada)
      alert("Voce errou tudo!!!")
    }
  }

  function renderizarPalavraTracejada() {
    const arrayPalavraSplitada = palavraEscolhida.split("");
    setArrayPalavraSplitada(arrayPalavraSplitada);
    palavraTracejada = arrayPalavraSplitada.map((l) => " _ ")
    console.log(arrayPalavraSplitada);
    // console.log(palavraTrace)
    setPalavraTracejada([palavraTracejada])
  }

  function sortearPalavra() {
    palavras.sort(comparador)
    function comparador() {
      return Math.random() - 0.5;
    }

    palavraEscolhida = palavras[10]
    console.log(palavraEscolhida);
  }

  function gerarPalavra() {
    sortearPalavra()
    renderizarPalavraTracejada()
  }

  function verificaLetra(l) {
    let novaLetra = [...letrasClicadas, (l)]
    setLetrasClicadas(novaLetra)
    console.log(letrasClicadas)
    if (arrayPalavraSplitada.includes(l)) {
      // const contemLetras = arrayPalavraSplitada.map((letra, index) => letra === l ? letra : " _ ")
      console.log("contem a letra");
    } else {
      verificaErro()
    }
  }

  return (
    <div className='container'>
      <main>
        <img src={imagensForca[erros]} />

        <div className="mainRight">
          <button onClick={gerarPalavra}>Escolher Palavra</button>
          <h3>{palavraTracejada}</h3>
        </div>
      </main>

      <footer>
        <div className='letras'>
          <ul>
            {alfabeto.map((l, index) =>
              <li key={index} className={((!palavraTracejada.length > 0 || letrasClicadas.includes(l)) ? "bloqueado" : "")}
                onClick={() => verificaLetra(l)}>
                {l}
              </li>)}
          </ul>
        </div>
        <div className="chute">
          <p>Já sei a palavra!</p>
          <input className={palavraTracejada.length > 0 ? "desabilitado" : ""}></input>
          <button onClick={verificaLetra}>Chutar</button>
        </div>
      </footer>v
    </div>
  )
}

export default App
