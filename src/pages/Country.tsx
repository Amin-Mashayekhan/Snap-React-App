import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

type Props = {}


const Country = (props: Props) => {
    const [pageLoading, setPageLoading] = useState(false)
    const [countryDetails, setCountryDetails] = useState<{ip: string; country: string;}>(false)
    console.log("🚀 ~ file: Country.tsx:4 ~ countryDetails:", countryDetails)
    useEffect(() => {
        getCountryByIP()
    }, [])


    async function getCountryByIP() {
        setPageLoading(true);
        const res = await fetch(`https://api.country.is/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(formUserDetails)
        })

        const data = await res.json()
        setCountryDetails(data)
        setPageLoading(false)
    }



    return (
        <>
            {
                pageLoading ? (
                    <Spinner className='mx-auto' />
                ) : (
                    <h3>The country associated with your IP is <span className="text-success">{countryDetails.country}</span></h3>
                )
            }
        </>
    )

}

export default Country