import React, { useState } from 'react'
import './style.css'
import { FaStar } from "react-icons/fa";

const StarRating = ({noOfStars = 5}) => {
    const[rating,setRating] = useState(0)
    const[hover,setHover] = useState(0)

    const handleClick = (getCurrentIndex) =>{
        setRating(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) =>{
        setHover(getCurrentIndex)
    }

    const handleMouseLeve = () =>{
        setHover(rating)
    }
console.log('rat',rating)
console.log(hover)
  return (
    <div className='star-rating'>
        {
          [...Array(noOfStars)].map((_,index) =>{
            index+=1
            return(
                <FaStar 
                    key={index}
                    className={index <= (hover || rating)? 'active':'inactive'}
                    onClick={() =>handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeve()}
                    size={40}
                />
            )
          })
            
            
        }
      
    </div>
  )
}

export default StarRating