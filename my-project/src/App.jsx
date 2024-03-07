
import './App.css'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import HowTo from './Components/HowTo'
import Pricing from './Components/Pricing'
import Roadmap from './Components/Roadmap'

function App() {

  return (
    <div className='text-white'>
      <NavBar />
      <div className='p-2'>
      <Header />
      <Pricing />
      <HowTo />
        <Roadmap />
        </div>
   </div>
  )
}

export default App
