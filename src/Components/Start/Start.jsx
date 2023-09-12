import React from 'react'
import startimg from "../assats/avataaars.svg"
export default function Start() {
  return (
    <>    
      <div className='start d-flex justify-content-center align-items-center text-white'>
        <div className='text-center'>        
        <img  src={startimg} alt='' className='img' />
           <h2 className='fw-bolder'>START FRAMEWORK</h2>
           <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
           </div>
           <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
     
    </>
  )
}
