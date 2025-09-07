import './PokemonSprite.css';
import { useState } from 'react';

//We already receive sprites from Home (regular male/female and shiny male/female (or nonbinary slay 💅🏻))
export default function PokemonSprite({ sprites, genderRate, type }) {
    const [isFemale, setIsFemale] = useState(false);
    const [isShiny, setIsShiny] = useState(false);

    const getSprite = () => {
        const gender = isFemale ? "_female" : "";
        const shiny = isShiny ? "_shiny" : "";
        const key = `front${shiny}${gender}`;

        const found = sprites.find(sprite => sprite.path.endsWith(key));

        const fallback = sprites.find(sprite => sprite.path.endsWith('front_default'));

        return found?.value || fallback?.value;
    }
    const hasFemaleSprite = sprites.some(sprite =>
        sprite.path.endsWith('front_female')
    );

    const onlyMale = genderRate === 0;
    const onlyFemale = genderRate === 8;
    const genderless = genderRate === -1;

    return <div className='sprite-container'>
        <img className={`sprite ${type}`} src={getSprite()} />
        <div className='togglers-container'>
            <button onClick={() => hasFemaleSprite && setIsFemale(prev => !prev)} className='toggle-btn'>  {genderless
                ? "⚧️"
                : onlyMale
                    ? "♂️"
                    : onlyFemale
                        ? "♀️"
                        : isFemale
                            ? "♀️"
                            : "♂️"}</button>
            <button onClick={() => setIsShiny(prev => !prev)} className='toggle-btn'>{isShiny ? "✨" : "🍦"}</button>
        </div>
    </div>
}