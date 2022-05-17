import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Characters.css"

function Characters({ characters = [], pages = 1, charterForPages }) {
    const handlerChangePage = (e, value) => {
        console.log(value)
        charterForPages(value);
    }
    
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card'>
                        <img src={item.image} alt=''  className='img-personaje'/>
                        <div className='card-body'>
                            <h5 className='card-tile'>{item.name}</h5>
                            <Link to={"/personaje/" + item?.id} className="boton">Ver Detalle</Link>
                        </div>
                    </div>
                </div>
            ))}
            <Stack
                spacing={2}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Pagination onChange={handlerChangePage} count={pages} className='pagination m-5'/>
            </Stack>
        </div>
    );
}

export default Characters;