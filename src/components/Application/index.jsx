import { useEffect, useState } from "react";
import axios from 'axios';

import { CardCharacter } from "../CardCharacter";
import { ContainerApp, ContentCharacters, HeaderApp } from "./styles";


export function Application() {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [countPage, setCountPage] = useState('')
    const [qtdCharacters, setQtdCharacters] = useState('')

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            const array = [...characters, ...response.data.results]
            setCharacters(array)
            setCountPage(response.data.info.pages)
            setQtdCharacters(response.data.info.count)
        })
    }, [page])
    return (
        <>
            <ContainerApp>
                <HeaderApp>
                    <h1>Rick and Morty</h1>
                    <span>Num. de personagens: {qtdCharacters}</span>
                </HeaderApp>

                <ContentCharacters>
                    <div>
                        {
                            characters && characters.map(({image, name, gender, species}) => {
                                return (
                                    <CardCharacter
                                        image={image}
                                        name={name}
                                        genre={gender}
                                        specie={species}
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        (!(page === countPage)) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>
                    }
                </ContentCharacters>
            </ContainerApp>
        </>
    )
}