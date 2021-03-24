import { useEffect, useState } from "react";
import axios from '../../axios';
import SingleCountry from "./SingleCountry/SingleCountry";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get('/all');
            setCountries(res.data);
        })()
    }, []);
    const countriesWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '20px'
    }
    return (
        <div style={ countriesWrapper }>
            {
                countries.map(country => <SingleCountry
                                            key={country.alpha2Code} 
                                            country={country} 
                                        />
                )
            }
        </div>
    );
};

export default Countries;