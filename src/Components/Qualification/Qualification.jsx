import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
    
  return (
    <>
      <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
            <div className={toggleState === 1 ? "qualification__button qualication__active button--flex" : 'qualification__button button--flex'}
            onClick={()=>toggleTab(1)}
            >
                <i className='uil uil-graduation-cap qualification__icon'></i> Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualication__active button--flex" : 'qualification__button button--flex'}
            onClick={()=>toggleTab(2)}
            >
                <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
            </div>
        </div>



        <div className='qualification__sections'>

        {/* This section is for education  */}
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Bachelor Degree</h3>
                        <span className='qualification__subtitle'>Birmingham City University</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>2023 - Present</i>
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

                <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                    <div>
                        <h3 className='qualification__title'>Intermediate Level</h3>
                        <span className='qualification__subtitle'>GoldenGate Internation School</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>2018 - 2020</i>
                        </div>
                    </div>
                </div>

                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Secondary Education Examination</h3>
                        <span className='qualification__subtitle'>G.H.P Secondary School</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>2005 - 2018</i>
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

                {/* <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                    <div>
                        <h3 className='qualification__title'>Web Development</h3>
                        <span className='qualification__subtitle'>Broadwyas Infosys Institute</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>2022</i>
                        </div>
                    </div>
                </div> */}
            </div>
 

        {/* This section is for experience  */}

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Web Development</h3>
                        <span className='qualification__subtitle'>Broadway Infosys</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>2023</i>
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

                <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                    <div>
                        <h3 className='qualification__title'>React Js</h3>
                        <span className='qualification__subtitle'>Sunway College Kathamndu</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>August, 2024 - November, 2024</i>
                        </div>
                    </div>
                </div>

                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Power Bi</h3>
                        <span className='qualification__subtitle'>Sunway College Kathamndu</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>August, 2024 - November, 2024</i>
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

                <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                    <div>
                        <h3 className='qualification__title'>Probability and Statistics</h3>
                        <span className='qualification__subtitle'>Sunway College Kathamndu</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>August, 2024 - November, 2024</i>
                        </div>
                    </div>
                </div>


                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>C Programming</h3>
                        <span className='qualification__subtitle'>NIIT Birgunj</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'>September, 2021 - January, 2022</i>
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Qualification

