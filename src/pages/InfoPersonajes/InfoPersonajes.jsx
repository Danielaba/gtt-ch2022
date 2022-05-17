import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./InfoPersonajes.css"

function InfoPersonajes() {

    const [info, setInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/" + id)
            .then(res => {
                const data = res.data;
                setInfo(data)
            })
    }, [])

    return (
        <div className='info-personaje'>
            <div className='info'>
                <div className='caja-img'>
                    <img src={info?.image} alt="Imagen" className='img' />
                </div>
                <div className='caja-info'>
                    <h2>{info?.name}</h2>
                    <p>status: {info?.status}</p>
                    <p>origin: {info?.origin.name}</p>
                    <p>Location: {info?.location.name}</p>
                    <p>Species: {info?.species}</p>
                </div>

            </div>
        </div>
    );
}

export default InfoPersonajes;