import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
import logo from '../Images/logo.png'
import jalapeno from '../Images/jalapeno.jpeg'
import onion from '../Images/Onion.jpeg'
import lemon from '../Images/lemon.jpeg'
import pack from '../Images/four pack.jpeg'
import freeze from '../Images/freeze.png'
import share from '../Images/share.png'
import enjoy from '../Images/enjoy.png'
import yellow from '../Images/yellow.png'
import orange from '../Images/orange.png'
import purple from '../Images/purple.png'
import blue from '../Images/blue.png'
import Footer from '../Components/Footer'

function Home() {

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);
  const [count5, setCount5] = useState(1);
  const [count6, setCount6] = useState(1);
  const [count7, setCount7] = useState(1);
  const [count8, setCount8] = useState(1);

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  const handleDecrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  const handleDecrement2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  };
  const handleIncrement3 = () => {
    setCount3(count3 + 1);
  };

  const handleDecrement3 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1);
    }
  };
  const handleIncrement4 = () => {
    setCount4(count4 + 1);
  };

  const handleDecrement4 = () => {
    if (count4 > 0) {
      setCount4(count4 - 1);
    }
  };
  const handleIncrement5 = () => {
    setCount5(count5 + 1);
  };

  const handleDecrement5 = () => {
    if (count5 > 0) {
      setCount5(count5 - 1);
    }
  };
  const handleIncrement6 = () => {
    setCount6(count6 + 1);
  };

  const handleDecrement6 = () => {
    if (count6 > 0) {
      setCount6(count6 - 1);
    }
  };
  const handleIncrement7 = () => {
    setCount7(count7 + 1);
  };

  const handleDecrement7 = () => {
    if (count7 > 0) {
      setCount7(count7 - 1);
    }
  };
  const handleIncrement8 = () => {
    setCount8(count8 + 1);
  };

  const handleDecrement8 = () => {
    if (count8 > 0) {
      setCount8(count8 - 1);
    }
  };


  return (
    <div className='home'>
      <Navbar />
    <div className='logo'>
<img src={logo} alt='logo'/>
    </div>
    <div className='sale'>
    <p>SKIPPI CRAZY CORN: NEW YEAR SALE FLAT 25% OFF</p>
    </div>
    <div className='container'>
    <p>SKIPPI CRAZY CORN</p>


    <div className='card_container'>
    <div className='card1'>
      <img src={jalapeno} alt='jalapeno' />
      <p>"Jalapeno Skippi (2 Packs) Crispy Crazy Corn Kernels, Freeze Dried Sweet Corn in Pack of 2"</p>

      <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement1}>
          -
        </button>
        <input
          type="text"
          value={count1}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement1}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 149.00</span>
    </div>
    <div className='card2'>
    <img src={onion} alt='onion' />
    <p>Cream & Onion Skippi (2 Packs) Crispy Crazy Corn Kernels, Freeze Dried Sweet Corn in Pack of 2</p>
    <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement2}>
          -
        </button>
        <input
          type="text"
          value={count2}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement2}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 149.00</span>
    </div>
    <div className='card3'>
    <img src={lemon } alt='lemon ' />
    <p>Lemon & Mint Skippi (2 Packs) Crispy Crazy Corn Kernels, Freeze Dried Sweet Corn in Pack of 2</p>
    <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement3}>
          -
        </button>
        <input
          type="text"
          value={count3}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement3}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 130.00</span>
    </div>
    <div className='card4'>
    <img src={pack} alt='pack' />
    <p>Crispy Crazy Corn Kernels (4 Packs) , Freeze Dried Sweet Corn, Pack of 4 Flavors (Lemon & Mint, White Choco, Jalapeno, Cream & Onion)</p>
    <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement4}>
          -
        </button>
        <input
          type="text"
          value={count4}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement4}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 120.00</span>
    </div>
</div>
    </div>
    <section >
     <h1>Taste the Rainbow</h1>
     <span className='text'>If It's Nostalgic, Sweet, And Natural, It's Got To Be Skippi</span>
     <div className='box'>
<div>
  <img src={freeze} alt='freeze' className='freeze'/>
  <h4>FREEZE</h4>
</div>
<div>
  <img src={share} alt='share' className='share'/>
  <h4>SHARE</h4>
</div>
 
<div>
  <img src={enjoy} alt='enjoy' className='enjoy'/>
  <h4>ENJOY</h4>
</div>
     </div>
    </section>


    <section>
    <div className='card_container1'>
    <div className='card5'>
      <img src={yellow } alt='yellow ' />
      <p>Yellow Box Of Cola, Lychee, Raspberry Flavor Small Pack Of 12
      Skippi Natural Ice Pops Of 32 MI 4 Sets Of 3 Flavors</p>

      <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement5}>
          -
        </button>
        <input
          type="text"
          value={count5}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement5}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 120.00</span>
    </div>
    <div className='card6'>
    <img src={orange} alt='orange' />
    <p>Orange Flavor Skippi Natural Ice Pop, Pack Of 12 Ice Pops</p>
    <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement6}>
          -
        </button>
        <input
          type="text"
          value={count6}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement6}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 144.00</span>
    </div>
    <div className='card7'>
    <img src={purple } alt='purple' />
    <p>Raspberry Flavor Skippi Natural Ice Pop, Pack Of 12 Ice Pops</p>
    <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement7}>
          -
        </button>
        <input
          type="text"
          value={count7}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement7}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 168.00</span>
    </div>
    <div className='card8'>
    <img src={blue} alt='blue' />
    <p>Green Small Box Of Pink Guava,Lemon And Pineapple Flavor
    Small Pack Of 12 Skippi Ice Pops Of 32 MI, 4 Sets Of 3 Flavors</p>
    <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement8}>
          -
        </button>
        <input
          type="text"
          value={count8}
          readOnly
          className="counter-input"
        />
        <button className="counter-button" onClick={handleIncrement8}>
          +
        </button>
      </div>
      <div className='rating'>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      <i class="fa-solid fa-star" style={{color:"#ffce38"}}></i>
      </div>
      <br></br>
      <span>₹ 84.00</span>
    </div>
</div>
    </section>
    <Footer />
    </div>
  )
}

export default Home
