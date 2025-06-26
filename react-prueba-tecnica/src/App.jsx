import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

//const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/hello?fontSize=50&fontColor=red&json=true`
//const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    // no puedes usar ReactQeuery, SWR, axios, apollo
    // useEffect para recuperar la cita al cargar la página
    //useEffect(() => { getRandomFact().then(setFact) }, [])

    const handleClick = async () => {
        refreshFact()
        /* const newFact = await getRandomFact()
        setFact(newFact) */
    }
    return (
        <main>
            <h1>App de gatos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>} {/* Renderizado condicional */}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}></img>}
        </main>
    )
}