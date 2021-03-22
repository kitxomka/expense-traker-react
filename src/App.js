import React from 'react'

import './App.css'

import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GLobalProvider } from './context/GlobalState'




const App = () => {
  return (
    <GLobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GLobalProvider>
  )
}

export default App
