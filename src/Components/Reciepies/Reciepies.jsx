import React from 'react'
import "./Reciepies.css"
import Data from '../data/Data.jsx';

const Reciepies = () => {
    console.log(Data)
  return (
    
    <div style={{padding:"1em"}} className='container'>
      <h1 style={{textAlign:"center"}}>SCUZII RESTRAUNT</h1>
      <span id='menu'>OUR MENU</span>
      <div className='cardsContainer'>
        {Data.recipes.map((prod,index)=>{
          return (
            <div className='card'>
              
              <img src={prod.image} />
              <h3>{prod.name}</h3>
              <p id='cuisine'>Cuisine:{prod.cuisine}</p>
              <p id='mealtype'>Mealtype:{prod.mealType}</p>
            </div>
          )
      })}
      </div>
    </div>
  )
}

export default Reciepies