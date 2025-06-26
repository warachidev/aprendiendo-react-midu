import { useEffect, useState } from "react"

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    //useEffect para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return
        /* const firstWord = fact.split(' ').slice(0,3).join(' ') -> Tomar las primeras tres palabras de una array y unirlos*/
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])
    return { imageUrl }
}