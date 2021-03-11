import React from 'react'
import {Link} from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className='card ms-3 animate__animated animate__slideInUp mb-2' style={{ maxWidth:540 }} >
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={`./React-Heroes-SPA/assets/heroes/${id}.jpg`} className='card-img' alt={superhero}/>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>{superhero}</h5>
                        <p className='card-text'>
                            <span className='text-muted'>Alter ego </span>
                            {alter_ego}
                        </p>
                        {
                            (alter_ego !== characters)
                                && <p className='card-text'>
                                        <span className='text-muted'>Personaje/s </span>
                                        {characters}
                                    </p>
                        }

                        <p className='card-text'>
                            <span className='text-muted'>1.ª aparición </span>
                            {first_appearance}
                        </p>

                        <Link to={`./hero/${id}`} className='btn btn-outline-dark btn-sm' >
                            Ver más...
                        </Link>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
