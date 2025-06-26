import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const { filters,  setFilters } = useFilters()
    /* const [minPrice, setMinPrice] = useState(0) */
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        /* setMinPrice(event.target.value) */
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="furniture">Muebles</option>
                    <option value="groceries">Comestibles</option>
                </select>
            </div>
        </section>
    )
}