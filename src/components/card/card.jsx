import React,{useState} from 'react'
import './card.css'
import favicon from './image/heart-solid.svg'


function Card({place,description,imgUrl}) {
  
  let [fav, setFav] = useState(false)
  
  function set() {
    setFav(!fav)
  
  }

  // function set() {
  //   setFav((prev) => {
  //     console.log(prev)
  //     if (prev == false) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  // }

  return (
   
    <div className={`card ${fav ? 'active' : ''}`}>
      <img className='favicon' src={favicon} alt='icon' />
        <img src={imgUrl} alt="" />
        <div className="card-content">
          <h1 className="card-title">{place}</h1>
          <p className="card-description">{description}</p>
      </div>
      <button onClick={() => set()} style={ fav?{backgroundColor:'rgb(233,47,165)'}:{backgroundColor:'#2ecc71'}}>{fav?"ADDED":"ADD"}</button>
      </div>
    
    
  )
}

export default Card 
