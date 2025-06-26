import './App.css'
import { Movies } from './components/Movies'
import { useEffect, useRef, useState } from 'react'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    if (search.length < 3) {
      setError('Debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  //const movies = responseMovies.Search
  const { movies, getMovies, loading } = useMovies({ search })
  //const inputRef = useRef()
  //const [query, setQuery] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault() //Evitar el comportamiento por defecto
    /* Version ->  useRef
    const inputElement = inputRef.current
    const value = inputElement.value
    console.log(value)
    */
    /* Version -> Vanilla */
    //const { query } = Object.fromEntries(new window.FormData(event.target))
    //console.log({ query })
    getMovies()
  }

  const handleChange = (event) => {
    //setQuery(event.target.value)
    updateSearch(event.target.value)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          {/* Version -> useRef */}
          {/* <input ref={inputRef} type="text" placeholder='Avengers, Start Wars, The Matrix...' /> */}

          {/* Version -> Vanilla */}
          {/* <input onChange={handleChange} value={query} name="query" type="text" placeholder='Avengers, Start Wars, The Matrix...' /> */}

          <input style={
            { border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }
          } onChange={handleChange} value={search} name="query" type="text" placeholder='Avengers, Start Wars, The Matrix...' />

          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
