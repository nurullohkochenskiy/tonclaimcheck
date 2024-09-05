import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import WalletActions from '@/components/wallet/WalletActions'
import Withdrawals from '@/components/wallet/Withdrawals'

const Wallet = () => {
    return (
        <>
        <Header/>
        <main>
            <WalletActions/>
            <Withdrawals/>
        </main>
        <Footer/>
        </>
        )
}

export default Wallet