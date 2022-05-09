import React, { useState } from 'react'
import musicicon from './images/icon-music.svg'



const Main = () => {
  let [plan, setPlan] =useState('Annual Plan')
  let [ subscription, setsubscription] =useState('$59.99/year')

  let handleChange =()=>{
    if (plan === 'Annual plan'){
      setPlan('Monthly plan')
      setsubscription('$4.99/month')
    } else{
      setPlan('Annual plan')
      setsubscription('$59.99/year')
    }
  }
  

    

  return (
    <div className='main1'>
      <h2>Order Summary</h2>
      <p className='main2'>You can now listen to million of songs, audiobooks, and podcasts on any device,
        anywhere you like!
      </p>
      <div className='main3'>
      <img className='icon'src={musicicon} alt=''/>
      <div>
      <p> {plan}</p>
      <p>{subscription}</p>
      </div>

      <a href='#' >Change</a>
      </div>
      <button >Proceed to Payment</button>
      <div className='main4'>
        <a onClick={handleChange} href='#'>Cancel Order</a>
      </div>

      
      
      

      
 

        
    
        

  
    </div>
  )
}

export default Main