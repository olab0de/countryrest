import React, { useEffect, useState, useContext } from 'react'
import '../countrydetails.css'
import {useParams, Link, useNavigate} from 'react-router-dom'
import arrowlight from '../icons/arrow-left (2).svg'
import ThemeContextProvider, {ThemeContext} from './themecontext'
import { v4 as uuidv4 } from 'uuid';




function Countrydetails(props) {

    const {lightTheme, themeHandler} = useContext(ThemeContext);

    const [country, setCountry] = useState([]);
    const [countrydetail, setCountryDetail] = useState([])
    const [countrysborder, setCountrysBorder] = useState([])
    let params = useParams().countryname;

    const navigate = useNavigate();

    



    const details = countrydetail.length ?  countrydetail.map(detail => 


    <div className='section-content'  key={uuidv4()}>

                    <div className='countrydet-img' >
                        <img src={detail.flags.png} alt='img'/>
                    </div>
                    <div className='countrydet-content'>
                        <h2>{detail.name}</h2>
                        <div className='otherdet'>
                            <div className='otherdet-left'>
                                <p><span className='det-header'>Native Name:</span> {detail.nativeName}</p>
                                <p><span className='det-header'>Population:</span> {detail.population.toLocaleString('en')}</p>
                                <p><span className='det-header'>Region:</span> {detail.region}</p>
                                <p><span className='det-header'>Sub Region:</span> {detail.subregion}</p>
                                <p><span className='det-header'>Capital:</span> {detail.capital}</p>
                            </div>
                            <div className='otherdet-right'>
                            <p><span className='det-header'>Top Level Domain:</span> {detail.topLevelDomain}</p>
                             <p><span className='det-header'>Currencies:</span> {detail.currencies.map(currency => <span key={uuidv4()} style={{display:'inline-block'}}>{currency.name}</span>)}</p>
                             <p><span className='det-header'>Languages:</span> {detail.languages.map(language => <span key={uuidv4()} className='language-name'>{language.name}, </span>)}</p>
                            </div>
                        </div> 

                        <div className='border-container'>
                            <p>Border Countries:</p>
                            {detail.borders && detail.borders.map(border=> {
                                return countrysborder.map(countryborder => {
                                    if(border === countryborder[1]) {
                                        return <Link key={uuidv4()} to={'/' + countryborder[0]}><button>{countryborder[0]}</button></Link>
                                    }
                                })
                                    
                            })
                            }
                            
                        </div>
                    </div>
                    
    </div> ) : '';


    useEffect(()=> {
        fetch(`https://restcountries.com/v2/name/${params}?fullText=true`)
        .then(response => response.json())
        .then(data => setCountryDetail(data))
        .catch(err => console.log(err.message))
        
    }, [params])

    useEffect(()=> {
        fetch(`https://restcountries.com/v2/all`)
        .then(response => response.json())
        .then(data => setCountrysBorder(data.map(data => [data.name,data.alpha3Code])))
        .catch(err => console.log(err.message))
        
    }, [params])

    



 


    return (
        <main className={lightTheme ? 'App-bottomlight': 'App-bottomdark'}>
            <div className={lightTheme ? 'detailslight' : 'detailsdark'}>
                <button className='back-btn' onClick={() => navigate(-1)}>
                <img src={arrowlight} />Back
                </button>
                <section className='section'>
                    {details}
                </section>
            </div>
        </main>
    )
}

export default Countrydetails