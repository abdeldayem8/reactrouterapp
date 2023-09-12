import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='contact'>
      
     <h2 className='fw-bolder text-center'>CONTACT COMPONENT</h2>
     <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line2 me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line2 ms-3'></div>
           </div>
           <form className='w-50 p-3 mx-auto mt-5'>
           
            <input id='user' type='text' placeholder='userName' className='form-control border-0 border-bottom my-3 position-relative'  />
            
            <input id='age'  type='text' placeholder='userAge' className='form-control border-0 border-bottom my-3 position-relative'/>
            
            <input id='mail' placeholder='userEmail'  type='text'className='form-control border-0 border-bottom my-3 position-relative' />
            
            <input id='pass' placeholder='userPassword' type='text'className='form-control border-0 border-bottom my-3 position-relative' />
            <button className='btn btn-outline-success mt-4 '>Send Message</button>
           </form>
      </div>
    </>
  )
}
