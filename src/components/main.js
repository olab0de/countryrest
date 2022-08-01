import React, {useEffect, useState, useContext} from 'react'
import Search from "./search"
import Select from "./select"
import '../main.css'
import Countrysummary from "./countrysummary"
import {Link} from 'react-router-dom'
import ThemeContextProvider, {ThemeContext} from './themecontext'
import { v4 as uuidv4 } from 'uuid';

function Main() {
    const [country, setCountry] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searcFilter, setSearchFilter] = useState([])
    const [region, setRegion] = useState('all');
    const {lightTheme, themeHandler} = useContext(ThemeContext);

    


    const filterHandler = ()=> {
        switch(region) {
            case 'Africa':
                setFiltered(country.filter(country => country.region === 'Africa'));
                setSearchFilter(country.filter(country => country.region === 'Africa'));
                break;
            case 'Americas':
                setFiltered(country.filter(country => country.region === 'Americas'));
                setSearchFilter(country.filter(country => country.region === 'Americas'));
                break;
            case 'Asia':
                setFiltered(country.filter(country => country.region === 'Asia'));
                setSearchFilter(country.filter(country => country.region === 'Asia'));
                break;
            case 'Europe':
                setFiltered(country.filter(country => country.region === 'Europe'));
                setSearchFilter(country.filter(country => country.region === 'Europe'));
                break;
            case 'Oceania':
                setFiltered(country.filter(country => country.region === 'Oceania'));
                setSearchFilter(country.filter(country => country.region === 'Oceania'));
                break;
            default:
                setFiltered(country);
                setSearchFilter(country)
        }
    }


    const searchHandler = (searchInput)=> { 
        if(searchInput === '') setFiltered(searcFilter);
        else {
         setFiltered(filtered.filter(country => country.name.toLowerCase().indexOf(searchInput) !== -1))
        }
    }




    const summary = filtered.length === 0 ?  <div className={lightTheme ? 'loaderlight' : 'loaderdark'}>Nothing to see Yet! &#128064;...</div> : (filtered.map(filtered =>
        <Link to={`/${filtered.name}`} style={{ textDecoration:'none'}}  key={uuidv4()}>
             <Countrysummary  name={filtered.name} capital={filtered.capital}
            population={filtered.population} region={filtered.region} flags={filtered.flags}/>
        </Link>
    )) 
       

    useEffect(()=> {

        fetch('https://restcountries.com/v2/all?fields=name,capital,population,region,flags')
        .then(response => response.json())
        .then((data) => setCountry(data))
        .catch(err => console.log(err.message))

    }, [])

    useEffect(()=> {
        setFiltered(country)
        filterHandler()
    }, [country, region])

    

    return(
        <main className='App-bottom'>
             <div className={lightTheme ? 'main-contentlight' : 'main-contentdark'}>
               <div className="main-top">
                <Search searchHandler={searchHandler}/>
                <Select setRegion={setRegion}/>
               </div>
               <div className='main-bottom'>
                {summary}
               </div>
             </div>
        </main>
       
    )
}

export default Main
