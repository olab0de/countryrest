import React, { useContext } from 'react'
import lightsearch from '../icons/search (1).svg'
import darksearch from '../icons/search (2).svg'
import ThemeContextProvider, {ThemeContext} from './themecontext'

function Search({searchHandler}) {

    const {lightTheme, themeHandler} = useContext(ThemeContext);
    const searchIcon = lightTheme ? <img src={lightsearch} alt='search'/> : <img src={darksearch} alt='search'/>


    const handleChange = (e)=> {
       searchHandler(e.target.value.toLowerCase())
    }

    return (
        <form className={lightTheme ? 'formlight' : 'formdark'}>
            <input type='text' 
             placeholder='Search for a country...' 
             onChange={handleChange}               
             />
             {searchIcon}
        </form>
    )
}

export default Search