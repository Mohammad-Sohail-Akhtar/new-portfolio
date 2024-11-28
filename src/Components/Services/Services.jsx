import React, { useState } from 'react'
import "./Services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <>
      <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__container container grid'>
        <div className='services__content'>
            <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>Web <br/> Developer</h3>
            </div>

            <span className='services__button' onClick={()=>toggleTab(1)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>

                    <h3 className='services__modal-title'>Web Developer</h3>
                    {/* <p className='services__modal-description'>Services with more than 3 yrears of experience. Providing quality work to clients and companies.</p> */}

                    <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Develop the user interface.</p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Web Page Development.</p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Create UX element interactions.</p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Creating the website fully responsive</p>
                        </li>
{/* 
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Design and mockups of products for companies.</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>

        <div className='services__content'>
            <div>
                <i className='uil uil-arrow services services__icon'></i>
                <h3 className='services__title'>UI/UX <br/> Designer</h3>
            </div>

            <span className='services__button' onClick={()=>toggleTab(2)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>

                    <h3 className='services__modal-title'>UI/UX Designer</h3>
                    <p className='services__modal-description'>Services with more than 3 yrears of experience. Providing quality work to clients and companies.</p>

                    <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Develop the user interface.</p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Web Page Design using figma.</p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>I create UX element interactions.</p>
                        </li>

                        <li className='services__modal-service'>
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>Preparing Design assets.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* If any more needs to be aaded than we can simply copy from the services__content  */}
      </div>
      </section>
    </>
  )
}

export default Services
