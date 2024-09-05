import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Links from '@/components/mate/Links'
import MatesList from '@/components/mate/MatesList'

const Mate = () => {
    return (
        <>
        <Header/>
        <main>
            <Links/>
            <MatesList/>
        </main>
        <Footer/>
        </>
        )
}

export default Mate