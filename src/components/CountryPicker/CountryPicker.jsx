import React, { useEffect, useState } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {countries} from '../../api'

function CountryPicker({handleCountryChange}){
    const [fetchedCountries, SetFetchedCountries] = useState([  ])
    useEffect(() => {
        const FetchCountries = async () => {
            SetFetchedCountries(await countries())
        }
        FetchCountries();
    }, [SetFetchedCountries])
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global"></option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;       