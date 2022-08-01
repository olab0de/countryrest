import React, {useContext} from 'react'
import '../header.css'
import moondark from '../icons/moondark.svg'
import moonlight from '../icons/moonlight.svg'
import ThemeContextProvider, {ThemeContext} from './themecontext'



function Header() {
    const {lightTheme, themeHandler} = useContext(ThemeContext);

    const mode = lightTheme ? 'Dark Mode': 'Light Mode'
    const moon = lightTheme ? <img src={moondark} alt='moon'/> : <img src={moonlight} alt='moon'/>
    return (
        <header className={lightTheme ? 'headerlight': 'headerdark'}>
            <div className='header-content'>
                <p>Where in the world?</p>
                <div className='right' onClick={themeHandler}>
                    <div className='img'>
                        {moon}
                    </div>
                    <p>{mode}</p>
                </div>
            </div>
        </header>
    )
}

export default Header