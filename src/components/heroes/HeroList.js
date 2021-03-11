import React, {useMemo} from 'react'
import { getHeoreByPublisher } from '../../selectors/getHeroeByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeoreByPublisher(publisher), [publisher])
    //const heroes = getHeoreByPublisher(publisher);

    return (
        <div className="card-columns">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key= {hero.id}
                        {...hero} 
                    />
                    
                ))
            }
            
        </div>
    )
}
