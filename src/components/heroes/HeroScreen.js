import React,{useMemo} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import { getHeoreById } from '../../selectors/getHeroeById';

export const HeroScreen = ({history}) => {
    
    /*const params= useParams();
    console.log(params);*/
    const {heroeId}= useParams();

    const hero = useMemo(() => getHeoreById(heroeId), [heroeId]);

    const {superhero, alter_ego, characters, first_appearance, publisher} = hero

    if(!hero){
        return <Redirect to='/' />
    }

    const handleReturn = () => {
        if(history.length <=2){
            history.push('/')
        }
        else{
            history.goBack();
        }
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`../assets/heroes/${heroeId}.jpg`} 
                    className='img-thumbnail animate__animated animate__fadeIn'
                    alt={superhero}
                    style={{maxHeight:520, backgroundColor:'#E5E5E5', borderColor:"gray"}}
                />
            </div>
            <div className='col-8'>
                <h2>{superhero}</h2>
                <ul className='list-group list-group-flush animate__animated animate__fadeInRight'>
                    <li className='list-group-item'>
                        <span className='text-muted'>Alter ego </span>
                        {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <span className='text-muted'>Publisher </span>
                        {publisher}
                    </li>
                    <li className='list-group-item'>
                        <span className='text-muted'>First appearance </span>
                        {first_appearance}
                    </li>
                    <li className='list-group-item'>
                        <span className='text-muted'>Characters </span>
                        {characters}
                    </li>
                </ul>
                
                <button 
                    className='btn btn-dark mt-4'
                    onClick={handleReturn}
                >
                    Return
                </button>
                
            </div>
        </div>
    )
}
