import React from 'react'
import imgportfolio from '../assats/poert1.png'
import imgportfolio2 from '../assats/port2.png'
import imgportfolio3 from '../assats/port3.png'


export default function Portfolio() {
  return (
    <>
    <div className='portfolio'>
     <h2 className='fw-bolder text-center'>PORTFOLIO COMPONENT</h2>
     <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line2 me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line2 ms-3'></div>
           </div>
      <div className='container'>
        <div className='row g-4'>
          <div className='col-lg-4 col-md-6'>
            <div className='box overflow-hidden rounded-3 position-relative'>
              <img src={imgportfolio} className='img-fluid'/>
              <div className='layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                 <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
          <div className='box overflow-hidden rounded-3 position-relative'>
              <img src={imgportfolio2} className='img-fluid'/>
              <div className='layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                 <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
           
          </div>
          <div className='col-lg-4 col-md-6'>
          <div className='box overflow-hidden rounded-3 position-relative'>
              <img src={imgportfolio3} className='img-fluid'/>
              <div className='layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                 <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
          <div className='box overflow-hidden rounded-3 position-relative'>
              <img src={imgportfolio} className='img-fluid'/>
              <div className='layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                 <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
          <div className='box overflow-hidden rounded-3 position-relative'>
              <img src={imgportfolio2} className='img-fluid'/>
              <div className='layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                 <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
          <div className='box overflow-hidden rounded-3 position-relative'>
              <img src={imgportfolio3} className='img-fluid'/>
              <div className='layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                 <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
