import React from 'react'



export const Footer = () => {
  return (
    <footer className=' bg-primary '>
        <hr />
        <div className="container  ">
          <div className='flex justify-between items-center py-5 flex-col md:flex-row gap-5'>
            <div className="text-center text-xl dark:text-color-white">
                <p>Copyright © 2023 | Mike | All Rights Reserved</p>
            </div>
            <div className=" flex gap-7 item-center justify-center text-3xl ">
              <a href="https://www.facebook.com/buboyvargas/" target="_blank" rel="noopener noreferrer"><span className="text-facebook bg-white rounded-full px-2 py-1"><i className="fa-brands fa-facebook"></i></span></a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer"><span className="text-gmail bg-white rounded-full px-2 py-1"><i className="fa-solid fa-envelope"></i></span></a>
              <a href="https://www.instagram.com/devmiks/" target="_blank" rel="noopener noreferrer"><span className="text-insta bg-white rounded-full px-2 py-1"><i className="fa-brands fa-instagram"></i></span></a>
            </div>
          </div>
            
            
        </div>
    </footer>
  )
}
