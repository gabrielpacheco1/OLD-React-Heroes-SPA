import React, {useMemo} from 'react'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    const location= useLocation();
    
    const {q=''} = queryString.parse(location.search);

    const [formValues, handleInputChange, reset] = useForm({
        searchText: q
    })

    const {searchText} = formValues;

    const herosFiltered = useMemo(() => getHeroesByName(q), [q])

    //const herosFiltered = getHeroesByName(searchText);

    const handleSearch = (e) => {
        e.preventDefault();
        
        history.push(`?q=${ searchText }`)
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row animate__animated animate__slideInUp'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-dark btn-block mt-2'
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        (q==='')
                            &&
                            <div className='alert alert-secondary text-center'>
                                Search a hero
                            </div>
                    }

                    {
                        (q !== '' && herosFiltered.length === 0)
                            &&
                            <div className='alert alert-danger text-center'>
                                There is no heroes with "{q}"
                            </div>
                    }

                    {
                        herosFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                                className='mb-1'
                            />
                        ))
                    }    

                </div>
            </div>
        </div>
    )
}
