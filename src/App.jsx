import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Navigation from './components/Navigation/navigation';
import ContractForm from './components/ContractForm/ContractForm';
function App() {
    return (
      <div>
        <Navigation />
        <main className='whole'>
          <ContactHeader />
          <ContractForm />
        </main>
        
      </div>
  )
};

export default App
