import React from 'react'
import Star from '../Star/Star'

export default function Stars({ count }) {

  const starsArr = new Array(count).fill('');

  return (
    <>
      { (count >= 1 && count <= 5) && <ul className='card-body-stars u-clearfix"'>
          <Star starsArr={ starsArr }/>
        </ul> 
      }
    </>
  )
}


