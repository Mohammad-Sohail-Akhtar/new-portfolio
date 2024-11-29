import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer__container container'>
            <h1 className='footer__title'>Akhtar</h1>


            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>
                        About
                    </a>
                </li>

                <li>
                    <a href='#projects' className='footer__link'>
                        Projects
                    </a>
                </li>

                <li>
                    <a href='#skills' className='footer__link'>
                        Skills
                    </a>
                </li>
            </ul>

            <div className='footer__social'>
            <a href='https://www.linkedin.com/in/mohammad-sohail-akhtar-324016263/' className='footer__social-link' target='_blank'>
        <i className="bx bxl-linkedin"></i>
        </a>

        <a href='https://github.com/Mohammad-Sohail-Akhtar' className='footer__social-link' target='_blank'>
        <i className="bx bxl-github"></i>
        </a>

        {/* <a href='https://twitter.com/' className='footer__social-link' target='_blank'>
        <i className="bx bxl-instagram"></i>
        </a> */}
            </div>

            <span className='footer__copy'>&#169; Mohammad Sohail Akhtar. All rigths reserved</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
