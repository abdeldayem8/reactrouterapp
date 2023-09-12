import React from 'react'

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className='footer'>
        <div className='container'>
        <div className='row g-4'>
          <div className='col-md-4'>
            <div className='box'>
              <h2>Location</h2>
              <div>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <h2>AROUND THE WEB</h2>
               <div className='icons'>
               <i className="fa-brands fa-facebook mx-1 icon"></i>
               <i className="fa-brands fa-twitter mx-1 icon"></i>
               <i  className="fa-brands fa-linkedin-in mx-1 icon"></i>
               <i  className="fa-solid fa-globe mx-1 icon"></i>
               </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <h2>ABOUT FREELANCER</h2>
              <div >
                <p>Freelance is a free to use, licensed Bootstrap theme created by Abdeldaim</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='lastfooter'>
          <div>
            <p className='text-white text-center'>Copyright © Your Website <span>{year}</span></p>
          </div>
        </div>
    </>
  )
}
