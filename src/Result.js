import { useEffect, useState } from 'react'
import Pokemon from './Pokemon';

const Result = ( {pokemon} ) => {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')


    useEffect(() => {

        if (pokemon) {
            const logic = async () => {
                const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(
                    pokemon.toLocaleLowerCase())}`


                const res = await fetch(url).then(response => response.json())
                setName(res.name)
                setImg(res.sprites.front_default)

            }
            logic()
        }

    }, [pokemon])

    return (
        <div>
            <Pokemon name={name.toLocaleUpperCase()} img={img} />
        </div>
    )
}

export default Result;