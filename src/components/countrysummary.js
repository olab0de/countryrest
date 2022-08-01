import React, {useContext} from 'react'
import '../countrysummary.css'
import ThemeContextProvider, {ThemeContext} from './themecontext'
import { v4 as uuidv4 } from 'uuid';

function Countrysummary(props) {
    const {lightTheme, themeHandler} = useContext(ThemeContext);

    return (
        <div className={lightTheme ? 'summary-containerlight': 'summary-containerdark'}>
            <div className='country-img'>
                <img src={props.flags.png} alt='img'/>
            </div>
            <div className='summary'>
                <p className='countryname'>{props.name}</p>
                <div className='pop-re-cap'>
                    <p><strong>Population</strong>: {props.population.toLocaleString('en')}</p>
                    <p><strong>Region</strong>: {props.region}</p>
                    <p><strong>Capital</strong>: {props.capital}</p>
                </div>
            </div>
        </div>
    )
} 

export default Countrysummary
