import React from 'react'
import Head from 'next/head'

const CustomHead = (props) => {
    return (
        <Head>
            <title>{`Nxrmqlly: ${props.pageName}`}</title>
        </Head>
    )
}
export default CustomHead