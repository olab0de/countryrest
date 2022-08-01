import React, { useState, useContext} from "react"
import downlight from '../icons/chevron-down.svg'
import downdark from '../icons/chevron-downdark.svg'

import ThemeContextProvider, {ThemeContext} from './themecontext'




function Select({setRegion}) {
    const {lightTheme, themeHandler} = useContext(ThemeContext);
    const [open, setOpen] = useState(false)
    const [disRegion, setDisRegion] = useState('Filter By Region')

    const chevron = lightTheme ? <img className={open ? 'chevron chevopen': 'chevron' } src={downlight} alt='chev'/>: <img className={open ? 'chevron chevopen': 'chevron' } src={downdark} alt='chev'/>

    const selectHandler = ()=> {
        setOpen(!open)
    }

    const regionHandler = (e)=> {
        setRegion(e.target.innerText)
        setDisRegion(e.target.innerText)
    }




    return (
        <div  className={lightTheme ? 'selectlight': 'selectdark'} onClick={selectHandler}>
            <button>{disRegion} {chevron}</button>
            <div className={open ? 'select-bottom open': 'select-bottom close' }>
                <p onClick={regionHandler}>Africa</p>
                <p onClick={regionHandler}>Americas</p>
                <p onClick={regionHandler}>Asia</p>
                <p onClick={regionHandler}>Europe</p>
                <p onClick={regionHandler}>Oceania</p>
            </div>
        </div>
    )
}

export default Select



