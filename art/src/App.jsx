import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
        <div className='nav-container'>
            <div className='nav'>
                <div className='nav-logo nav-item'> 
                    <a href='#'>London</a>
                </div>
                 <div className='nav-links nav-item'> 
                    <a href='#'>Photographers</a>
                    <a href='#'>Directors</a>
                    <a href='#'>London</a>
                    <a href='#'>Clients</a>
                </div>
                <div className='nav-cta nav-item'> 
                    <a href='#'>Connect with us</a>
                </div>          

            </div>
        </div>
        <div className='bg-gradient'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M46.1,-17.4C52.8,5.7,46.5,30.5,32.8,39C19.1,47.5,-2,39.7,-15,28.5C-27.9,17.2,-32.7,2.5,-28.9,-16.6C-25,-35.7,-12.5,-59.2,3.6,-60.4C19.7,-61.6,39.4,-40.4,46.1,-17.4Z" transform="translate(100 100)" />
</svg>

        </div>
        <div className='hero-container'>
            <div className='hero'>
                <h1>*The art <br/>inspired <br/> by your <br/> story</h1>
                <div className='cta'>
                    <button>Write us a letter</button>
                </div>
                <p>
                  Lorem  Lorem   Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem 
                </p>
            </div>
        </div>
        <div className='blob blob-1'></div>
        <div className='blob blob-2'></div>
        <div className='blob blob-3'></div>
     </div>
    </>
  )
}

export default App
